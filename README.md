# Banco de Questões - PPGI

Aplicação web para estudo e revisão de questões do Programa de Pós-Graduação em Informática (PPGI). Este projeto permite que estudantes acessem e estudem questões de provas anteriores de forma interativa.

## 🚀 Funcionalidades

- 📚 Carregamento de questões a partir de múltiplos arquivos JavaScript
- 🔍 Filtragem por ano, área e subárea
- 🔄 Navegação intuitiva entre questões
- ✅ Modo de estudo com respostas e explicações detalhadas
- 🎲 Questão aleatória para estudo diversificado
- 📱 Interface responsiva que funciona em dispositivos móveis e desktop

## 🛠️ Como executar

### Pré-requisitos

- Node.js (versão 14.x ou superior)
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

### Instalação

1. Clone o repositório:
   ```bash
   git clone https://github.com/danielgohl13/ppgi-overfit-ufam.git
   cd ppgi-questoes
   ```

2. Instale as dependências (se necessário):
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   node server.js
   ```

4. Acesse o aplicativo em: [http://localhost:3001](http://localhost:3001)

## 🏗️ Estrutura do Projeto

```
ppgi-questoes/
├── index.html          # Interface do usuário
├── app.js              # Lógica principal da aplicação
├── server.js           # Servidor web local
├── questions/          # Pasta contendo os arquivos de questões
│   ├── 20162.js       # Questões do 2º semestre de 2016
│   └── 20171.js       # Questões do 1º semestre de 2017
└── README.md           # Este arquivo
```

## 📝 Adicionando novas questões

1. Crie um novo arquivo `.js` na pasta `questions/` seguindo o padrão `ANO-SEMESTRE.js` (ex: `20232.js` para 2º semestre de 2023)

2. No arquivo, defina um array `bancoDeQuestoes_PPGI` contendo as questões no seguinte formato:

```javascript
const bancoDeQuestoes_PPGI = [
    {
        "id_questao": "2016_2_q1",
        "prova_referencia": "2016-2.pdf",
        "numero_questao": 1,
        "ano_prova": 2016,
        "area": [
            { "nome": "Análise de Complexidade", "subarea": "Notação Big O" },
            { "nome": "Operações Fundamentais", "subarea": "Busca" }
        ],
        "enunciado": "Seja um vetor de inteiros com 400 elementos distintos ordenados...",
        "opcoes": [
            { "letra": "a", "texto": "9", "correta": true },
            { "letra": "b", "texto": "8", "correta": false },
            { "letra": "c", "texto": "7", "correta": false },
            { "letra": "d", "texto": "200", "correta": false },
            { "letra": "e", "texto": "400", "correta": false }
        ],
        "explicacao_geral": "**Raciocínio:** A busca binária tem complexidade O(log n)..."
    },
    // Mais questões...
];
```

## 🧪 Testando

O aplicativo inclui um servidor de desenvolvimento integrado. Basta executar:

```bash
node server.js
```

E acessar [http://localhost:3001](http://localhost:3001) no seu navegador.

## 🤝 Contribuição

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues e enviar pull requests.

1. Faça um Fork do projeto
2. Crie uma Branch para sua Feature (`git checkout -b feature/AmazingFeature`)
3. Adicione suas mudanças (`git add .`)
4. Comite suas mudanças (`git commit -m 'Add some AmazingFeature'`)
5. Faça o Push da Branch (`git push origin feature/AmazingFeature`)
6. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- A todos os colaboradores que ajudaram a desenvolver e melhorar este projeto
- Ao PPGI por disponibilizar as questões de provas anteriores
