/**
 * Sistema de filtros para o aplicativo de banco de questões
 */

/**
 * Preenche os filtros com base nas questões disponíveis
 * @param {Array} questions - Array de questões
 */
function populateFilters(questions) {
    const years = new Set();
    const areas = new Set();
    const subareas = new Set();

    questions.forEach(question => {
        if (question.ano_prova) {
            years.add(question.ano_prova);
        }

        if (question.area && Array.isArray(question.area)) {
            question.area.forEach(area => {
                if (area.nome) {
                    areas.add(area.nome);
                }
                if (area.subarea) {
                    subareas.add(area.subarea);
                }
            });
        }
    });

    // Preencher o filtro de ano
    const yearFilter = document.getElementById('yearFilter');
    yearFilter.innerHTML = '<option value="">Todos os anos</option>';
    Array.from(years).sort((a, b) => b - a).forEach(year => {
        const option = document.createElement('option');
        option.value = year;
        option.textContent = year;
        yearFilter.appendChild(option);
    });

    // Preencher o filtro de área
    const areaFilter = document.getElementById('areaFilter');
    areaFilter.innerHTML = '<option value="">Todas as áreas</option>';
    Array.from(areas).sort().forEach(area => {
        const option = document.createElement('option');
        option.value = area;
        option.textContent = area;
        areaFilter.appendChild(option);
    });

    // Preencher o filtro de subárea
    const subareaFilter = document.getElementById('subareaFilter');
    subareaFilter.innerHTML = '<option value="">Todas as subáreas</option>';
    Array.from(subareas).sort().forEach(subarea => {
        if (subarea) { // Ignorar subáreas nulas
            const option = document.createElement('option');
            option.value = subarea;
            option.textContent = subarea;
            subareaFilter.appendChild(option);
        }
    });
}

/**
 * Aplica os filtros selecionados às questões
 * @param {Array} questions - Array de todas as questões
 * @returns {Array} - Array de questões filtradas
 */
function applyFilters(questions) {
    const yearValue = document.getElementById('yearFilter').value;
    const areaValue = document.getElementById('areaFilter').value;
    const subareaValue = document.getElementById('subareaFilter').value;

    return questions.filter(question => {
        // Filtrar por ano
        if (yearValue && question.ano_prova != yearValue) {
            return false;
        }

        // Filtrar por área e subárea
        if (areaValue || subareaValue) {
            if (!question.area || !Array.isArray(question.area)) {
                return false;
            }

            return question.area.some(area => {
                if (areaValue && area.nome !== areaValue) {
                    return false;
                }
                if (subareaValue && area.subarea !== subareaValue) {
                    return false;
                }
                return true;
            });
        }

        return true;
    });
}