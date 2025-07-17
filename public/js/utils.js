/**
 * Utilitários para o aplicativo de banco de questões
 */

/**
 * Renderiza LaTeX em um elemento
 * @param {HTMLElement} element - Elemento onde renderizar o LaTeX
 */
function renderLatex(element) {
    if (window.renderMathInElement) {
        renderMathInElement(element, {
            delimiters: [
                { left: '$', right: '$', display: false },
                { left: '$$', right: '$$', display: true },
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false }
            ],
            throwOnError: false
        });
    } else {
        console.warn("renderMathInElement não está disponível");
    }
}

/**
 * Alterna entre tema claro e escuro
 */
function toggleTheme() {
    const isDarkMode = document.body.getAttribute('data-theme') === 'dark';
    document.body.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
    document.getElementById('themeToggle').textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', !isDarkMode);
}

/**
 * Carrega o tema preferido do usuário
 */
function loadThemePreference() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.setAttribute('data-theme', 'dark');
        document.getElementById('themeToggle').textContent = '🌙';
    }
}

/**
 * Função para processar o conteúdo do arquivo de questões
 * @param {string} text - Conteúdo do arquivo
 * @param {string} file - Nome do arquivo
 * @returns {Array} - Array de questões processadas
 */
function processFileContent(text, file) {
    try {
        console.log(`Processando arquivo: ${file}`);
        
        // Tentar analisar como JSON
        let parsedQuestions;
        try {
            parsedQuestions = JSON.parse(text);
            console.log(`Arquivo ${file} processado como JSON padrão`);
        } catch (e) {
            console.log(`Erro ao processar ${file} como JSON padrão, tentando alternativas: ${e.message}`);
            
            // Se falhar, tentar como JavaScript array
            const jsContent = text.trim();
            
            // Verificar se começa com [ ou const/let/var
            if (jsContent.startsWith('[')) {
                console.log(`Tentando processar ${file} como array JSON5`);
                parsedQuestions = JSON5.parse(jsContent);
            } else if (jsContent.includes('=')) {
                // Extrair a parte após o sinal de igual
                console.log(`Tentando processar ${file} como atribuição de variável`);
                const arrayPart = jsContent.split('=').slice(1).join('=').trim();
                parsedQuestions = JSON5.parse(arrayPart);
            } else {
                console.error(`Formato não reconhecido no arquivo ${file}`);
                return [];
            }
        }
        
        console.log(`Arquivo ${file} processado com sucesso, encontradas ${parsedQuestions.length} questões`);
        
        // Adicionar informação do arquivo à cada questão
        return parsedQuestions.map(q => ({
            ...q,
            sourceFile: file
        }));
    } catch (error) {
        console.error(`Erro ao processar o arquivo ${file}:`, error);
        return [];
    }
}

/**
 * Atualiza a barra de progresso
 */
function updateProgressBar() {
    if (filteredQuestions.length === 0) return;

    const progress = ((currentQuestionIndex + 1) / filteredQuestions.length) * 100;
    document.getElementById('progressBar').style.width = `${progress}%`;
    document.getElementById('progressPercent').textContent = `${Math.round(progress)}%`;
}

/**
 * Atualiza o estado dos botões de navegação
 */
function updateButtonStates() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtnMobile = document.getElementById('prevBtnMobile');
    const nextBtnMobile = document.getElementById('nextBtnMobile');
    
    prevBtn.disabled = currentQuestionIndex <= 0;
    prevBtnMobile.disabled = currentQuestionIndex <= 0;
    
    nextBtn.disabled = currentQuestionIndex >= filteredQuestions.length - 1;
    nextBtnMobile.disabled = currentQuestionIndex >= filteredQuestions.length - 1;
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
}