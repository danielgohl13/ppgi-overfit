/**               :=%==. -               
           -%@#@**=%@@@%*=            
         -% #  .#*+#+##+%%*+          
        ++    -:-@@=@@@@@@@@*         
       +=. :.%@@#@@@+=@@@@%#@@        
       :. @@@@@@@    ..  *@@@*        
       %%.**.=  *@:    =@@@#@*        
       @@*%@@@@@@@@@@@@@@@@=@#        
       +%%#+*#@@%@%@@@@@@%@@%+        
        *%@##@%@#@#%@@@@*#**:         
         *%@*%#@#@@**+-+*+:=          
          :=:+**%%##%#+:+-            
              :=-++-+Dannast.                
 * Arquivo principal da aplicação
 */

// Configurar o Marked para reconhecer corretamente os blocos de código Mermaid
if (window.marked) {
    marked.setOptions({
        highlight: function(code, lang) {
            if (lang === 'mermaid') {
                return code; // Não modificar o código Mermaid, será processado posteriormente
            }
            return code; // Retornar o código sem modificações para outras linguagens
        },
        langPrefix: 'language-' // Adicionar o prefixo 'language-' às classes de linguagem
    });
}

// Inicializar Mermaid
if (window.mermaid) {
    mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        securityLevel: 'loose' // Permite renderizar diagramas de qualquer fonte
    });
    console.log("Mermaid inicializado");
}

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    // Carregar preferência de tema
    loadThemePreference();
    
    // Carregar estatísticas
    loadStats();
    
    // Adicionar eventos aos botões
    document.getElementById('prevBtn').addEventListener('click', () => showQuestion(currentQuestionIndex - 1));
    document.getElementById('nextBtn').addEventListener('click', () => showQuestion(currentQuestionIndex + 1));
    document.getElementById('prevBtnMobile').addEventListener('click', () => showQuestion(currentQuestionIndex - 1));
    document.getElementById('nextBtnMobile').addEventListener('click', () => showQuestion(currentQuestionIndex + 1));
    document.getElementById('showAnswerBtn').addEventListener('click', showAnswer);
    document.getElementById('randomBtn').addEventListener('click', goToRandomQuestion);
    document.getElementById('themeToggle').addEventListener('click', toggleTheme);
    
    // Usar o objeto AudioManager para gerenciar o áudio
    if (window.AudioManager) {
        document.getElementById('audioToggle').addEventListener('click', function() {
            window.AudioManager.toggleAudio();
        });
        // Inicializar o botão de áudio
        window.AudioManager.updateAudioButton();
    }
    
    document.getElementById('statsToggle').addEventListener('click', toggleStatsPanel);
    document.getElementById('resetStatsBtn').addEventListener('click', resetStats);
    
    // Adicionar eventos aos filtros
    document.getElementById('yearFilter').addEventListener('change', () => {
        filteredQuestions = applyFilters(questions);
        document.getElementById('totalQuestionsDisplay').textContent = filteredQuestions.length;
        if (filteredQuestions.length > 0) {
            showQuestion(0);
        } else {
            document.getElementById('questionText').innerHTML = 'Nenhuma questão encontrada com os filtros selecionados.';
            document.getElementById('optionsContainer').innerHTML = '';
            document.getElementById('explanation').style.display = 'none';
            document.getElementById('currentQuestion').textContent = '0';
            updateProgressBar();
        }
    });
    document.getElementById('areaFilter').addEventListener('change', () => {
        filteredQuestions = applyFilters(questions);
        document.getElementById('totalQuestionsDisplay').textContent = filteredQuestions.length;
        if (filteredQuestions.length > 0) {
            showQuestion(0);
        } else {
            document.getElementById('questionText').innerHTML = 'Nenhuma questão encontrada com os filtros selecionados.';
            document.getElementById('optionsContainer').innerHTML = '';
            document.getElementById('explanation').style.display = 'none';
            document.getElementById('currentQuestion').textContent = '0';
            updateProgressBar();
        }
    });
    document.getElementById('subareaFilter').addEventListener('change', () => {
        filteredQuestions = applyFilters(questions);
        document.getElementById('totalQuestionsDisplay').textContent = filteredQuestions.length;
        if (filteredQuestions.length > 0) {
            showQuestion(0);
        } else {
            document.getElementById('questionText').innerHTML = 'Nenhuma questão encontrada com os filtros selecionados.';
            document.getElementById('optionsContainer').innerHTML = '';
            document.getElementById('explanation').style.display = 'none';
            document.getElementById('currentQuestion').textContent = '0';
            updateProgressBar();
        }
    });
    
    // Carregar as questões
    loadQuestions();
});