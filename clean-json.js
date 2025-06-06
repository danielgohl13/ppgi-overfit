const fs = require('fs');
const path = require('path');

// Lista de arquivos para limpar
const filesToClean = [
    'questions/20171.js',
    'questions/20172.js',
    'questions/20181.js',
    'questions/20182.js'
];

function cleanJsonFile(filePath) {
    try {
        console.log(`Limpando arquivo: ${filePath}`);
        
        // Lê o conteúdo do arquivo
        let content = fs.readFileSync(filePath, 'utf8');
        
        // Remove BOM se existir
        if (content.charCodeAt(0) === 0xFEFF) {
            content = content.slice(1);
        }
        
        // Remove caracteres de controle exceto quebras de linha e tabs
        content = content.replace(/[\x00-\x09\x0B\x0C\x0E-\x1F\x7F-\x9F]/g, '');
        
        // Normaliza quebras de linha
        content = content
            .replace(/\r\n/g, '\n')  // Windows -> Unix
            .replace(/\r/g, '\n');     // Mac -> Unix
        
        // Remove linhas em branco no início e fim
        content = content.trim();
        
        // Se o arquivo começa com [ e termina com ], é um array JSON
        if (content.startsWith('[') && content.endsWith(']')) {
            // Tenta fazer o parse para validar o JSON
            try {
                JSON.parse(content);
                console.log(`  Arquivo ${path.basename(filePath)} já está em formato JSON válido.`);
                return true;
            } catch (e) {
                console.log(`  Arquivo ${path.basename(filePath)} precisa de ajustes...`);
            }
        }
        
        // Se chegou aqui, tenta extrair o JSON
        const jsonMatch = content.match(/\[\s*\{.*\}\s*\]/s);
        if (jsonMatch) {
            try {
                const jsonStr = jsonMatch[0];
                const jsonData = JSON.parse(jsonStr);
                
                // Reescreve o arquivo com o JSON formatado
                fs.writeFileSync(
                    filePath,
                    JSON.stringify(jsonData, null, 2),
                    'utf8'
                );
                
                console.log(`  Arquivo ${path.basename(filePath)} limpo e salvo com sucesso!`);
                return true;
            } catch (e) {
                console.error(`  Erro ao processar ${path.basename(filePath)}:`, e.message);
                return false;
            }
        } else {
            console.error(`  Não foi possível extrair JSON válido de ${path.basename(filePath)}`);
            return false;
        }
    } catch (error) {
        console.error(`Erro ao processar ${filePath}:`, error);
        return false;
    }
}

// Processa cada arquivo
console.log('Iniciando limpeza dos arquivos...\n');

let successCount = 0;
filesToClean.forEach(file => {
    if (cleanJsonFile(file)) {
        successCount++;
    }
    console.log(''); // Linha em branco entre arquivos
});

console.log(`\nProcesso concluído! ${successCount} de ${filesToClean.length} arquivos processados com sucesso.`);
