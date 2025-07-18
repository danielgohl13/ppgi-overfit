# PPGI Overfit

Aplicação web para estudo e prática de questões do Programa de Pós-Graduação em Informática (PPGI).

## Características

- Banco de questões de provas anteriores do PPGI
- Filtros por ano, área e subárea
- Estatísticas de desempenho
- Modo claro/escuro
- Suporte a LaTeX para fórmulas matemáticas
- Responsivo para dispositivos móveis

## Tecnologias

- HTML5, CSS3, JavaScript
- Markdown para formatação de texto
- KaTeX para renderização de fórmulas matemáticas
- LocalStorage para armazenamento de estatísticas

## Estrutura do Projeto

```
ppgi-overfit/
├── public/               # Arquivos estáticos
│   ├── index.html        # Página principal
│   ├── css/              # Estilos CSS
│   ├── js/               # Scripts JavaScript
│   └── data/             # Dados das questões
├── server.js             # Servidor local para desenvolvimento
├── convert-questions.js  # Script para converter questões
└── vercel.json           # Configuração para deploy no Vercel
```

## Como Usar

### Online

Acesse a aplicação online em: [https://ppgi-overfit.vercel.app](https://ppgi-overfit.vercel.app)

### Localmente

1. Clone o repositório:
   ```bash
   git clone https://github.com/danielgohl13/ppgi-overfit.git
   cd ppgi-overfit
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm start
   ```

4. Acesse no navegador:
   ```
   http://localhost:3001
   ```

## Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

## Licença

Este projeto está licenciado sob a licença ISC.