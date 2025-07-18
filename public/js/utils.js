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
    const newTheme = isDarkMode ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
    document.getElementById('themeToggle').textContent = isDarkMode ? '☀️' : '🌙';
    localStorage.setItem('darkMode', !isDarkMode);
    
    // Atualizar o tema do Mermaid
    if (window.mermaid) {
        mermaid.initialize({
            startOnLoad: false,
            theme: newTheme === 'dark' ? 'dark' : 'default',
            securityLevel: 'loose'
        });
        console.log(`Tema do Mermaid atualizado para: ${newTheme === 'dark' ? 'dark' : 'default'}`);
    }
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

/**
 * Renderiza um bloco de código Mermaid específico
 * @param {HTMLElement} block - Bloco de código a ser renderizado
 * @param {number} index - Índice para gerar um ID único
 */
function renderMermaidBlock(block, index) {
    const id = 'mermaid-diagram-' + index;
    const content = block.textContent.trim();
    
    // Criar um div para o diagrama
    const diagramDiv = document.createElement('div');
    diagramDiv.className = 'mermaid-diagram';
    diagramDiv.id = id;
    
    // Substituir o bloco de código pelo div
    const preElement = block.parentNode;
    preElement.parentNode.insertBefore(diagramDiv, preElement);
    preElement.style.display = 'none';
    
    // Renderizar o diagrama
    try {
        mermaid.render(id, content)
            .then(result => {
                diagramDiv.innerHTML = result.svg;
            })
            .catch(error => {
                console.error('Erro ao renderizar Mermaid:', error);
                diagramDiv.innerHTML = '<p class="error">Erro ao renderizar diagrama</p><pre>' + content + '</pre>';
                preElement.style.display = 'block'; // Mostrar o código original em caso de erro
            });
    } catch (error) {
        console.error('Erro ao renderizar Mermaid:', error);
        diagramDiv.innerHTML = '<p class="error">Erro ao renderizar diagrama</p><pre>' + content + '</pre>';
        preElement.style.display = 'block'; // Mostrar o código original em caso de erro
    }
}

/**
 * Renderiza diagramas Mermaid em um elemento
 * @param {HTMLElement} element - Elemento onde renderizar os diagramas Mermaid
 */
function renderMermaid(element) {
    if (!window.mermaid) {
        console.warn("mermaid não está disponível");
        return;
    }
    
    console.log("Renderizando diagramas Mermaid...");
    
    // Inicializar Mermaid com o tema apropriado
    mermaid.initialize({ 
        startOnLoad: false,
        theme: document.body.getAttribute('data-theme') === 'dark' ? 'dark' : 'default',
        securityLevel: 'loose' // Permite renderizar diagramas de qualquer fonte
    });
    
    // Encontrar todos os blocos de código com a classe language-mermaid
    const mermaidCodeBlocks = element.querySelectorAll('code.language-mermaid');
    console.log(`Encontrados ${mermaidCodeBlocks.length} blocos de código com classe language-mermaid`);
    
    // Processar cada bloco de código com a classe language-mermaid
    mermaidCodeBlocks.forEach((block, index) => {
        console.log(`Processando bloco de código Mermaid #${index}`);
        renderMermaidBlock(block, index);
    });
    
    // Encontrar blocos de código que começam com "mermaid" ou têm sintaxe de diagrama Mermaid
    const allCodeBlocks = element.querySelectorAll('pre > code:not(.language-mermaid)');
    console.log(`Encontrados ${allCodeBlocks.length} outros blocos de código para verificar`);
    
    allCodeBlocks.forEach((block, index) => {
        const content = block.textContent.trim();
        
        // Verificar se o conteúdo parece ser um diagrama Mermaid
        if (content.startsWith('graph ') || 
            content.startsWith('flowchart ') || 
            content.startsWith('sequenceDiagram') || 
            content.startsWith('classDiagram') || 
            content.startsWith('stateDiagram') || 
            content.startsWith('gantt') || 
            content.startsWith('pie') || 
            content.startsWith('mermaid')) {
            
            console.log(`Bloco de código #${index} identificado como Mermaid`);
            // Marcar como Mermaid e renderizar
            block.classList.add('language-mermaid');
            renderMermaidBlock(block, mermaidCodeBlocks.length + index);
        }
    });
    
    // Encontrar divs com a classe mermaid
    const mermaidDivs = element.querySelectorAll('div.mermaid');
    console.log(`Encontrados ${mermaidDivs.length} divs com classe mermaid`);
    
    mermaidDivs.forEach((div, index) => {
        console.log(`Processando div mermaid #${index}`);
        const content = div.textContent.trim();
        const id = 'mermaid-diagram-div-' + index;
        
        try {
            mermaid.render(id, content)
                .then(result => {
                    div.innerHTML = result.svg;
                })
                .catch(error => {
                    console.error('Erro ao renderizar Mermaid (div):', error);
                    div.innerHTML = '<p class="error">Erro ao renderizar diagrama</p><pre>' + content + '</pre>';
                });
        } catch (error) {
            console.error('Erro ao renderizar Mermaid (div):', error);
            div.innerHTML = '<p class="error">Erro ao renderizar diagrama</p><pre>' + content + '</pre>';
        }
    });
    
    // Verificar se há blocos de código Mermaid que não foram detectados
    // Isso é útil para o formato específico usado no JSON
    const htmlContent = element.innerHTML;
    if (htmlContent.includes('```mermaid') || htmlContent.includes('`mermaid')) {
        console.log("Detectado código Mermaid em formato de texto. Tentando processar...");
        
        // Criar um elemento temporário para manipular o HTML
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = htmlContent;
        
        // Substituir blocos de código Mermaid em formato de texto por divs mermaid
        const regex = /```mermaid\s*([\s\S]*?)```/g;
        let match;
        let count = 0;
        
        // Substituir no HTML original
        const newHtml = htmlContent.replace(regex, function(match, p1) {
            const id = 'mermaid-inline-' + count++;
            console.log(`Substituindo bloco de código Mermaid inline #${count-1}`);
            
            // Criar um div para o diagrama
            const diagramDiv = document.createElement('div');
            diagramDiv.className = 'mermaid-diagram';
            diagramDiv.id = id;
            
            // Renderizar o diagrama
            try {
                mermaid.render(id, p1.trim())
                    .then(result => {
                        // Encontrar o div criado e substituir pelo SVG
                        const targetDiv = document.getElementById(id);
                        if (targetDiv) {
                            targetDiv.innerHTML = result.svg;
                        }
                    })
                    .catch(error => {
                        console.error('Erro ao renderizar Mermaid inline:', error);
                        const targetDiv = document.getElementById(id);
                        if (targetDiv) {
                            targetDiv.innerHTML = '<p class="error">Erro ao renderizar diagrama</p><pre>' + p1.trim() + '</pre>';
                        }
                    });
            } catch (error) {
                console.error('Erro ao renderizar Mermaid inline:', error);
                return '<div id="' + id + '" class="mermaid-diagram"><p class="error">Erro ao renderizar diagrama</p><pre>' + p1.trim() + '</pre></div>';
            }
            
            return '<div id="' + id + '" class="mermaid-diagram">Carregando diagrama...</div>';
        });
        
        if (count > 0) {
            console.log(`Substituídos ${count} blocos de código Mermaid inline`);
            element.innerHTML = newHtml;
        }
    }
}

/**
 * Processa o Markdown e renderiza LaTeX e Mermaid
 * @param {string} markdown - Texto em Markdown para processar
 * @returns {string} - HTML processado
 */
function processMarkdown(markdown) {
    console.log("Processando Markdown com blocos Mermaid");
    
    // Corrigir caracteres de escape duplicados no JSON
    // Isso é necessário porque o JSON requer que as barras invertidas sejam escapadas
    let fixedMarkdown = markdown;
    
    // Corrigir caracteres de escape comuns
    fixedMarkdown = fixedMarkdown.replace(/\\\\n/g, '\\n'); // Quebras de linha
    fixedMarkdown = fixedMarkdown.replace(/\\\\t/g, '\\t'); // Tabulações
    fixedMarkdown = fixedMarkdown.replace(/\\\\r/g, '\\r'); // Retornos de carro
    
    // Corrigir comandos LaTeX comuns
    fixedMarkdown = fixedMarkdown.replace(/\\\\cdot/g, '\\cdot');
    fixedMarkdown = fixedMarkdown.replace(/\\\\log/g, '\\log');
    fixedMarkdown = fixedMarkdown.replace(/\\\\pmod/g, '\\pmod');
    fixedMarkdown = fixedMarkdown.replace(/\\\\lceil/g, '\\lceil');
    fixedMarkdown = fixedMarkdown.replace(/\\\\rceil/g, '\\rceil');
    
    // Extrair blocos de código Mermaid antes do processamento Markdown
    const mermaidBlocks = [];
    const placeholders = [];
    
    // Substituir blocos de código Mermaid por placeholders únicos
    let processedMarkdown = fixedMarkdown.replace(/```mermaid\s*([\s\S]*?)```/g, function(match, code) {
        const placeholder = `MERMAID_PLACEHOLDER_${mermaidBlocks.length}`;
        mermaidBlocks.push(code.trim());
        placeholders.push(placeholder);
        return placeholder;
    });
    
    // Renderizar o Markdown
    let html = marked.parse(processedMarkdown);
    
    // Substituir os placeholders por divs Mermaid
    mermaidBlocks.forEach((code, index) => {
        const placeholder = placeholders[index];
        const mermaidDiv = `<div class="mermaid">${code}</div>`;
        html = html.replace(placeholder, mermaidDiv);
    });
    
    console.log(`Processados ${mermaidBlocks.length} blocos Mermaid`);
    
    return html;
}