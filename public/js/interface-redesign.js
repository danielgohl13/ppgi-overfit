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
            }
        });
    }
}

// Initialize all managers when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    new ModalManager();
    new SwipeManager();
    new KeyboardManager();
});