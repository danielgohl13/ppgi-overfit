/**
 * Interface Redesign - Modal and Swipe Management
 */

// Modal management
class ModalManager {
    constructor() {
        this.initializeModals();
    }

    initializeModals() {
        // Filters Modal
        const filtersBtn = document.getElementById('filtersBtn');
        const filtersModal = document.getElementById('filtersModal');
        const filtersModalClose = document.getElementById('filtersModalClose');
        const applyFiltersBtn = document.getElementById('applyFiltersBtn');
        const clearFiltersBtn = document.getElementById('clearFiltersBtn');

        // Stats Modal
        const statsBtn = document.getElementById('statsBtn');
        const statsModal = document.getElementById('statsModal');
        const statsModalClose = document.getElementById('statsModalClose');

        // Event listeners for filters modal
        if (filtersBtn) {
            filtersBtn.addEventListener('click', () => this.openModal(filtersModal));
        }
        if (filtersModalClose) {
            filtersModalClose.addEventListener('click', () => this.closeModal(filtersModal));
        }
        if (applyFiltersBtn) {
            applyFiltersBtn.addEventListener('click', () => {
                this.applyFilters();
                this.closeModal(filtersModal);
            });
        }
        if (clearFiltersBtn) {
            clearFiltersBtn.addEventListener('click', () => this.clearFilters());
        }

        // Event listeners for stats modal
        if (statsBtn) {
            statsBtn.addEventListener('click', () => this.openModal(statsModal));
        }
        if (statsModalClose) {
            statsModalClose.addEventListener('click', () => this.closeModal(statsModal));
        }

        // Event listeners for progress management
        const exportProgressBtn = document.getElementById('exportProgressBtn');
        const importProgressBtn = document.getElementById('importProgressBtn');
        const importProgressFile = document.getElementById('importProgressFile');

        if (exportProgressBtn) {
            exportProgressBtn.addEventListener('click', () => this.exportProgress());
        }
        if (importProgressBtn) {
            importProgressBtn.addEventListener('click', () => {
                importProgressFile.click();
            });
        }
        if (importProgressFile) {
            importProgressFile.addEventListener('change', (e) => this.importProgress(e));
        }

        // Close modal when clicking outside
        window.addEventListener('click', (event) => {
            if (event.target.classList.contains('modal')) {
                this.closeModal(event.target);
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                const openModal = document.querySelector('.modal[style*="block"]');
                if (openModal) {
                    this.closeModal(openModal);
                }
            }
        });
    }

    openModal(modal) {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        }
    }

    closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    applyFilters() {
        // Trigger filter application
        if (typeof applyFilters === 'function') {
            filteredQuestions = applyFilters(questions);
            document.getElementById('totalQuestionsDisplay').textContent = filteredQuestions.length;
            
            // Esconder indicador de shuffle quando filtros são aplicados
            const shuffleIndicator = document.getElementById('shuffleIndicator');
            if (shuffleIndicator) {
                shuffleIndicator.style.display = 'none';
            }
            
            if (filteredQuestions.length > 0) {
                showQuestion(0);
            } else {
                document.getElementById('questionText').innerHTML = 'Nenhuma questão encontrada com os filtros selecionados.';
                document.getElementById('optionsContainer').innerHTML = '';
                document.getElementById('explanation').style.display = 'none';
                document.getElementById('currentQuestion').textContent = '0';
                updateProgressBar();
            }
        }
    }

    clearFilters() {
        document.getElementById('yearFilter').value = '';
        document.getElementById('areaFilter').value = '';
        document.getElementById('subareaFilter').value = '';
        this.applyFilters();
    }

    exportProgress() {
        if (window.progressManager) {
            const progressData = window.progressManager.exportProgress();
            const blob = new Blob([progressData], { type: 'application/json' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `ppgi-overfit-progress-${new Date().toISOString().split('T')[0]}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
            
            // Show success message
            this.showMessage('Progresso exportado com sucesso!', 'success');
        }
    }

    importProgress(event) {
        const file = event.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const jsonData = e.target.result;
                if (window.progressManager && window.progressManager.importProgress(jsonData)) {
                    // Reload stats and current question
                    if (typeof loadStats === 'function') {
                        loadStats();
                    }
                    if (typeof showQuestion === 'function' && typeof currentQuestionIndex !== 'undefined') {
                        showQuestion(currentQuestionIndex);
                    }
                    
                    this.showMessage('Progresso importado com sucesso!', 'success');
                } else {
                    this.showMessage('Erro ao importar progresso. Verifique o arquivo.', 'error');
                }
            } catch (error) {
                console.error('Erro ao importar progresso:', error);
                this.showMessage('Erro ao importar progresso. Arquivo inválido.', 'error');
            }
        };
        reader.readAsText(file);
        
        // Clear the input
        event.target.value = '';
    }

    showMessage(message, type = 'info') {
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `message message-${type}`;
        messageEl.textContent = message;
        messageEl.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 12px 20px;
            border-radius: 8px;
            color: white;
            font-weight: 500;
            z-index: 10000;
            animation: slideInRight 0.3s ease;
            max-width: 300px;
        `;
        
        // Set background color based on type
        switch (type) {
            case 'success':
                messageEl.style.backgroundColor = '#27ae60';
                break;
            case 'error':
                messageEl.style.backgroundColor = '#e74c3c';
                break;
            default:
                messageEl.style.backgroundColor = '#3498db';
        }
        
        // Add to page
        document.body.appendChild(messageEl);
        
        // Remove after 3 seconds
        setTimeout(() => {
            messageEl.style.animation = 'slideOutRight 0.3s ease';
            setTimeout(() => {
                if (messageEl.parentNode) {
                    messageEl.parentNode.removeChild(messageEl);
                }
            }, 300);
        }, 3000);
    }
}

// Swipe functionality
class SwipeManager {
    constructor() {
        this.startX = 0;
        this.startY = 0;
        this.endX = 0;
        this.endY = 0;
        this.minSwipeDistance = 50;
        this.maxVerticalDistance = 100;
        this.initializeSwipe();
    }

    initializeSwipe() {
        const questionCard = document.getElementById('questionCard');
        
        if (questionCard) {
            // Touch events for mobile
            questionCard.addEventListener('touchstart', (e) => this.handleTouchStart(e), { passive: true });
            questionCard.addEventListener('touchend', (e) => this.handleTouchEnd(e), { passive: true });
            
            // Mouse events for desktop (optional)
            questionCard.addEventListener('mousedown', (e) => this.handleMouseDown(e));
            questionCard.addEventListener('mouseup', (e) => this.handleMouseUp(e));
        }
    }

    handleTouchStart(e) {
        this.startX = e.touches[0].clientX;
        this.startY = e.touches[0].clientY;
    }

    handleTouchEnd(e) {
        this.endX = e.changedTouches[0].clientX;
        this.endY = e.changedTouches[0].clientY;
        this.handleSwipe();
    }

    handleMouseDown(e) {
        this.startX = e.clientX;
        this.startY = e.clientY;
    }

    handleMouseUp(e) {
        this.endX = e.clientX;
        this.endY = e.clientY;
        this.handleSwipe();
    }

    handleSwipe() {
        const deltaX = this.endX - this.startX;
        const deltaY = Math.abs(this.endY - this.startY);
        
        // Check if it's a horizontal swipe (not vertical scroll)
        if (deltaY > this.maxVerticalDistance) {
            return;
        }

        // Right swipe (previous question)
        if (deltaX > this.minSwipeDistance) {
            this.swipeRight();
        }
        // Left swipe (next question)
        else if (deltaX < -this.minSwipeDistance) {
            this.swipeLeft();
        }
    }

    swipeLeft() {
        if (currentQuestionIndex < filteredQuestions.length - 1) {
            this.animateSwipe('left', () => {
                showQuestion(currentQuestionIndex + 1);
            });
        }
    }

    swipeRight() {
        if (currentQuestionIndex > 0) {
            this.animateSwipe('right', () => {
                showQuestion(currentQuestionIndex - 1);
            });
        }
    }

    animateSwipe(direction, callback) {
        const questionCard = document.getElementById('questionCard');
        
        if (questionCard) {
            // Add swipe animation class
            questionCard.classList.add(`swipe-${direction}`);
            
            // Wait for animation to complete
            setTimeout(() => {
                // Remove animation class
                questionCard.classList.remove(`swipe-${direction}`);
                
                // Execute callback (change question)
                callback();
                
                // Add slide-in animation
                const oppositeDirection = direction === 'left' ? 'right' : 'left';
                questionCard.classList.add(`slide-in-${oppositeDirection}`);
                
                // Remove slide-in animation after completion
                setTimeout(() => {
                    questionCard.classList.remove(`slide-in-${oppositeDirection}`);
                }, 300);
            }, 300);
        }
    }
}

// Keyboard navigation
class KeyboardManager {
    constructor() {
        this.initializeKeyboard();
    }

    initializeKeyboard() {
        document.addEventListener('keydown', (e) => {
            // Don't handle keyboard events when modal is open or input is focused
            if (document.querySelector('.modal[style*="block"]') || 
                document.activeElement.tagName === 'INPUT' || 
                document.activeElement.tagName === 'SELECT') {
                return;
            }

            switch(e.key) {
                case 'ArrowLeft':
                case 'a':
                case 'A':
                    e.preventDefault();
                    if (currentQuestionIndex > 0) {
                        showQuestion(currentQuestionIndex - 1);
                    }
                    break;
                case 'ArrowRight':
                case 'd':
                case 'D':
                    e.preventDefault();
                    if (currentQuestionIndex < filteredQuestions.length - 1) {
                        showQuestion(currentQuestionIndex + 1);
                    }
                    break;
                case ' ':
                case 'Enter':
                    e.preventDefault();
                    const showAnswerBtn = document.getElementById('showAnswerBtn');
                    if (showAnswerBtn) {
                        showAnswerBtn.click();
                    }
                    break;
                case 'r':
                case 'R':
                    e.preventDefault();
                    goToRandomQuestion();
                    break;
                case 's':
                case 'S':
                    e.preventDefault();
                    if (typeof shuffleQuestions === 'function') {
                        shuffleQuestions();
                    }
                    break;
            }
        });
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    window.modalManager = new ModalManager();
    new SwipeManager();
    new KeyboardManager();
});