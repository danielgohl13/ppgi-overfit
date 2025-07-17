const fs = require('fs');
const path = require('path');

// Função para limpar e corrigir JSON
function cleanJsonContent(content) {
    // Remover comentários de linha única
    content = content.replace(/\/\/.*$/gm, '');
    
    // Remover comentários de bloco
    content = content.replace(/\/\*[\s\S]*?\*\//g, '');
    
    // Corrigir vírgulas extras antes de } ou ]
    content = content.replace(/,(\s*[}\]])/g, '$1');
    
    // Remover espaços em branco extras
    content = content.replace(/\s+/g, ' ').trim();
    
    return content;
}

function convertJsToJsonSafe(inputPath, outputPath) {
    try {
        console.log(`🔄 Processando: ${inputPath}`);
        
        // Ler o arquivo JavaScript
        let jsContent = fs.readFileSync(inputPath, 'utf8');
        
        // Extrair o array JSON do arquivo JavaScript
        let jsonContent;
        
        if (jsContent.trim().startsWith('[')) {
            // Se o arquivo começa com [, é um array direto
            jsonContent = jsContent.trim();
        } else if (jsContent.includes('=')) {
            // Se tem =, extrair a parte após o =
            const arrayPart = jsContent.split('=').slice(1).join('=').trim();
            // Remover ponto e vírgula final se existir
            jsonContent = arrayPart.replace(/;$/, '');
        } else {
            throw new Error('Formato não reconhecido');
        }
        
        // Limpar o conteúdo JSON
        jsonContent = cleanJsonContent(jsonContent);
        
        // Tentar fazer parse do JSON
        let parsed;
        try {
            parsed = JSON.parse(jsonContent);
        } catch (parseError) {
            console.log(`⚠️  Erro de parse inicial, tentando correções adicionais...`);
            
            // Tentar correções mais agressivas
            // Corrigir aspas não fechadas ou mal formatadas
            jsonContent = jsonContent.replace(/([{,]\s*)(\w+)(\s*:)/g, '$1"$2"$3');
            
            // Tentar novamente
            try {
                parsed = JSON.parse(jsonContent);
            } catch (secondError) {
                // Se ainda falhar, tentar usar eval (cuidado!)
                console.log(`⚠️  Tentando eval como último recurso...`);
                try {
                    parsed = eval(`(${jsonContent})`);
                } catch (evalError) {
                    throw new Error(`Não foi possível fazer parse: ${secondError.message}`);
                }
            }
        }
        
        // Escrever o arquivo JSON formatado
        fs.writeFileSync(outputPath, JSON.stringify(parsed, null, 2), 'utf8');
        
        console.log(`✅ Convertido: ${inputPath} -> ${outputPath}`);
        return true;
    } catch (error) {
        console.error(`❌ Erro ao converter ${inputPath}:`, error.message);
        return false;
    }
}

// Lista de arquivos problemáticos para reconverter
const problemFiles = ['20171.js', '20182.js'];

// Criar diretório de destino se não existir
const outputDir = 'public/data/questions';
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

// Converter arquivos problemáticos
let successCount = 0;
let totalCount = problemFiles.length;

problemFiles.forEach(filename => {
    const inputPath = path.join('questions', filename);
    const outputFilename = filename.replace('.js', '.json');
    const outputPath = path.join(outputDir, outputFilename);
    
    if (fs.existsSync(inputPath)) {
        if (convertJsToJsonSafe(inputPath, outputPath)) {
            successCount++;
        }
    } else {
        console.warn(`⚠️  Arquivo não encontrado: ${inputPath}`);
    }
});

console.log(`\n📊 Reconversão concluída: ${successCount}/${totalCount} arquivos convertidos com sucesso.`);