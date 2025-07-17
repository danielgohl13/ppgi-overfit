/**
 * Sistema de estatísticas para o aplicativo de banco de questões
 */

// Variáveis para estatísticas
let userStats = {
    totalAnswered: 0,
    correctAnswers: 0,
    currentStreak: 0,
    bestStreak: 0,
    areaStats: {},
    sessionStats: {
        answered: 0,
        correct: 0
    }
};

/**
 * Carrega as estatísticas do localStorage
 */
function loadStats() {
    const savedStats = localStorage.getItem('ppgi-stats');
    if (savedStats) {
        userStats = { ...userStats, ...JSON.parse(savedStats) };
    }
    updateStatsDisplay();
}

/**
 * Salva as estatísticas no localStorage
 */
function saveStats() {
    localStorage.setItem('ppgi-stats', JSON.stringify(userStats));
}

/**
 * Registra uma resposta nas estatísticas
 * @param {boolean} isCorrect - Se a resposta está correta
 * @param {Array} questionAreas - Áreas da questão
 */
function recordAnswer(isCorrect, questionAreas) {
    userStats.totalAnswered++;
    userStats.sessionStats.answered++;

    if (isCorrect) {
        userStats.correctAnswers++;
        userStats.currentStreak++;
        userStats.sessionStats.correct++;

        if (userStats.currentStreak > userStats.bestStreak) {
            userStats.bestStreak = userStats.currentStreak;
        }
    } else {
        userStats.currentStreak = 0;
    }

    // Atualizar estatísticas por área
    if (questionAreas && questionAreas.length > 0) {
        questionAreas.forEach(area => {
            const areaName = area.nome;
            if (!userStats.areaStats[areaName]) {
                userStats.areaStats[areaName] = { total: 0, correct: 0 };
            }
            userStats.areaStats[areaName].total++;
            if (isCorrect) {
                userStats.areaStats[areaName].correct++;
            }
        });
    }

    saveStats();
    updateStatsDisplay();
}

/**
 * Atualiza a exibição das estatísticas na interface
 */
function updateStatsDisplay() {
    document.getElementById('totalAnswered').textContent = userStats.totalAnswered;
    document.getElementById('correctAnswers').textContent = userStats.correctAnswers;

    const accuracy = userStats.totalAnswered > 0
        ? Math.round((userStats.correctAnswers / userStats.totalAnswered) * 100)
        : 0;
    document.getElementById('accuracyRate').textContent = `${accuracy}%`;
    document.getElementById('currentStreak').textContent = userStats.currentStreak;

    updateAreaPerformanceChart();
}

/**
 * Atualiza o gráfico de desempenho por área
 */
function updateAreaPerformanceChart() {
    const chartContainer = document.getElementById('areaPerformance');
    chartContainer.innerHTML = '';

    const areas = Object.keys(userStats.areaStats);
    if (areas.length === 0) {
        chartContainer.innerHTML = '<p style="color: var(--text-secondary); text-align: center; margin: 20px 0;">Nenhuma estatística por área ainda.</p>';
        return;
    }

    areas.forEach(areaName => {
        const stats = userStats.areaStats[areaName];
        const accuracy = stats.total > 0 ? (stats.correct / stats.total) * 100 : 0;

        const chartBar = document.createElement('div');
        chartBar.className = 'chart-bar';

        chartBar.innerHTML = `
        <div class="chart-label">${areaName}</div>
        <div class="chart-bar-bg">
            <div class="chart-bar-fill correct" style="width: ${accuracy}%"></div>
        </div>
        <div class="chart-percentage">${Math.round(accuracy)}%</div>
    `;

        chartContainer.appendChild(chartBar);
    });
}

/**
 * Reseta todas as estatísticas
 */
function resetStats() {
    if (confirm('Tem certeza que deseja limpar todas as estatísticas? Esta ação não pode ser desfeita.')) {
        userStats = {
            totalAnswered: 0,
            correctAnswers: 0,
            currentStreak: 0,
            bestStreak: 0,
            areaStats: {},
            sessionStats: {
                answered: 0,
                correct: 0
            }
        };
        saveStats();
        updateStatsDisplay();
    }
}

/**
 * Alterna a visibilidade do painel de estatísticas
 */
function toggleStatsPanel() {
    const content = document.getElementById('statsContent');
    const toggle = document.getElementById('statsToggle');

    if (content.classList.contains('show')) {
        content.classList.remove('show');
        toggle.textContent = '▼';
    } else {
        content.classList.add('show');
        toggle.textContent = '▲';
    }
}