// Variáveis globais
let questions = [];
let filteredQuestions = [];
let currentQuestionIndex = 0;
let selectedOption = null;

// Elementos do DOM
const questionText = document.getElementById('questionText');
const optionsContainer = document.getElementById('optionsContainer');
const explanation = document.getElementById('explanation');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const randomBtn = document.getElementById('randomBtn');
const yearFilter = document.getElementById('yearFilter');
const areaFilter = document.getElementById('areaFilter');
const subareaFilter = document.getElementById('subareaFilter');
const totalQuestionsSpan = document.getElementById('totalQuestions');
const currentQuestionSpan = document.getElementById('currentQuestion');
const totalQuestionsDisplay = document.getElementById('totalQuestionsDisplay');

// Carregar as questões
async function loadQuestions() {
    try {
        // Lista de arquivos de questões
        const questionFiles = [
            'questions/20162.js',
            'questions/20171.js',
            'questions/20172.js',
            'questions/20181.js',
            'questions/20182.js',
            'questions/20191.js',
            'questions/20192.js',
            'questions/20201.js',
            'questions/20202.js',
            'questions/20211.js',
            'questions/20212.js',
            'questions/20221.js',
            'questions/20222.js',
            'questions/20231.js',
            'questions/20232.js',
            'questions/20241.js',
            'questions/20242.js'   
        ];

        // Função para processar o conteúdo de um arquivo
        const processFileContent = (text, file) => {
            // Tenta fazer o parse direto primeiro (pode falhar para arquivos muito grandes)
            try {
                return JSON.parse(text);
            } catch (e) {
                console.log(`Tentando método alternativo para ${file}...`);
                
                // Remove BOM se existir
                let cleanText = text.trim();
                if (cleanText.charCodeAt(0) === 0xFEFF) {
                    cleanText = cleanText.slice(1);
                }
                
                // Normaliza quebras de linha
                cleanText = cleanText
                    .replace(/\r\n/g, '\n')
                    .replace(/\r/g, '\n');
                
                // Tenta extrair o JSON usando uma abordagem mais tolerante
                try {
                    // Se começa com [ e termina com ], é um array JSON
                    if (cleanText.startsWith('[') && cleanText.endsWith(']')) {
                        // Usa um parser JSON mais tolerante
                        const json5 = JSON5 || window.JSON5; // Tenta usar JSON5 se disponível
                        if (json5) {
                            return json5.parse(cleanText);
                        }
                        
                        // Se não tiver JSON5, tenta o parse normal novamente
                        return JSON.parse(cleanText);
                    }
                    
                    // Tenta extrair o JSON usando regex
                    const jsonMatch = cleanText.match(/\[\s*\{.*\}\s*\]/s);
                    if (jsonMatch) {
                        try {
                            return JSON.parse(jsonMatch[0]);
                        } catch (e) {
                            console.warn('Falha ao fazer parse do JSON extraído:', e);
                        }
                    }
                    
                    // Se não conseguir extrair, tenta processar como módulo
                    if (cleanText.includes('bancoDeQuestoes_PPGI')) {
                        try {
                            const script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.text = cleanText + '; window._tempQuestions = bancoDeQuestoes_PPGI;';
                            document.head.appendChild(script);
                            
                            const questions = window._tempQuestions || [];
                            delete window._tempQuestions;
                            document.head.removeChild(script);
                            
                            return Array.isArray(questions) ? questions : [];
                        } catch (e) {
                            console.warn(`Falha no método com variável global para ${file}:`, e);
                        }
                    }
                    
                    // Se o arquivo for muito grande, tenta processar em pedaços
                    if (cleanText.length > 1024 * 1024) { // 1MB
                        console.log(`Arquivo grande (${(cleanText.length / (1024*1024)).toFixed(2)} MB), processando em partes...`);
                        
                        // Tenta encontrar os limites dos objetos JSON
                        const jsonObjects = [];
                        let start = cleanText.indexOf('{');
                        let depth = 0;
                        let inString = false;
                        let escape = false;
                        
                        for (let i = start; i < cleanText.length; i++) {
                            const char = cleanText[i];
                            
                            if (escape) {
                                escape = false;
                                continue;
                            }
                            
                            if (char === '\\' && inString) {
                                escape = true;
                                continue;
                            }
                            
                            if (char === '"' && (i === 0 || cleanText[i-1] !== '\\')) {
                                inString = !inString;
                            }
                            
                            if (!inString) {
                                if (char === '{') depth++;
                                if (char === '}') {
                                    depth--;
                                    if (depth === 0) {
                                        const jsonStr = cleanText.substring(start, i + 1);
                                        try {
                                            const obj = JSON.parse(jsonStr);
                                            jsonObjects.push(obj);
                                        } catch (e) {
                                            console.warn('Erro ao processar objeto JSON parcial:', e);
                                        }
                                        start = cleanText.indexOf('{', i + 1);
                                        if (start === -1) break;
                                        i = start - 1;
                                    }
                                }
                            }
                        }
                        
                        // Se encontrou objetos, retorna como array
                        if (jsonObjects.length > 0) {
                            console.log(`Encontrados ${jsonObjects.length} objetos JSON no arquivo`);
                            return jsonObjects;
                        }
                    }
                    
                    // Se chegou aqui, não conseguiu processar
                    console.warn(`Formato não reconhecido para o arquivo ${file}`);
                    return [];
                    
                } catch (innerError) {
                    console.error(`Erro ao processar o conteúdo do arquivo ${file}:`, innerError);
                    return [];
                }
            }
        };

        // Carrega cada arquivo de questões
        const questionPromises = questionFiles.map(file => {
            return fetch(file)
                .then(response => {
                    if (!response.ok) {
                        throw new Error(`Erro HTTP ${response.status}: ${response.statusText}`);
                    }
                    return response.text();
                })
                .then(text => processFileContent(text, file))
                .catch(error => {
                    console.error(`Erro ao carregar o arquivo ${file}:`, error);
                    return [];
                });
        });

        // Aguarda todos os arquivos serem carregados
        const questionArrays = await Promise.all(questionPromises);
        
        // Juntar todas as questões em um único array
        questions = questionArrays.flat();
        
        // Log detalhado para depuração
        console.log('=== RESUMO DO CARREGAMENTO ===');
        console.log('Total de questões carregadas:', questions.length);
        
        // Mostra quantas questões foram carregadas de cada arquivo
        questionFiles.forEach((file, index) => {
            const count = questionArrays[index]?.length || 0;
            console.log(`- ${file}: ${count} questões`);
        });
        
        // Agrupa por ano
        const porAno = questions.reduce((acc, q) => {
            const ano = q.ano_prova || 'Sem ano';
            if (!acc[ano]) acc[ano] = [];
            acc[ano].push(q);
            return acc;
        }, {});
        
        console.log('\nQuestões por ano:');
        Object.entries(porAno)
            .sort(([a], [b]) => a - b)
            .forEach(([ano, quests]) => {
                console.log(`- ${ano}: ${quests.length} questões`);
                
                // Se houver anos sem questões, mostra um aviso
                if (quests.length === 0) {
                    console.warn(`  AVISO: Nenhuma questão carregada para o ano ${ano}`);
                }
            });
            
        // Verifica se todas as questões têm os campos obrigatórios
        const problemas = [];
        questions.forEach((q, i) => {
            if (!q.id_questao) problemas.push(`Questão ${i+1}: Sem ID`);
            if (!q.ano_prova) problemas.push(`Questão ${i+1} (${q.id_questao || 'sem ID'}): Sem ano`);
            if (!q.enunciado) problemas.push(`Questão ${i+1} (${q.id_questao || 'sem ID'}): Sem enunciado`);
        });
        
        if (problemas.length > 0) {
            console.warn('\nProblemas encontrados nas questões:');
            problemas.forEach(p => console.warn(`- ${p}`));
        }
        
        // Inicializar as questões filtradas
        filteredQuestions = [...questions];
        
        // Atualizar a interface
        updateFilters();
        updateQuestion();
        updateStats();
        
    } catch (error) {
        console.error('Erro ao carregar as questões:', error);
        questionText.textContent = 'Erro ao carregar as questões. Por favor, verifique o console para mais detalhes.';
    }
}

// Atualizar os filtros disponíveis
function updateFilters() {
    // Limpar filtros existentes
    yearFilter.innerHTML = '<option value="">Todos os anos</option>';
    areaFilter.innerHTML = '<option value="">Todas as áreas</option>';
    subareaFilter.innerHTML = '<option value="">Todas as subáreas</option>';
    
    // Coletar valores únicos para cada filtro
    const years = new Set();
    const areas = new Set();
    const subareas = new Set();
    
    questions.forEach(question => {
        years.add(question.ano_prova);
        
        if (question.area && question.area.length > 0) {
            question.area.forEach(area => {
                areas.add(area.nome);
                if (area.subarea) {
                    subareas.add(area.subarea);
                }
            });
        }
    });
    
    // Preencher o seletor de anos
    Array.from(years).sort((a, b) => b - a).forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });
    
    // Preencher o seletor de áreas
    Array.from(areas).sort().forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.textContent = area;
        areaFilter.appendChild(option);
    });
    
    // Preencher o seletor de subáreas
    Array.from(subareas).sort().forEach(subarea => {
        const option = document.createElement('option');
        option.value = subarea;
        option.textContent = subarea;
        subareaFilter.appendChild(option);
    });
}

// Filtrar questões com base nos filtros selecionados
function filterQuestions() {
    const selectedYear = yearFilter.value;
    const selectedArea = areaFilter.value;
    const selectedSubarea = subareaFilter.value;
    
    filteredQuestions = questions.filter(question => {
        // Filtrar por ano
        if (selectedYear && question.ano_prova != selectedYear) {
            return false;
        }
        
        // Filtrar por área e subárea
        if (selectedArea || selectedSubarea) {
            if (!question.area || question.area.length === 0) {
                return false;
            }
            
            const areaMatch = question.area.some(area => {
                const areaMatches = !selectedArea || area.nome === selectedArea;
                const subareaMatches = !selectedSubarea || area.subarea === selectedSubarea;
                return areaMatches && subareaMatches;
            });
            
            if (!areaMatch) {
                return false;
            }
        }
        
        return true;
    });
    
    // Resetar o índice da questão atual
    currentQuestionIndex = 0;
    
    // Atualizar a interface
    updateQuestion();
    updateStats();
}

// Atualizar a exibição da questão atual
function updateQuestion() {
    if (filteredQuestions.length === 0) {
        questionText.textContent = 'Nenhuma questão encontrada com os filtros selecionados.';
        optionsContainer.innerHTML = '';
        explanation.style.display = 'none';
        return;
    }
    
    const question = filteredQuestions[currentQuestionIndex];
    
    // Configuração do marked.js
    marked.setOptions({
        breaks: true,          // Quebras de linha se tornam <br>
        gfm: true,            // Suporte a GitHub Flavored Markdown
        smartLists: true,     // Listas mais inteligentes
        smartypants: true,    // Aspas e travessões inteligentes
        xhtml: true           // Fechar tags XHTML
    });
    
    // Processar o texto da questão com Markdown
    const processedQuestion = question.enunciado ? marked.parse(question.enunciado) : '';
    
    // Adicionar o ano da prova
    const yearBadge = question.ano_prova ? 
        `<div style="margin-bottom: 15px; color: #666; font-size: 0.9em;">
            <strong>Ano da Prova:</strong> ${question.ano_prova}
        </div>` : '';
    
    questionText.innerHTML = `${yearBadge}${processedQuestion}`;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    
    // Adicionar as opções de resposta
    if (question.opcoes && question.opcoes.length > 0) {
        question.opcoes.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            
            // Processar o texto da opção com Markdown
            const optionText = option.texto ? marked.parse(option.texto) : '';
            optionElement.innerHTML = `
                <div class="markdown-body" style="margin: 0;">
                    <strong>${option.letra})</strong> ${optionText}
                </div>
            `;
            
            optionElement.dataset.index = index;
            optionElement.addEventListener('click', () => selectOption(optionElement, option.correta));
            optionsContainer.appendChild(optionElement);
        });
    }
    
    // Esconder a explicação
    explanation.style.display = 'none';
    
    // Atualizar estado dos botões de navegação
    prevBtn.disabled = currentQuestionIndex === 0;
    nextBtn.disabled = currentQuestionIndex === filteredQuestions.length - 1;
    
    // Atualizar contador de questões
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    totalQuestionsDisplay.textContent = filteredQuestions.length;
}

// Selecionar uma opção de resposta
function selectOption(optionElement, isCorrect) {
    // Remover seleção anterior
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
        opt.style.cursor = 'default';
    });
    
    // Marcar a opção selecionada
    optionElement.classList.add('selected');
    optionElement.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    // Mostrar a explicação se disponível
    const question = filteredQuestions[currentQuestionIndex];
    if (question.explicacao_geral) {
        explanation.innerHTML = question.explicacao_geral;
        explanation.style.display = 'block';
    }
    
    // Desabilitar o clique nas opções após a seleção
    options.forEach(opt => {
        opt.style.pointerEvents = 'none';
    });
}

// Mostrar a resposta correta
function showAnswer() {
    if (filteredQuestions.length === 0) return;
    
    const question = filteredQuestions[currentQuestionIndex];
    
    // Processar a explicação com Markdown, se existir
    if (question.explicacao_geral) {
        // Configuração do marked.js para a explicação
        marked.setOptions({
            breaks: true,          // Quebras de linha se tornam <br>
            gfm: true,            // Suporte a GitHub Flavored Markdown
            smartLists: true,     // Listas mais inteligentes
            smartypants: true,    // Aspas e travessões inteligentes
            xhtml: true,          // Fechar tags XHTML
            katex: true
        });
        
        const processedExplanation = marked.parse(question.explicacao_geral);
        explanation.innerHTML = `
            <div class="markdown-body" style="padding: 15px; background-color: #f8f9fa; border-radius: 5px; margin-top: 15px;">
                <h4 style="margin-top: 0; color: #2c3e50; border-bottom: 1px solid #eee; padding-bottom: 8px;">Explicação:</h4>
                <div class="explanation-content">${processedExplanation}</div>
            </div>
        `;
        
        // Renderizar equações LaTeX após a inserção no DOM
        if (window.renderMathInElement) {
            renderMathInElement(explanation, {
                delimiters: [
                    {left: '$$', right: '$$', display: true},
                    {left: '$', right: '$', display: false},
                    {left: '\\(', right: '\\)', display: false},
                    {left: '\\[', right: '\\]', display: true}
                ],
                throwOnError: false
            });
        }
        
        explanation.style.display = 'block';
    }
    
    // Destacar a opção correta
    const correctOption = question.opcoes.find(opt => opt.correta);
    if (!correctOption) return;
    
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        if (opt.textContent.trim().startsWith(correctOption.letra + ')')) {
            opt.classList.add('correct');
        }
    });
}

// Atualizar estatísticas
function updateStats() {
    totalQuestionsSpan.textContent = questions.length;
    totalQuestionsDisplay.textContent = filteredQuestions.length;
}

// Navegar para a questão anterior
function prevQuestion() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        updateQuestion();
    }
}

// Navegar para a próxima questão
function nextQuestion() {
    if (currentQuestionIndex < filteredQuestions.length - 1) {
        currentQuestionIndex++;
        updateQuestion();
    }
}

// Ir para uma questão aleatória
function randomQuestion() {
    if (filteredQuestions.length === 0) return;
    
    let newIndex;
    do {
        newIndex = Math.floor(Math.random() * filteredQuestions.length);
    } while (filteredQuestions.length > 1 && newIndex === currentQuestionIndex);
    
    currentQuestionIndex = newIndex;
    updateQuestion();
}

// Event Listeners
document.addEventListener('DOMContentLoaded', loadQuestions);
prevBtn.addEventListener('click', prevQuestion);
nextBtn.addEventListener('click', nextQuestion);
showAnswerBtn.addEventListener('click', showAnswer);
randomBtn.addEventListener('click', randomQuestion);
yearFilter.addEventListener('change', filterQuestions);
areaFilter.addEventListener('change', () => {
    subareaFilter.value = ''; // Resetar subárea ao mudar a área
    filterQuestions();
});
subareaFilter.addEventListener('change', filterQuestions);

// Navegação por teclado
document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        prevQuestion();
    } else if (e.key === 'ArrowRight') {
        nextQuestion();
    } else if (e.key === ' ') {
        e.preventDefault();
        showAnswer();
    } else if (e.key === 'r' || e.key === 'R') {
        randomQuestion();
    }
});
