/**
 * Sistema de gerenciamento de questões
 */

// Variáveis globais
let questions = [];
let filteredQuestions = [];
let currentQuestionIndex = 0;
let selectedOption = null;

// Lista de arquivos de questões
const questionFiles = [
    'data/questions/20162.json',
    'data/questions/20171.json',
    'data/questions/20172.json',
    'data/questions/20181.json',
    'data/questions/20182.json',
    'data/questions/20191.json',
    'data/questions/20220.json',
    'data/questions/20230.json',
    'data/questions/20241.json',
    'data/questions/20242.json',
    'data/questions/20250.json',
    'data/questions/20260.json'
];

/**
 * Carrega um arquivo de texto
 * @param {string} url - URL do arquivo
 * @returns {Promise<string>} - Conteúdo do arquivo
 */
async function loadTextFile(url) {
    try {
        console.log(`Tentando carregar: ${url}`);
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
        }
        const text = await response.text();
        console.log(`Arquivo carregado com sucesso: ${url}`);
        return text;
    } catch (error) {
        console.error(`Erro ao carregar o arquivo ${url}:`, error);
        return null;
    }
}

/**
 * Carrega todas as questões
 */
async function loadQuestions() {
    try {
        console.log("Iniciando carregamento de questões...");
        document.getElementById('questionText').innerHTML = 'Carregando questões...';
        
        // Tentar carregar os arquivos de questões
        const questionPromises = questionFiles.map(file => {
            return loadTextFile(file)
                .then(text => {
                    if (text) {
                        return processFileContent(text, file);
                    }
                    console.warn(`Arquivo ${file} retornou texto vazio`);
                    return [];
                })
                .catch(error => {
                    console.error(`Erro ao carregar o arquivo ${file}:`, error);
                    return [];
                });
        });

        // Aguardar todos os arquivos serem carregados
        const questionArrays = await Promise.all(questionPromises);
        
        // Exibir diagnóstico de carregamento
        console.log("=== DIAGNÓSTICO DE CARREGAMENTO ===");
        questionArrays.forEach((arr, index) => {
            const file = questionFiles[index];
            console.log(`${file}: ${arr.length} questões carregadas`);
        });
        console.log("==================================");
        
        // Combinar todos os arrays de questões
        questions = questionArrays.flat();
        console.log(`Total de questões carregadas: ${questions.length}`);
        
        // Log do total de questões carregadas
        console.log(`Total de questões disponíveis: ${questions.length}`);
        
        // Preencher os filtros
        populateFilters(questions);
        
        // Aplicar filtros iniciais
        filteredQuestions = applyFilters(questions);
        
        // Atualizar contadores
        document.getElementById('totalQuestionsDisplay').textContent = filteredQuestions.length;
        
        // Mostrar a primeira questão
        if (filteredQuestions.length > 0) {
            showQuestion(0);
        } else {
            document.getElementById('questionText').innerHTML = 'Nenhuma questão encontrada. Verifique os arquivos de questões.';
        }
    } catch (error) {
        console.error('Erro ao carregar as questões:', error);
        document.getElementById('questionText').innerHTML = 'Erro ao carregar as questões. Por favor, recarregue a página.';
    }
}

/**
 * Mostra uma questão específica
 * @param {number} index - Índice da questão a ser mostrada
 */
function showQuestion(index) {
    if (index < 0 || index >= filteredQuestions.length) {
        return;
    }

    currentQuestionIndex = index;
    selectedOption = null;
    
    const question = filteredQuestions[index];
    
    // Atualizar metadados da questão
    const questionMeta = document.getElementById('questionMeta');
    if (question.ano_prova) {
        let metaContent = `<span class="question-year">Prova ${question.ano_prova}</span>`;
        
        // Adicionar áreas
        if (question.area && Array.isArray(question.area) && question.area.length > 0) {
            const areas = question.area.map(area => {
                if (area.subarea) {
                    return `${area.nome} - ${area.subarea}`;
                }
                return area.nome;
            }).join(' • ');
            metaContent += ` <span class="question-separator">•</span> <span class="question-areas">${areas}</span>`;
        }
        
        questionMeta.innerHTML = metaContent;
    } else {
        questionMeta.innerHTML = '';
    }
    
    // Atualizar texto da questão
    const questionText = document.getElementById('questionText');
    questionText.innerHTML = processMarkdown(question.enunciado);
    
    // Renderizar LaTeX na questão
    renderLatex(questionText);
    
    // Renderizar diagramas Mermaid na questão
    renderMermaid(questionText);
    
    // Verificar se a questão já foi respondida
    const savedProgress = window.progressManager ? window.progressManager.getQuestionProgress(question.id_questao) : null;
    
    // Atualizar indicadores visuais do progresso
    const questionCard = document.getElementById('questionCard');
    if (questionCard) {
        // Remover classes anteriores
        questionCard.classList.remove('answered', 'incorrect');
        
        // Remover indicador anterior se existir
        const existingIndicator = questionCard.querySelector('.progress-indicator');
        if (existingIndicator) {
            existingIndicator.remove();
        }
        
        // Adicionar indicadores se a questão foi respondida
        if (savedProgress) {
            questionCard.classList.add('answered');
            
            // Criar indicador visual
            const indicator = document.createElement('div');
            indicator.className = `progress-indicator ${savedProgress.isCorrect ? 'correct' : 'incorrect'}`;
            indicator.innerHTML = savedProgress.isCorrect ? '✓' : '✗';
            indicator.title = savedProgress.isCorrect ? 'Respondida corretamente' : 'Respondida incorretamente';
            questionCard.appendChild(indicator);
            
            if (!savedProgress.isCorrect) {
                questionCard.classList.add('incorrect');
            }
        }
    }
    
    // Atualizar status na meta da questão
    if (questionMeta && question.ano_prova) {
        let statusBadge = '';
        if (savedProgress) {
            if (savedProgress.isCorrect) {
                statusBadge = '<span class="question-status answered-correct">✓ Correta</span>';
            } else {
                statusBadge = '<span class="question-status answered-incorrect">✗ Incorreta</span>';
            }
        } else {
            statusBadge = '<span class="question-status new">Nova</span>';
        }
        
        let metaContent = `<span class="question-year">Prova ${question.ano_prova}</span>`;
        
        // Adicionar áreas
        if (question.area && Array.isArray(question.area) && question.area.length > 0) {
            const areas = question.area.map(area => {
                if (area.subarea) {
                    return `${area.nome} - ${area.subarea}`;
                }
                return area.nome;
            }).join(' • ');
            metaContent += ` <span class="question-separator">•</span> <span class="question-areas">${areas}</span>`;
        }
        
        metaContent += statusBadge;
        questionMeta.innerHTML = metaContent;
    }
    
    // Limpar opções anteriores
    const optionsContainer = document.getElementById('optionsContainer');
    optionsContainer.innerHTML = '';
    
    // Adicionar opções
    if (question.opcoes && Array.isArray(question.opcoes)) {
        question.opcoes.forEach(option => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `<strong>${option.letra.toUpperCase()})</strong> <span class="markdown-body">${marked.parse(option.texto)}</span>`;
            
            // Renderizar LaTeX na opção
            renderLatex(optionElement);
            
            // Restaurar estado se a questão já foi respondida
            if (savedProgress && savedProgress.selectedOption === option.letra) {
                selectedOption = option.letra;
                optionElement.classList.add('selected');
                
                // Marcar como correta ou incorreta
                const isCorrect = option.correta === true;
                optionElement.classList.add(isCorrect ? 'correct' : 'incorrect');
                
                // Mostrar explicação se disponível
                if (question.explicacao_geral) {
                    const explanation = document.getElementById('explanation');
                    explanation.innerHTML = processMarkdown(question.explicacao_geral);
                    renderLatex(explanation);
                    renderMermaid(explanation);
                    explanation.style.display = 'block';
                }
            }
            
            // Adicionar evento de clique
            optionElement.addEventListener('click', function() {
                if (selectedOption !== null) {
                    return; // Já respondeu
                }
                
                selectedOption = option.letra;
                
                // Marcar a opção selecionada
                document.querySelectorAll('.option').forEach(el => {
                    el.classList.remove('selected');
                });
                optionElement.classList.add('selected');
                
                // Verificar se está correta
                const isCorrect = option.correta === true;
                
                // Marcar a opção selecionada
                optionElement.classList.add(isCorrect ? 'correct' : 'incorrect');
                
                // Reproduzir som de acerto ou erro
                if (window.AudioManager) {
                    if (isCorrect) {
                        window.AudioManager.playCorrectSound();
                    } else {
                        window.AudioManager.playIncorrectSound();
                    }
                }
                
                // Registrar a resposta no sistema de persistência
                if (window.progressManager && question.id_questao) {
                    window.progressManager.recordAnswer(
                        question.id_questao,
                        option.letra,
                        isCorrect,
                        question.area
                    );
                }
                
                // Registrar a resposta nas estatísticas
                recordAnswer(isCorrect, question.area);
                
                // Mostrar a explicação se disponível
                if (question.explicacao_geral) {
                    const explanation = document.getElementById('explanation');
                    explanation.innerHTML = processMarkdown(question.explicacao_geral);
                    renderLatex(explanation);
                    renderMermaid(explanation);
                    explanation.style.display = 'block';
                }
            });
            
            optionsContainer.appendChild(optionElement);
        });
    }
    
    // Esconder explicação
    document.getElementById('explanation').style.display = 'none';
    
    // Atualizar contadores
    document.getElementById('currentQuestion').textContent = index + 1;
    
    // Atualizar barra de progresso
    updateProgressBar();
    
    // Atualizar estado dos botões
    updateButtonStates();
}

/**
 * Atualiza a barra de progresso
 */
function updateProgressBar() {
    if (filteredQuestions.length === 0) return;

    const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
    const progressBar = document.getElementById('progressBar');
    if (progressBar) {
        progressBar.style.width = `${progress}%`;
    }
}

/**
 * Atualiza o estado dos botões de navegação
 */
function updateButtonStates() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    if (prevBtn) {
        prevBtn.disabled = currentQuestionIndex <= 0;
    }
    
    if (nextBtn) {
        nextBtn.disabled = currentQuestionIndex >= filteredQuestions.length - 1;
    }
}

/**
 * Mostra a resposta correta da questão atual
 */
function showAnswer() {
    if (filteredQuestions.length === 0) return;
    
    const question = filteredQuestions[currentQuestionIndex];
    
    // Marcar a opção correta
    document.querySelectorAll('.option').forEach(optionElement => {
        const optionLetter = optionElement.querySelector('strong').textContent.charAt(0).toLowerCase();
        const option = question.opcoes.find(opt => opt.letra === optionLetter);
        
        if (option && option.correta) {
            optionElement.classList.add('correct');
        }
    });
    
    // Mostrar a explicação
    if (question.explicacao_geral) {
        const explanation = document.getElementById('explanation');
        explanation.innerHTML = processMarkdown(question.explicacao_geral);
        renderLatex(explanation);
        renderMermaid(explanation);
        explanation.style.display = 'block';
    }
}

/**
 * Vai para uma questão aleatória
 */
function goToRandomQuestion() {
    if (filteredQuestions.length <= 1) return;
    
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * filteredQuestions.length);
    } while (randomIndex === currentQuestionIndex);
    
    showQuestion(randomIndex);
}/**

 * Embaralha as questões filtradas usando o algoritmo Fisher-Yates
 */
function shuffleQuestions() {
    if (filteredQuestions.length <= 1) {
        if (window.modalManager) {
            window.modalManager.showMessage('Não há questões suficientes para embaralhar!', 'error');
        }
        return;
    }

    // Adicionar animação ao botão shuffle
    const shuffleBtn = document.getElementById('shuffleBtn');
    if (shuffleBtn) {
        shuffleBtn.classList.add('shuffling');
        setTimeout(() => {
            shuffleBtn.classList.remove('shuffling');
        }, 600);
    }

    // Adicionar animação ao card da questão
    const questionCard = document.getElementById('questionCard');
    if (questionCard) {
        questionCard.classList.add('shuffling');
        setTimeout(() => {
            questionCard.classList.remove('shuffling');
        }, 800);
    }

    // Mostrar feedback visual centralizado
    showShuffleFeedback(filteredQuestions.length);

    // Algoritmo Fisher-Yates para embaralhar array
    setTimeout(() => {
        for (let i = filteredQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [filteredQuestions[i], filteredQuestions[j]] = [filteredQuestions[j], filteredQuestions[i]];
        }

        // Resetar para a primeira questão após embaralhar
        currentQuestionIndex = 0;
        showQuestion(0);

        // Mostrar indicador de shuffle
        const shuffleIndicator = document.getElementById('shuffleIndicator');
        if (shuffleIndicator) {
            shuffleIndicator.style.display = 'block';
        }

        console.log(`Questões embaralhadas! Total: ${filteredQuestions.length}`);
    }, 400); // Delay para sincronizar com a animação
}/**
 
* Mostra feedback visual centralizado para o shuffle
 * @param {number} count - Número de questões embaralhadas
 */
function showShuffleFeedback(count) {
    const feedback = document.createElement('div');
    feedback.className = 'shuffle-feedback';
    feedback.innerHTML = `🔀 ${count} questões<br>embaralhadas!`;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        if (feedback.parentNode) {
            feedback.parentNode.removeChild(feedback);
        }
    }, 1500);

}


