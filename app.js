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
            'questions/20171.js'
        ];

        // Carregar cada arquivo de questões
        const questionPromises = questionFiles.map(file => {
            return fetch(file)
                .then(response => response.text())
                .then(text => {
                    try {
                        // Criar um script temporário para extrair a variável bancoDeQuestoes_PPGI
                        const script = document.createElement('script');
                        script.type = 'text/javascript';
                        script.text = text + '; window._tempQuestions = bancoDeQuestoes_PPGI;';
                        document.head.appendChild(script);
                        
                        // Obter as questões da variável global temporária
                        const questions = window._tempQuestions;
                        
                        // Limpar a variável global e remover o script
                        delete window._tempQuestions;
                        document.head.removeChild(script);
                        
                        return Array.isArray(questions) ? questions : [];
                    } catch (e) {
                        console.error('Erro ao analisar o arquivo:', file, e);
                        return [];
                    }
                })
                .catch(error => {
                    console.error('Erro ao carregar o arquivo:', file, error);
                    return [];
                });
        });

        // Aguardar todos os arquivos serem carregados
        const questionArrays = await Promise.all(questionPromises);
        
        // Juntar todas as questões em um único array
        questions = questionArrays.flat();
        
        console.log('Questões carregadas:', questions);
        
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
    
    // Exibir o texto da questão
    questionText.innerHTML = question.enunciado;
    
    // Limpar opções anteriores
    optionsContainer.innerHTML = '';
    
    // Adicionar as opções de resposta
    if (question.opcoes && question.opcoes.length > 0) {
        question.opcoes.forEach((option, index) => {
            const optionElement = document.createElement('div');
            optionElement.className = 'option';
            optionElement.innerHTML = `<strong>${option.letra})</strong> ${option.texto}`;
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
    const question = filteredQuestions[currentQuestionIndex];
    if (!question || !question.opcoes) return;
    
    const correctOption = question.opcoes.find(opt => opt.correta);
    if (!correctOption) return;
    
    const options = document.querySelectorAll('.option');
    options.forEach(opt => {
        if (opt.textContent.trim().startsWith(correctOption.letra + ')')) {
            opt.classList.add('correct');
        }
    });
    
    // Mostrar a explicação se disponível
    if (question.explicacao_geral) {
        explanation.innerHTML = question.explicacao_geral;
        explanation.style.display = 'block';
    }
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
