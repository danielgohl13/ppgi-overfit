[
    {
      "id_questao": "2024_2_q1",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 1,
      "ano_prova": 2024,
      "area": [
        { "nome": "Algoritmos", "subarea": null }
      ],
      "enunciado": "Ao compilar e executar o programa a seguir escrito em linguagem de programação C, quantas vezes será impressa a string Teste?\n\n#include <stdio.h>\nint main(void) {\n  int i, j;\n  for (i=2; i<=4; i++) {\n    for(j=1; j<3; j++) {\n      printf(\"Teste\\n\");\n    }\n  }\n}",
      "opcoes": [
        { "letra": "a", "texto": "6", "correta": true },
        { "letra": "b", "texto": "3", "correta": false },
        { "letra": "c", "texto": "4", "correta": false },
        { "letra": "d", "texto": "5", "correta": false },
        { "letra": "e", "texto": "8", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** O código consiste em dois laços `for` aninhados. O número total de execuções do comando `printf` é o produto do número de iterações de cada laço.\n\n- **Laço Externo (i):** Itera para `i = 2`, `i = 3` e `i = 4`. Total de **3** iterações.\n- **Laço Interno (j):** Itera para `j = 1` e `j = 2`. Total de **2** iterações.\n\n**Cálculo:**\nTotal de impressões = (Iterações do laço externo) × (Iterações do laço interno) = 3 × 2 = **6**."
    },
    {
      "id_questao": "2024_2_q3",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 3,
      "ano_prova": 2024,
      "area": [
        { "nome": "Algoritmos", "subarea": null }
      ],
      "enunciado": "Ao compilar e executar o programa a seguir escrito em linguagem de programação C, o que será impresso?\n\n#include <stdio.h>\nint main(void) {\n  int x, i, cont = 0;\n  x=18;\n  for(i=1; i<=x; i++) {\n    if ((x % i) == 0) {\n      cont=cont+1;\n    }\n  }\n  printf(\"%d\", cont);\n}",
      "opcoes": [
        { "letra": "a", "texto": "6", "correta": true },
        { "letra": "b", "texto": "7", "correta": false },
        { "letra": "c", "texto": "5", "correta": false },
        { "letra": "d", "texto": "8", "correta": false },
        { "letra": "e", "texto": "4", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** O programa inicializa a variável `x` com 18 e, em seguida, usa um laço `for` para iterar de `i = 1` até 18. Dentro do laço, a condição `if ((x % i) == 0)` verifica se `i` é um divisor de `x`. Se for, o contador `cont` é incrementado.\n\n**Cálculo:**\nOs divisores de 18 são: **1, 2, 3, 6, 9, 18**.\n\nO contador `cont` será incrementado para cada um desses 6 números. Portanto, o valor final impresso será **6**."
    },
    {
      "id_questao": "2024_2_q4",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 4,
      "ano_prova": 2024,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Pilhas" }
      ],
      "enunciado": "Considere a seguinte sequência de operações em uma pilha inicialmente vazia, considerando que Push implementa a operação de empilhar um elemento e Pop a operação de desempilhar um elemento:\n\nPush(4); Pop(); Push(2); Push (3); Pop(); Push(1); Pop(); Pop() Push(6); Push(7).\n\nApós todas as operações serem realizadas, qual será o número de elementos na pilha?",
      "opcoes": [
        { "letra": "a", "texto": "3", "correta": false },
        { "letra": "b", "texto": "1", "correta": false },
        { "letra": "c", "texto": "4", "correta": false },
        { "letra": "d", "texto": "10", "correta": false },
        { "letra": "e", "texto": "2", "correta": true }
      ],
      "explicacao_geral": "**Raciocínio:** Vamos rastrear o número de elementos na pilha após cada operação.\n\n1.  `Push(4)`: Pilha tem 1 elemento.\n2.  `Pop()`: Pilha tem 0 elementos.\n3.  `Push(2)`: Pilha tem 1 elemento.\n4.  `Push(3)`: Pilha tem 2 elementos.\n5.  `Pop()`: Pilha tem 1 elemento.\n6.  `Push(1)`: Pilha tem 2 elementos.\n7.  `Pop()`: Pilha tem 1 elemento.\n8.  `Pop()`: Pilha tem 0 elementos.\n9.  `Push(6)`: Pilha tem 1 elemento.\n10. `Push(7)`: Pilha tem **2** elementos.\n\nO número final de elementos na pilha é 2."
    },
    {
      "id_questao": "2024_2_q7",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 7,
      "ano_prova": 2024,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores" }
      ],
      "enunciado": "Qual é a altura máxima de qualquer árvore AVL com 9 nós, considerando aqui que a altura de uma árvore com um único nó é zero e com dois nós é 1?",
      "opcoes": [
        { "letra": "a", "texto": "4", "correta": false },
        { "letra": "b", "texto": "5", "correta": false },
        { "letra": "c", "texto": "3", "correta": true },
        { "letra": "d", "texto": "6", "correta": false },
        { "letra": "e", "texto": "9", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A altura máxima de uma árvore AVL é encontrada analisando o número mínimo de nós, `N(h)`, necessários para construir uma árvore AVL de altura `h`.\nA fórmula de recorrência é `N(h) = 1 + N(h-1) + N(h-2)`.\n\n-   **h=0:** N(0) = 1 nó (uma única raiz).\n-   **h=1:** N(1) = 1 + N(0) + N(-1) = 1 + 1 + 0 = 2 nós.\n-   **h=2:** N(2) = 1 + N(1) + N(0) = 1 + 2 + 1 = 4 nós.\n-   **h=3:** N(3) = 1 + N(2) + N(1) = 1 + 4 + 2 = **7** nós.\n-   **h=4:** N(4) = 1 + N(3) + N(2) = 1 + 7 + 4 = **12** nós.\n\nUma árvore AVL com 9 nós pode ter uma altura máxima de 3, pois para ter altura 4, seriam necessários no mínimo 12 nós. Como 9 é maior que o mínimo para altura 3 (7 nós) e menor que o mínimo para altura 4 (12 nós), a altura máxima possível é **3**."
    },
    {
      "id_questao": "2024_2_q9",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 9,
      "ano_prova": 2024,
      "area": [
        { "nome": "Algoritmos de Ordenação", "subarea": "QuickSort" },
        { "nome": "Algoritmos de Ordenação", "subarea": "MergeSort" },
        { "nome": "Análise de Complexidade", "subarea": "Pior Caso" }
      ],
      "enunciado": "Considerando que você está ordenando um vetor com 1 bilhão de posições e considerando o pior dos cenários em termos de número de comparações envolvendo chaves para cada algoritmo, ao considerarmos apenas QuickSort, MergeSort, Ordenação por Inserção e Ordenação por Seleção",
      "opcoes": [
        { "letra": "a", "texto": "O quicksort faz menos comparações de valores envolvendo valores das chaves de ordenação dos elementos que os outros três citados nas opções", "correta": false },
        { "letra": "b", "texto": "O Mergesort faz menos comparações envolvendo valores das chaves de ordenação dos elementos que os outros três citados nas opções", "correta": true },
        { "letra": "c", "texto": "Ordenação por Inserção faz menos comparações envolvendo valores das chaves de ordenação dos elementos que os outros três citados nas opções", "correta": false },
        { "letra": "d", "texto": "Ordenação por seleção faz menos comparações envolvendo valores das chaves de ordenação dos elementos que os outros três citados nas opções", "correta": false },
        { "letra": "e", "texto": "Há um empate entre os algoritmos Quicksort e Mergesort no número de comparações envolvendo valores das chaves de ordenação dos elementos, sendo os dois melhores que Ordenação por Inserção e Ordenação por seleção", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A questão pede para comparar a complexidade de tempo no **pior caso** para um grande número de elementos (N = 1 bilhão).\n\n- **Insertion Sort (Pior Caso):** $O(N^2)$.\n- **Selection Sort (Pior Caso):** $O(N^2)$.\n- **QuickSort (Pior Caso):** $O(N^2)$. Ocorre, por exemplo, quando o vetor já está ordenado e o pivô é sempre escolhido como o primeiro ou último elemento.\n- **MergeSort (Pior Caso):** $O(N \\log N)$.\n\nPara um N muito grande, a complexidade $O(N \\log N)$ é assintoticamente muito melhor (mais rápida) do que $O(N^2)$. Portanto, o **MergeSort** é o algoritmo com o menor número de comparações no pior cenário entre os listados."
    },
    {
      "id_questao": "2024_2_q10",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 10,
      "ano_prova": 2024,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Listas Encadeadas" }
      ],
      "enunciado": "Considere o seguinte programa (pseudocódigo) e indique qual das alternativas é a verdadeira.\n\n#include <stdio.h>\n#include <stdlib.h>\ntypedef struct No { int dado; struct No* prox; } No;\n\nNo* criarNo (int valor) { ... }\n\nvoid inserirNo (No** cabeca, int valor) {\n  No* novo = criarNo (valor);\n  novo->prox = *cabeca;\n  *cabeca = novo;\n}\n\nint main() {\n  No* lista = NULL;\n  inserirNo (&lista, 10);\n  inserirNo (&lista, 20);\n  inserirNo(&lista, 30);\n  printf(\"Lista criada com os elementos!\\n\");\n  return 0;\n}",
      "opcoes": [
        { "letra": "a", "texto": "O programa não utiliza alocação dinâmica de memória para criar o nós da lista encadeada. Os elementos são inseridos no início da lista. A lista é representada por um ponteiro para o primeiro nó. Não há liberação explícita da memória alocada para os nós.", "correta": false },
        { "letra": "b", "texto": "O programa utiliza alocação dinâmica de memória para criar o nós da lista encadeada. Os elementos são inseridos no fim da lista. A lista é representada por um ponteiro para o primeiro nó. Não há liberação explícita da memória alocada para os nós.", "correta": false },
        { "letra": "c", "texto": "O programa utiliza alocação dinâmica de memória para criar o nós da lista encadeada. Os elementos são inseridos no início da lista. A lista é representada por um ponteiro para o primeiro nó. Há liberação explícita da memória alocada para os nós.", "correta": false },
        { "letra": "d", "texto": "O programa utiliza alocação dinâmica de memória para criar o nós da lista encadeada. Os elementos são inseridos no início da lista. A lista é representada por um ponteiro para o primeiro nó. Não há liberação explícita da memória alocada para os nós.", "correta": true },
        { "letra": "e", "texto": "Nenhuma das opções anteriores é verdadeira.", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio - Análise do código:**\n1.  **Alocação de Memória:** A função `criarNo` usa `malloc(sizeof(No))`, o que caracteriza **alocação dinâmica de memória**.\n2.  **Ponto de Inserção:** A função `inserirNo` executa `novo->prox = *cabeca;` e `*cabeca = novo;`. Isso faz com que o novo nó aponte para o antigo início da lista e, em seguida, atualiza o ponteiro de início (`cabeca`) para apontar para o novo nó. Esta é a lógica clássica de **inserção no início**.\n3.  **Representação da Lista:** A variável `lista` na função `main` é do tipo `No*`, um **ponteiro para o primeiro nó**.\n4.  **Liberação de Memória:** Não há chamadas para a função `free()` no código, portanto, **não há liberação explícita** da memória alocada.\n\nA alternativa **(d)** é a única que descreve corretamente todos esses quatro pontos."
    },
    {
      "id_questao": "2024_2_q11",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 11,
      "ano_prova": 2024,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Listas Encadeadas" },
        { "nome": "Análise de Complexidade", "subarea": null }
      ],
      "enunciado": "Considerando o seguinte programa (pseudocódigo) indique qual das afirmações é a verdadeira.\n\n...[código que insere no fim da lista]...\n\nint main() {\n  No* lista = NULL;\n  inserirNo (&lista, 10);\n  inserirNo(&lista, 20);\n  inserirNo (&lista, 30);\n  return 0;\n}",
      "opcoes": [
        { "letra": "a", "texto": "Ao inserir o elemento 30 na lista, na terceira chamada da função inserirNo feita na função main, a linha de comando destacada em negrito, com o comando while, é executada 3 vezes. De forma geral, a quantidade de vezes que esta linha é executada depende da quantidade de elementos na lista.", "correta": false },
        { "letra": "b", "texto": "Ao inserir o elemento 30 na lista, na terceira chamada da função inserirNo feita na função main, a linha de comando destacada em negrito, com o comando while, é executada 2 vezes. De forma geral, a quantidade de vezes que esta linha é executada depende da quantidade de elementos na lista.", "correta": true },
        { "letra": "c", "texto": "Ao inserir o elemento 30 na lista, na terceira chamada da função inserirNo feita na função main, a linha de comando destacada em negrito, com o comando while, é executada 3 vezes. Ao inserir o elemento 30 na lista o loop while executa 3 vezes. De forma geral, a quantidade de vezes que este loop executa não depende da quantidade de elementos já inseridos na lista.", "correta": false },
        { "letra": "d", "texto": "Ao inserir o elemento 30 na lista, na terceira chamada da função inserirNo feita na função main, a linha de comando destacada em negrito, com o comando while, é executada 0 vezes.", "correta": false },
        { "letra": "e", "texto": "Ao inserir o elemento 30 na lista, na terceira chamada da função inserirNo feita na função main, a linha de comando destacada em negrito, com o comando while, é executada 1 vez.", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A questão analisa o número de vezes que a condição do laço `while (atual->prox != NULL)` é avaliada durante a inserção do terceiro elemento (30) em uma lista que insere no final.\n\n1.  **`inserirNo(&lista, 10)`:** A lista está vazia. O laço `while` não é executado. Lista: `[10]`.\n2.  **`inserirNo(&lista, 20)`:** A lista é `[10]`. O ponteiro `atual` começa no nó 10. A condição `atual->prox != NULL` é avaliada **1 vez** (é falsa, pois `10->prox` é NULL). O laço não itera. Lista: `[10, 20]`.\n3.  **`inserirNo(&lista, 30)`:** A lista é `[10, 20]`. O ponteiro `atual` começa no nó 10.\n    -   **Avaliação 1:** `atual->prox != NULL` (o `prox` de 10) é verdadeiro. O laço itera, `atual` avança para o nó 20.\n    -   **Avaliação 2:** `atual->prox != NULL` (o `prox` de 20) é falso. O laço termina.\n\nPara a inserção do elemento 30, a condição do `while` é avaliada **2 vezes**. A afirmação também está correta ao dizer que o número de execuções depende da quantidade de elementos, pois para inserir no fim é preciso percorrer a lista, caracterizando uma operação $O(n)$."
    },
    {
      "id_questao": "2024_2_q12",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 12,
      "ano_prova": 2024,
      "area": [
        { "nome": "Algoritmos", "subarea": "Busca" }
      ],
      "enunciado": "Considerando o seguinte programa (pseudocódigo) indique qual das afirmações é a verdadeira.\n\n#include <stdio.h>\nint buscaBinaria (int vetor[], int tamanho, int valor) { ... }\nint main() {\n  int vetor[] = {1, 3, 5, 7, 9, 11, 13, 15, 17, 19};\n  int tamanho = sizeof(vetor) / sizeof(vetor[0]);\n  int valor = 15;\n  int resultado = buscaBinaria (vetor, tamanho, valor);\n  printf(\"%d\\n\", resultado);\n  return 0;\n}",
      "opcoes": [
        { "letra": "a", "texto": "A linha em negrito, loop while, será executada 2 vezes e o programa imprime 15.", "correta": false },
        { "letra": "b", "texto": "A linha em negrito, loop while, será executada 3 vezes e o programa imprime 7.", "correta": false },
        { "letra": "c", "texto": "A linha em negrito, loop while, será executada 2 vezes e o programa imprime 7.", "correta": true },
        { "letra": "d", "texto": "A linha em negrito, loop while, 3 vezes e o programa imprime -1.", "correta": false },
        { "letra": "e", "texto": "Nenhuma das afirmações anteriores é verdadeira", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Analisamos a execução da busca binária e a saída do programa. (Nota: O código original na prova tinha um bug, `int resultado;` em vez de `int resultado = buscaBinaria(...)`. A explicação assume o código corrigido para que a questão tenha sentido).\n\n- **Vetor:** `[1, 3, 5, 7, 9, 11, 13, 15, 17, 19]` (tamanho 10, índices 0-9)\n- **Valor a buscar:** 15\n\n**Execução da Busca:**\n1.  **Iteração 1:** `inicio=0, fim=9`. `meio=(0+9)/2=4`. `vetor[4]` é 9. Como `15 > 9`, `inicio` se torna `meio+1=5`.\n2.  **Iteração 2:** `inicio=5, fim=9`. `meio=(5+9)/2=7`. `vetor[7]` é 15. Como `15 == 15`, a função retorna `meio`, que é **7**.\n\n- O corpo do laço `while` foi executado **2 vezes**.\n- O valor retornado e atribuído a `resultado` é 7.\n- O programa imprime o valor de `resultado`, que é **7**."
    },
    {
      "id_questao": "2024_2_q13",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 13,
      "ano_prova": 2024,
      "area": [
        { "nome": "Recursão", "subarea": null }
      ],
      "enunciado": "Considere a função em Python a seguir.\n\ndef funcao(n):\n  if n == 0:\n    return 0\n  return n % 10 + funcao(n // 10)\n\nQual o valor retornado pela função quando chamada da seguinte forma: funcao(42)?",
      "opcoes": [
        { "letra": "a", "texto": "4", "correta": false },
        { "letra": "b", "texto": "6", "correta": true },
        { "letra": "c", "texto": "8", "correta": false },
        { "letra": "d", "texto": "24", "correta": false },
        { "letra": "e", "texto": "40", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A função é recursiva e soma os dígitos de um número inteiro.\n- `n % 10` obtém o último dígito.\n- `n // 10` remove o último dígito (divisão inteira).\n\n**Execução:**\n- `funcao(42)` -> retorna `42 % 10` + `funcao(42 // 10)`\n  - -> retorna `2` + `funcao(4)`\n- `funcao(4)` -> retorna `4 % 10` + `funcao(4 // 10)`\n  - -> retorna `4` + `funcao(0)`\n- `funcao(0)` -> retorna `0` (caso base).\n\n**Cálculo Final:** A expressão se desdobra para `2 + 4 + 0 = 6`."
    },
    {
      "id_questao": "2024_2_q16",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 16,
      "ano_prova": 2024,
      "area": [
        { "nome": "Algoritmos", "subarea": null }
      ],
      "enunciado": "Assinale a opção que contém uma implementação correta, em C, de uma função que realiza a seguinte tarefa: \"escreva uma função que recebe como entrada o valor de uma compra, aplicando desconto de 15% ao total se o valor inicial da compra for superior a 100 reais\".",
      "opcoes": [
        { "letra": "a", "texto": "float calcula_preco (float valor_compra) { ... }", "correta": false },
        { "letra": "b", "texto": "float calcula_preco (float valor_compra) { ... }", "correta": false },
        { "letra": "c", "texto": "float calcula_preco (float valor_compra) { ... }", "correta": false },
        { "letra": "d", "texto": "float calcula_preco (float valor_compra) { ... }", "correta": false },
        { "letra": "e", "texto": "float calcula_preco (float valor_compra) {\n  if (valor_compra > 100) {\n    valor_compra = valor_compra * 0.85;\n  }\n  return valor_compra;\n}", "correta": true }
      ],
      "explicacao_geral": "**Raciocínio:** Aplicar um desconto de 15% é o mesmo que calcular 85% do valor original. A fórmula é `novo_valor = valor_original * 0.85`. Esta operação deve ocorrer somente se `valor_original > 100`.\n\n- **(a, b, c, d) Incorreto:** Essas opções contêm erros lógicos ou de sintaxe. Por exemplo, a opção 'b' calcula o valor do desconto em vez do preço final (`valor - valor * 0.85 = valor * 0.15`), e a opção 'c' adiciona 15% em vez de subtrair.\n- **(e) Correto:** O código verifica corretamente se `valor_compra > 100`. Se verdadeiro, ele atualiza o valor multiplicando-o por 0.85, aplicando assim o desconto de 15%. Em seguida, retorna o valor (modificado ou não). Esta implementação está perfeitamente correta."
    },
    {
      "id_questao": "2024_2_q17",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 17,
      "ano_prova": 2024,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Hash Tables" }
      ],
      "enunciado": "Analise as afirmações a seguir sobre tabelas de espalhamento (hash).\nI. A sondagem linear (linear probing) pode causar aglomeração de chaves devido ao excesso de colisões em regiões muito próximas da posição de inserção original de uma chave qualquer.\nII. Uma estratégia importante para evitar que o algoritmo entre em loop infinito é sempre manter ao menos uma posição vazia na tabela. Assim, sempre será possível inserir uma chave na sua posição correta, independentemente da estratégia de resolução de colisão adotada.\nIII. Na sondagem quadrática (quadratic probing), é possível que a sondagem entre em loop infinito mesmo que a tabela ainda tenha várias posições vazias.",
      "opcoes": [
        { "letra": "a", "texto": "Apenas as afirmações I e II são verdadeiras.", "correta": false },
        { "letra": "b", "texto": "Apenas as afirmações II e III são verdadeiras.", "correta": false },
        { "letra": "c", "texto": "Apenas as afirmações I e III são verdadeiras.", "correta": true },
        { "letra": "d", "texto": "Todas as afirmações são verdadeiras.", "correta": false },
        { "letra": "e", "texto": "Nenhuma das afirmações é verdadeira.", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:**\n- **I (Verdadeira):** Esta é a definição do problema conhecido como **aglomeração primária (primary clustering)**, uma desvantagem característica da sondagem linear. Blocos de células ocupadas tendem a crescer, aumentando o tempo de busca e inserção.\n- **II (Falsa):** A afirmação é muito forte e incorreta. Manter o fator de carga $\\alpha < 1$ (pelo menos uma posição vazia) garante a finalização para a sondagem linear, mas não para todas as estratégias. A sondagem quadrática, por exemplo, pode falhar em encontrar um slot vazio mesmo que a tabela não esteja cheia, dependendo da função de sondagem e do tamanho da tabela.\n- **III (Verdadeira):** Este é um problema conhecido da sondagem quadrática. Se a função de sondagem e o tamanho da tabela não forem escolhidos cuidadosamente (ex: tamanho da tabela não sendo um número primo), a sequência de sondagem pode visitar apenas um subconjunto das posições da tabela, entrando em um ciclo sem encontrar posições vazias disponíveis.\n\nConclusão: As afirmativas I e III estão corretas."
    },
    {
      "id_questao": "2024_2_q18",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 18,
      "ano_prova": 2024,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Listas Encadeadas" }
      ],
      "enunciado": "O código abaixo imprime como resultado:\n\n#include <stdio.h>\n#include <stdlib.h>\ntypedef struct tipoNo { ... } tipoNo;\ntypedef struct tipoLista { tipoNo * ea; tipoNo * eb; } tipoLista;\n\nvoid funcao(tipoLista *p, int num) {\n  tipoNo *aux;\n  aux = (tipoNo *) malloc(sizeof(tipoNo));\n  aux -> d = num;\n  aux -> prox = p->ea;\n  p->ea = aux;\n  p->eb = p->ea->prox;\n}\n\nvoid mostra(tipoLista *p) { ... }\n\nint main() {\n  tipoLista l;\n  l.ea = NULL; l.eb = NULL;\n  funcao(&l,2);\n  funcao(&l,4);\n  funcao(&l,6);\n  funcao(&l,8);\n  mostra(&l);\n}",
      "opcoes": [
        { "letra": "a", "texto": "2 4 6 8", "correta": false },
        { "letra": "b", "texto": "8 6 4 2", "correta": false },
        { "letra": "c", "texto": "6 4 2", "correta": true },
        { "letra": "d", "texto": "2 4 6", "correta": false },
        { "letra": "e", "texto": "Nenhuma das alternativas anteriores", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:**\n- A estrutura `tipoLista` tem dois ponteiros, `ea` (início da lista principal) e `eb` (um ponteiro auxiliar).\n- A função `funcao` insere um novo número no **início** da lista `ea`. Após a inserção, ela atualiza `eb` para apontar para o **segundo** elemento da lista (`p->eb = p->ea->prox`).\n- A função `mostra` imprime a lista começando a partir do nó apontado por `eb`.\n\n**Execução:**\n1.  `funcao(&l, 2)`: `ea`=[2], `eb`=NULL\n2.  `funcao(&l, 4)`: `ea`=[4, 2], `eb`=[2]\n3.  `funcao(&l, 6)`: `ea`=[6, 4, 2], `eb`=[4, 2]\n4.  `funcao(&l, 8)`: `ea`=[8, 6, 4, 2], `eb`=[6, 4, 2]\n\nQuando `mostra(&l)` é chamada, ela começa a imprimir a partir de `l.eb`, que aponta para o nó com o valor 6. A impressão seguirá a lista a partir desse ponto. Portanto, o resultado impresso é **6 4 2**."
    },
    {
      "id_questao": "2024_2_q19",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 19,
      "ano_prova": 2024,
      "area": [
        { "nome": "Recursão", "subarea": null }
      ],
      "enunciado": "Para gerar a sequência de Fibonacci usamos a relação de recorrência abaixo (I). Complete o pseudo-código (II) para que o cálculo da sequência de Fibonacci esteja correto utilizando uma das opções abaixo:\n\n(I) f(0)=0; f(1)=1; f(n)=f(n-1)+f(n-2)\n\n(II)\nf(n)\n  if( ??? )\n    return n\n  return f(n-1)+f(n-2)",
      "opcoes": [
        { "letra": "a", "texto": "n == 0", "correta": false },
        { "letra": "b", "texto": "n <= 0", "correta": false },
        { "letra": "c", "texto": "n == 1", "correta": false },
        { "letra": "d", "texto": "n <= 2", "correta": false },
        { "letra": "e", "texto": "n <= 1", "correta": true }
      ],
      "explicacao_geral": "**Raciocínio:** Uma função recursiva precisa de um ou mais **casos base** para terminar a recursão. Para a sequência de Fibonacci, os casos base são f(0) e f(1).\n\nO corpo do `if` é `return n`. Vamos testar qual condição funciona:\n- Se `n=0`, `return n` retorna 0 (correto).\n- Se `n=1`, `return n` retorna 1 (correto).\n\nA condição `if(n <= 1)` trata ambos os casos base (`n=0` e `n=1`) corretamente com uma única linha de código, retornando o próprio `n`. Para qualquer `n > 1`, a função prosseguirá para a chamada recursiva."
    },
    {
      "id_questao": "2024_2_q20",
      "prova_referencia": "2024-2.pdf",
      "numero_questao": 20,
      "ano_prova": 2024,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores" },
        { "nome": "Análise de Complexidade", "subarea": "Busca" }
      ],
      "enunciado": "Considere as afirmações abaixo sobre diferentes tipos de árvores binárias de pesquisa e marque uma das alternativas\nI) Os algoritmos de busca tanto em árvores sem balanceamento, quanto em árvores com balanceamento, têm o número máximo de comparações da chave de busca com valores na árvore, na pior das hipóteses, proporcional a altura da árvore, não importando se a árvore é sem balanceamento ou com balanceamento.\nII) Dependendo da ordem de inserção dos elementos, é possível que a altura de uma árvore sem balanceamento seja menor ou igual que a de uma árvore com balanceamento, mesmo que as duas contenham os mesmos elementos, todos inseridos na mesma ordem\nIII) O mesmo algoritmo de busca pode ser usado tanto para árvores com balanceamento quanto para árvores sem balanceamento",
      "opcoes": [
        { "letra": "a", "texto": "Apenas as afirmações I e II estão corretas", "correta": false },
        { "letra": "b", "texto": "Apenas as afirmações II e III estão corretas", "correta": false },
        { "letra": "c", "texto": "Apenas as afirmações I e III estão corretas", "correta": false },
        { "letra": "d", "texto": "Todas as afirmações estão corretas", "correta": true },
        { "letra": "e", "texto": "Nenhuma das alternativas anteriores (a,b,c ou d) está certa.", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:**\n- **I (Verdadeira):** A operação de busca em qualquer árvore binária de pesquisa (seja balanceada ou não) consiste em percorrer um caminho da raiz até uma folha. O comprimento do caminho mais longo é a altura da árvore. Portanto, a complexidade no pior caso é sempre proporcional à altura, $O(h)$.\n- **II (Verdadeira):** O 'ou igual' torna a afirmação verdadeira. Se os elementos forem inseridos em uma ordem que naturalmente cria uma árvore balanceada (ex: `[10, 5, 15]`), a árvore 'sem balanceamento' resultante terá a mesma altura (e estrutura) que uma árvore AVL ou Rubro-Negra, pois nenhuma rotação seria necessária. A altura de uma árvore não balanceada nunca pode ser menor, mas pode ser igual.\n- **III (Verdadeira):** O algoritmo de busca (`se chave < no, vá para a esquerda; se chave > no, vá para a direita`) depende apenas da propriedade fundamental da árvore binária de pesquisa, que é mantida tanto em árvores balanceadas quanto nas não balanceadas. As operações de balanceamento (rotações) ocorrem durante a inserção e remoção, não durante a busca.\n\nComo todas as três afirmações são verdadeiras, a alternativa correta é a (d)."
    }
  ]