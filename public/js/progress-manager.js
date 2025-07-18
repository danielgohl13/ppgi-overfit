/**
 * Progress Manager - Gerencia o progresso das questões respondidas
 */

class ProgressManager {
    constructor() {
        this.storageKey = 'ppgi-overfit-progress';
        this.progress = this.loadProgress();
    }

    /**
     * Carrega o progresso do localStorage
     */
    loadProgress() {
        try {
            const saved = localStorage.getItem(this.storageKey);
            return saved ? JSON.parse(saved) : {};
        } catch (error) {
            console.error('Erro ao carregar progresso:', error);
            return {};
        }
    }

    /**
     * Salva o progresso no localStorage
     */
    saveProgress() {
        try {
            localStorage.setItem(this.storageKey, JSON.stringify(this.progress));
        } catch (error) {
            console.error('Erro ao salvar progresso:', error);
        }
    }

    /**
     * Registra uma resposta para uma questão
     * @param {string} questionId - ID da questão
     * @param {string} selectedOption - Opção selecionada (a, b, c, d, e)
     * @param {boolean} isCorrect - Se a resposta estava correta
     * @param {Array} areas - Áreas da questão
     */
    recordAnswer(questionId, selectedOption, isCorrect, areas = []) {
        this.progress[questionId] = {
            selectedOption: selectedOption,
            isCorrect: isCorrect,
            timestamp: Date.now(),
            areas: areas
        };
        this.saveProgress();
    }

    /**
     * Verifica se uma questão foi respondida
     * @param {string} questionId - ID da questão
     * @returns {Object|null} - Dados da resposta ou null se não foi respondida
     */
    getQuestionProgress(questionId) {
        return this.progress[questionId] || null;
    }

    /**
     * Verifica se uma questão foi respondida
     * @param {string} questionId - ID da questão
     * @returns {boolean}
     */
    isQuestionAnswered(questionId) {
        return !!this.progress[questionId];
    }

    /**
     * Remove o progresso de uma questão específica
     * @param {string} questionId - ID da questão
     */
    removeQuestionProgress(questionId) {
        delete this.progress[questionId];
        this.saveProgress();
    }

    /**
     * Limpa todo o progresso
     */
    clearAllProgress() {
        this.progress = {};
        this.saveProgress();
    }

    /**
     * Obtém estatísticas do progresso
     * @returns {Object} - Estatísticas do progresso
     */
    getProgressStats() {
        const answered = Object.keys(this.progress);
        const correct = answered.filter(id => this.progress[id].isCorrect);
        
        return {
            totalAnswered: answered.length,
            totalCorrect: correct.length,
            accuracy: answered.length > 0 ? (correct.length / answered.length) * 100 : 0,
            answeredQuestions: answered
        };
    }

    /**
     * Obtém estatísticas por área
     * @returns {Object} - Estatísticas agrupadas por área
     */
    getAreaStats() {
        const areaStats = {};
        
        Object.values(this.progress).forEach(answer => {
            if (answer.areas && Array.isArray(answer.areas)) {
                answer.areas.forEach(area => {
                    const areaName = area.nome || area;
                    if (!areaStats[areaName]) {
                        areaStats[areaName] = {
                            total: 0,
                            correct: 0,
                            accuracy: 0
                        };
                    }
                    
                    areaStats[areaName].total++;
                    if (answer.isCorrect) {
                        areaStats[areaName].correct++;
                    }
                    areaStats[areaName].accuracy = 
                        (areaStats[areaName].correct / areaStats[areaName].total) * 100;
                });
            }
        });
        
        return areaStats;
    }

    /**
     * Exporta o progresso para backup
     * @returns {string} - JSON string do progresso
     */
    exportProgress() {
        return JSON.stringify({
            progress: this.progress,
            exportDate: new Date().toISOString(),
            version: '1.0'
        }, null, 2);
    }

    /**
     * Importa progresso de backup
     * @param {string} jsonData - JSON string do progresso
     * @returns {boolean} - Sucesso da importação
     */
    importProgress(jsonData) {
        try {
            const data = JSON.parse(jsonData);
            if (data.progress && typeof data.progress === 'object') {
                this.progress = data.progress;
                this.saveProgress();
                return true;
            }
            return false;
        } catch (error) {
            console.error('Erro ao importar progresso:', error);
            return false;
        }
    }

    /**
     * Obtém a sequência atual de acertos
     * @returns {number} - Número de acertos consecutivos
     */
    getCurrentStreak() {
        const answered = Object.keys(this.progress)
            .map(id => ({
                id,
                ...this.progress[id]
            }))
            .sort((a, b) => b.timestamp - a.timestamp);

        let streak = 0;
        for (const answer of answered) {
            if (answer.isCorrect) {
                streak++;
            } else {
                break;
            }
        }
        
        return streak;
    }

    /**
     * Obtém questões respondidas incorretamente para revisão
     * @returns {Array} - Lista de IDs de questões incorretas
     */
    getIncorrectQuestions() {
        return Object.keys(this.progress)
            .filter(id => !this.progress[id].isCorrect);
    }

    /**
     * Obtém questões que precisam de revisão (respondidas há mais de X dias)
     * @param {number} days - Número de dias para considerar revisão
     * @returns {Array} - Lista de IDs de questões para revisão
     */
    getQuestionsForReview(days = 7) {
        const cutoffTime = Date.now() - (days * 24 * 60 * 60 * 1000);
        
        return Object.keys(this.progress)
            .filter(id => this.progress[id].timestamp < cutoffTime);
    }
}

// Criar instância global
window.progressManager = new ProgressManager();