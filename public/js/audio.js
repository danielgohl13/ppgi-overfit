/**
 * Gerenciador de áudio para o aplicativo
 */

// Criar objeto global para as funções de áudio
window.AudioManager = {};

// Contexto de áudio para gerar sons programaticamente
let audioContext;

// Inicializar o contexto de áudio sob demanda
function getAudioContext() {
    if (!audioContext) {
        try {
            audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch (e) {
            console.error('Web Audio API não suportada neste navegador:', e);
        }
    }
    return audioContext;
}

// Função para gerar som de acerto (som agudo e alegre)
function generateCorrectSound() {
    const context = getAudioContext();
    if (!context) return;
    
    // Criar oscilador para o som principal
    const oscillator = context.createOscillator();
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(880, context.currentTime); // Nota A5
    oscillator.frequency.exponentialRampToValueAtTime(1760, context.currentTime + 0.1); // Subir para A6
    
    // Criar ganho para controlar o volume
    const gainNode = context.createGain();
    gainNode.gain.setValueAtTime(0.5, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.3);
    
    // Conectar os nós
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    // Iniciar e parar o som
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.3);
}

// Função para gerar som de erro (som grave e triste)
function generateIncorrectSound() {
    const context = getAudioContext();
    if (!context) return;
    
    // Criar oscilador para o som principal
    const oscillator = context.createOscillator();
    oscillator.type = 'triangle';
    oscillator.frequency.setValueAtTime(440, context.currentTime); // Nota A4
    oscillator.frequency.exponentialRampToValueAtTime(220, context.currentTime + 0.3); // Descer para A3
    
    // Criar ganho para controlar o volume
    const gainNode = context.createGain();
    gainNode.gain.setValueAtTime(0.5, context.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + 0.4);
    
    // Conectar os nós
    oscillator.connect(gainNode);
    gainNode.connect(context.destination);
    
    // Iniciar e parar o som
    oscillator.start(context.currentTime);
    oscillator.stop(context.currentTime + 0.4);
}

// Adicionar funções ao objeto global AudioManager
window.AudioManager = {
    // Funções para reproduzir sons
    playCorrectSound: function() {
        if (this.isAudioEnabled()) {
            // Gerar som de acerto
            generateCorrectSound();
            
            // Adicionar feedback visual
            const audioButton = document.getElementById('audioToggle');
            if (audioButton) {
                audioButton.classList.add('sound-feedback');
                setTimeout(() => {
                    audioButton.classList.remove('sound-feedback');
                }, 300);
            }
        }
    },

    playIncorrectSound: function() {
        if (this.isAudioEnabled()) {
            // Gerar som de erro
            generateIncorrectSound();
            
            // Adicionar feedback visual
            const audioButton = document.getElementById('audioToggle');
            if (audioButton) {
                audioButton.classList.add('sound-feedback');
                setTimeout(() => {
                    audioButton.classList.remove('sound-feedback');
                }, 300);
            }
        }
    },

    // Gerenciamento de estado do áudio
    isAudioEnabled: function() {
        return localStorage.getItem('audioEnabled') !== 'false';
    },

    toggleAudio: function() {
        const enabled = this.isAudioEnabled();
        localStorage.setItem('audioEnabled', !enabled);
        this.updateAudioButton();
    },

    updateAudioButton: function() {
        const audioButton = document.getElementById('audioToggle');
        if (audioButton) {
            audioButton.textContent = this.isAudioEnabled() ? '🔊' : '🔇';
            audioButton.setAttribute('aria-label', this.isAudioEnabled() ? 'Desativar sons' : 'Ativar sons');
        }
    }
};

// Funções de conveniência para uso interno
function playCorrectSound() {
    window.AudioManager.playCorrectSound();
}

function playIncorrectSound() {
    window.AudioManager.playIncorrectSound();
}