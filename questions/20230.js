[
    {
      "id_questao": "2023_0_q1",
      "prova_referencia": "2023-0.pdf",
      "numero_questao": 1,
      "ano_prova": 2023,
      "area": [
        { "nome": "Operações Fundamentais", "subarea": "Busca" },
        { "nome": "Análise de Complexidade", "subarea": "Notação Big O" }
      ],
      "enunciado": "Dado o vetor abaixo, uma busca binária realizará a comparação de uma chave qualquer com elementos do vetor. Quantas comparações serão necessárias no pior caso (aquele que maximiza o número de comparações feitas pelo algoritmo)?\n\n| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |\n|---|---|---|---|---|---|---|---|---|---|\n| 10| 30| 50| 60| 70| 80| 90| 100| 120| 130|",
      "opcoes": [
        { "letra": "a", "texto": "6 comparações", "correta": false },
        { "letra": "b", "texto": "10 comparações", "correta": false },
        { "letra": "c", "texto": "4 comparações", "correta": true },
        { "letra": "d", "texto": "1 comparação", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A busca binária em um vetor ordenado tem uma complexidade de tempo no pior caso de $O(\\log_2 N)$, onde N é o número de elementos. O número máximo de comparações é a altura da árvore de decisão, que pode ser calculada como $\\lfloor \\log_2 N \\rfloor + 1$.\n\n**Cálculo:**\nPara um vetor com $N=10$ elementos, o número máximo de comparações é:\n$\\lfloor \\log_2 10 \\rfloor + 1 = \\lfloor 3.32 \\rfloor + 1 = 3 + 1 = 4$.\n\n**Exemplo de Pior Caso (buscando um elemento inexistente como 140):**\n1. `inicio=0`, `fim=9`, `meio=4`. Compara com `vetor[4]` (70).\n2. `inicio=5`, `fim=9`, `meio=7`. Compara com `vetor[7]` (100).\n3. `inicio=8`, `fim=9`, `meio=8`. Compara com `vetor[8]` (120).\n4. `inicio=9`, `fim=9`, `meio=9`. Compara com `vetor[9]` (130). O elemento não é encontrado e o laço termina. \nTotal de 4 comparações.\n\n- **(a, b, d) Incorreto:** Os valores não correspondem ao cálculo do pior caso para a busca binária em 10 elementos."
    },
    {
      "id_questao": "2023_0_q2",
      "prova_referencia": "2023-0.pdf",
      "numero_questao": 2,
      "ano_prova": 2023,
      "area": [
        { "nome": "Algoritmos de Ordenação", "subarea": "Insertion Sort" },
        { "nome": "Análise de Complexidade", "subarea": "Notação Big O" }
      ],
      "enunciado": "Sobre o algoritmo de ordenação por inserção (Insertion Sort), marque a alternativa correta.",
      "opcoes": [
        { "letra": "a", "texto": "Ele tende a ficar mais rápido para vetores que estão quase ordenados de acordo com o critério usado pelo algoritmo é mais lento quando o vetor está invertido", "correta": true },
        { "letra": "b", "texto": "O tempo de ordenação independe da ordem inicial dos elementos, sendo sempre quadrático", "correta": false },
        { "letra": "c", "texto": "O tempo de ordenação independe da ordem dos elementos, sendo sempre linear", "correta": false },
        { "letra": "d", "texto": "Ele não ordena chaves de valor negativo, dado que a inserção em posições negativas é inviável", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** O desempenho do Insertion Sort é sensível à ordem inicial dos dados.\n\n- **Melhor Caso:** Se o vetor já está ordenado, o laço interno nunca executa, resultando em uma complexidade de $O(N)$.\n- **Pior Caso:** Se o vetor está em ordem inversa, cada elemento precisa ser comparado e deslocado através de toda a porção já ordenada do vetor, resultando em uma complexidade de $O(N^2)$.\n- **Caso Médio:** Para um vetor com elementos em ordem aleatória, a complexidade é $O(N^2)$.\n\n- **(a) Correto:** A afirmativa descreve precisamente o comportamento do algoritmo: rápido ($O(N)$) para dados quase ordenados e lento ($O(N^2)$) para dados em ordem inversa.\n- **(b) Incorreto:** O tempo depende da ordem inicial; não é sempre quadrático.\n- **(c) Incorreto:** O tempo não é sempre linear.\n- **(d) Incorreto:** O algoritmo funciona perfeitamente com valores negativos; a lógica de comparação e inserção não é afetada pelo sinal dos números."
    },
    {
      "id_questao": "2023_0_q3",
      "prova_referencia": "2023-0.pdf",
      "numero_questao": 3,
      "ano_prova": 2023,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Pilhas" },
        { "nome": "Operações Fundamentais", "subarea": "Remoção" },
        { "nome": "Operações Fundamentais", "subarea": "Inserção" }
      ],
      "enunciado": "Dada a pilha de números inteiros [4, 16, 1, 7, 8, 13] onde o topo é o elemento mais à esquerda, após a realização de três (3) operações de desempilhar elementos, uma (1) operação de empilhar que insere o valor 5 e uma (1) operação de empilhar que insere o valor 2, a pilha ficará com qual configuração?",
      "opcoes": [
        { "letra": "a", "texto": "[7, 8, 13, 5, 2]", "correta": false },
        { "letra": "b", "texto": "[4, 16, 2, 5, 2]", "correta": false },
        { "letra": "c", "texto": "[5, 2, 7, 8, 13]", "correta": false },
        { "letra": "d", "texto": "[2, 5, 7, 8, 13]", "correta": true }
      ],
      "explicacao_geral": "**Raciocínio:** A questão descreve operações em uma pilha (LIFO - Last-In, First-Out), onde o topo está à esquerda. Vamos rastrear o estado da pilha passo a passo.\n\n**Passos:**\n1.  **Estado Inicial:** `[4, 16, 1, 7, 8, 13]` (Topo: 4)\n2.  **1º Desempilhar (Pop):** Remove o 4. Pilha: `[16, 1, 7, 8, 13]` (Topo: 16)\n3.  **2º Desempilhar (Pop):** Remove o 16. Pilha: `[1, 7, 8, 13]` (Topo: 1)\n4.  **3º Desempilhar (Pop):** Remove o 1. Pilha: `[7, 8, 13]` (Topo: 7)\n5.  **1º Empilhar (Push 5):** Insere o 5 no topo. Pilha: `[5, 7, 8, 13]` (Topo: 5)\n6.  **2º Empilhar (Push 2):** Insere o 2 no topo. Pilha: `[2, 5, 7, 8, 13]` (Topo: 2)\n\n**Estado Final:** `[2, 5, 7, 8, 13]`\n\n- **(d) Correto:** Corresponde ao estado final calculado.\n- **(a, b, c) Incorreto:** Resultam de erros na ordem das operações ou na compreensão do funcionamento de uma pilha."
    },
    {
      "id_questao": "2023_0_q4",
      "prova_referencia": "2023-0.pdf",
      "numero_questao": 4,
      "ano_prova": 2023,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Hash Tables" },
        { "nome": "Hashing", "subarea": "Resolução de colisões" }
      ],
      "enunciado": "Sobre um Hash por Encadeamento, pode-se afirmar que:\n\nI. Ele não gera colisões secundárias\nII. Ele tem custo temporal $O(n)$ no pior caso, sendo n o número de elementos na tabela\nIII. Ao contrário do endereçamento aberto, o encadeamento permite trabalhar com quantidade de chaves superior ao tamanho da tabela",
      "opcoes": [
        { "letra": "a", "texto": "Nenhuma alternativa é verdadeira", "correta": false },
        { "letra": "b", "texto": "Apenas II é verdadeira", "correta": false },
        { "letra": "c", "texto": "Apenas I e II são verdadeiras", "correta": false },
        { "letra": "d", "texto": "Todas são verdadeiras", "correta": true }
      ],
      "explicacao_geral": "**Raciocínio:** Analisando cada afirmativa sobre o hash por encadeamento (chaining).\n\n- **I. Ele não gera colisões secundárias:** **Verdadeiro.** A aglomeração secundária (secondary clustering) ocorre em técnicas de endereçamento aberto (como sondagem quadrática) quando chaves diferentes que colidem na mesma posição inicial seguem a mesma sequência de sondagem. No encadeamento, elementos que colidem na mesma posição são adicionados a uma lista ligada nesse mesmo índice, sem afetar outros índices. \n\n- **II. Ele tem custo temporal $O(n)$ no pior caso:** **Verdadeiro.** O pior caso ocorre quando todas as $n$ chaves são mapeadas para o mesmo índice da tabela. Isso resulta em uma única lista ligada contendo todos os $n$ elementos. Uma busca nessa lista terá que percorrê-la sequencialmente, levando tempo $O(n)$.\n\n- **III. Ao contrário do endereçamento aberto, o encadeamento permite trabalhar com quantidade de chaves superior ao tamanho da tabela:** **Verdadeiro.** No endereçamento aberto, o número de chaves não pode exceder o número de posições na tabela (fator de carga $\\alpha \\le 1$). No encadeamento, como cada posição é uma lista, podemos inserir um número arbitrário de chaves, permitindo um fator de carga $\\alpha > 1$.\n\nComo as três afirmativas são verdadeiras, a opção correta é a (d)."
    },
    {
      "id_questao": "2023_0_q5",
      "prova_referencia": "2023-0.pdf",
      "numero_questao": 5,
      "ano_prova": 2023,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Arrays" },
        { "nome": "Estruturas de Dados", "subarea": "Árvores" },
        { "nome": "Análise de Complexidade", "subarea": null }
      ],
      "enunciado": "Considerando-se as operações com um vetor, mantido ordenado a cada inserção de chave, e uma árvore binária de pesquisa balanceada, pode-se dizer que:\n\nI. O vetor ordenado apresenta custo de inserção e de remoção menores que o da árvore, pois não exigir alocação dinâmica de nós\nII. No pior caso, o custo da operação de busca por uma chave é assintoticamente igual tanto no vetor ordenado quanto na árvore",
      "opcoes": [
        { "letra": "a", "texto": "Apenas I é verdadeira", "correta": false },
        { "letra": "b", "texto": "Apenas II é verdadeira", "correta": true },
        { "letra": "c", "texto": "As duas são verdadeiras", "correta": false },
        { "letra": "d", "texto": "Nenhuma é verdadeira", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Comparação de complexidade entre vetor ordenado e árvore de busca binária (ABB) balanceada (como AVL ou Rubro-Negra).\n\n- **I. Custo de Inserção/Remoção:**\n  - **Vetor Ordenado:** Para inserir ou remover um elemento, é preciso primeiro encontrar a posição (o que pode ser feito em $O(\\log n)$ com busca binária), mas depois é necessário deslocar, em média, $n/2$ elementos para manter a ordem. O custo é dominado pelo deslocamento, sendo **$O(n)$**.\n  - **ABB Balanceada:** Inserção e remoção envolvem encontrar a posição e depois, potencialmente, realizar rotações para rebalancear a árvore. Ambas as operações têm custo **$O(\\log n)$**.\n  - **Conclusão:** A afirmativa I é **Falsa**. O custo em uma ABB balanceada é logarítmico, muito melhor que o custo linear do vetor ordenado.\n\n- **II. Custo de Busca:**\n  - **Vetor Ordenado:** A busca é feita com o algoritmo de busca binária, que tem custo de **$O(\\log n)$**.\n  - **ABB Balanceada:** A busca em uma árvore balanceada também tem custo proporcional à sua altura, que é **$O(\\log n)$**.\n  - **Conclusão:** A afirmativa II é **Verdadeira**. O custo assintótico da busca é o mesmo em ambas as estruturas.\n\n- **(b) Correto:** Apenas a afirmativa II é verdadeira."
    },
    {
      "id_questao": "2023_0_q6",
      "prova_referencia": "2023-0.pdf",
      "numero_questao": 6,
      "ano_prova": 2023,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores" },
        { "nome": "Estruturas de Dados", "subarea": "Heap" }
      ],
      "enunciado": "Considere a figura abaixo, que ilustra uma árvore com três nós contendo chaves inteiras, sendo que a raiz da árvore (marcada com \"x\") contém a chave 5, e marque a alternativa correta.\n\n(Imagem de uma árvore com raiz 5, filho esquerdo 7 e filho direito 6)",
      "opcoes": [
        { "letra": "a", "texto": "A árvore pode ser uma árvore vermelho e preto (RB-tree), visto que está balanceada (lembrando que não é necessário representar os nós com as cores vermelho e preto no desenho)", "correta": false },
        { "letra": "b", "texto": "A árvore pode representar uma árvore binária de pesquisa, a qual pode estar com ou sem balanceamento", "correta": false },
        { "letra": "c", "texto": "A árvore pode representar uma heap mínima", "correta": true },
        { "letra": "d", "texto": "A árvore é do tipo AVL, pois está balanceada", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Vamos analisar a árvore (Raiz: 5, Filho Esquerdo: 7, Filho Direito: 6) em relação às propriedades de cada estrutura de dados mencionada.\n\n- **Árvore Binária de Pesquisa (BST):** A propriedade fundamental é que, para qualquer nó, todos os valores na subárvore esquerda devem ser menores que o valor do nó, e todos os valores na subárvore direita devem ser maiores. Nesta árvore, o filho esquerdo (7) é maior que a raiz (5), violando a propriedade da BST. Portanto, ela não pode ser uma BST.\n\n- **Árvore AVL e Árvore Rubro-Negra (RB-tree):** Ambas são tipos especiais de BSTs auto-balanceadas. Como a árvore dada não é uma BST, ela também não pode ser uma AVL ou uma RB-tree.\n\n- **Heap Mínima (Min-Heap):** A propriedade fundamental é que o valor de qualquer nó pai deve ser menor ou igual aos valores de seus filhos. Aqui, a raiz (5) é menor que ambos os filhos (7 e 6). Esta propriedade é satisfeita.\n\n- **(a, b, d) Incorreto:** A árvore viola a propriedade fundamental da Árvore Binária de Pesquisa, o que a desqualifica como BST, AVL ou Rubro-Negra.\n- **(c) Correto:** A árvore satisfaz a propriedade de uma heap mínima, onde cada pai é menor que seus filhos."
    },
    {
      "id_questao": "2023_0_q7",
      "prova_referencia": "2023-0.pdf",
      "numero_questao": 7,
      "ano_prova": 2023,
      "area": [
        { "nome": "Análise de Complexidade", "subarea": "Notação Big O" },
        { "nome": "Estruturas de Dados", "subarea": null }
      ],
      "enunciado": "Sobre a complexidade de algoritmos, marque a alternativa correta:",
      "opcoes": [
        { "letra": "a", "texto": "A busca binária em vetor ordenado é realizada em tempo $O(N/2)$ no pior caso, sendo N o tamanho do vetor de chaves", "correta": false },
        { "letra": "b", "texto": "É possível inserir elementos de forma não ordenada em uma lista encadeada a custo constante no pior caso, independentemente da quantidade de elementos da lista encadeada", "correta": true },
        { "letra": "c", "texto": "A inserção de elementos no início de um vetor é feita a custo constante no pior caso, independentemente da quantidade de elementos do vetor", "correta": false },
        { "letra": "d", "texto": "A inserção em uma árvore binária de pesquisa pode ser realizada a custo constante no pior caso, independentemente da quantidade de elementos da árvore", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Análise da complexidade de tempo no pior caso para cada operação.\n\n- **(a) Busca Binária:** A complexidade da busca binária é logarítmica, $O(\\log N)$, pois a cada passo o espaço de busca é dividido pela metade. $O(N/2)$ é uma complexidade linear ($O(N)$), que é incorreta.\n\n- **(b) Inserção em Lista Encadeada:** A inserção \"não ordenada\" implica que podemos escolher o local de inserção mais eficiente. Inserir um novo elemento no início de uma lista encadeada (assumindo que temos um ponteiro para a cabeça) envolve apenas atualizar alguns ponteiros, uma operação de tempo constante, $O(1)$, independentemente do tamanho da lista. Esta afirmativa está correta.\n\n- **(c) Inserção em Vetor:** A inserção no início de um vetor (array) exige que todos os outros $N$ elementos sejam deslocados uma posição para a direita para abrir espaço. Isso resulta em uma complexidade linear, $O(N)$.\n\n- **(d) Inserção em Árvore Binária de Pesquisa (BST):** No pior caso, a BST pode degenerar em uma lista encadeada (se os elementos forem inseridos em ordem). Nesse cenário, a altura da árvore é $N$, e a inserção exigirá percorrer todos os $N$ nós, resultando em uma complexidade linear, $O(N)$.\n\n- **(b) Correto:** A inserção no início de uma lista encadeada é uma operação $O(1)$."
    },
    {
      "id_questao": "2023_0_q8",
      "prova_referencia": "2023-0.pdf",
      "numero_questao": 8,
      "ano_prova": 2023,
      "area": [
        { "nome": "Algoritmos de Ordenação", "subarea": "MergeSort" },
        { "nome": "Recursão", "subarea": "Técnicas recursivas e análise" }
      ],
      "enunciado": "Considere o pseudo-código abaixo e escolha a opção correta:\n```c\nvoid par (int v[], int inicio, int meio, int fim, int vaux[]) {\n  unsigned i=inicio, j=meio+1, k=inicio;\n  while((i <= meio) && (j <= fim))\n  {\n    if (v[i]<v[j]) { vaux[k] = v[i]; i++; }\n    else { vaux[k]=v[j]; j++; }\n    k++;\n  }\n  while(i <= meio) { vaux[k] = v[i]; i++; k++; }\n  while(j <= fim) { vaux[k] = v[j]; j++; k++; }\n  for(i = inicio; i<=fim; i++) { v[i] = vaux[i]; }\n}\n\nvoid sortR (int v[], int inicio, int fim, int vaux[]) {\n  int meio;\n  if(inicio < fim) {\n    meio = (inicio+fim)/2;\n    sortR(v, inicio, meio, vaux);\n    sortR(v, meio+1, fim, vaux);\n    par (v, inicio, meio, fim, vaux);\n  }\n}\n\nvoid sort (int v[], int tam) {\n  int * vaux;\n  vaux = (int*) malloc (sizeof(int) * tam);\n  sortR(v, 0, tam-1, vaux);\n  free(vaux);\n}\n```",
      "opcoes": [
        { "letra": "a", "texto": "Ela implementa um algoritmo recursivo conhecido como Quick Sort ao chamar a função recursiva sortR para ordenar o vetor v", "correta": false },
        { "letra": "b", "texto": "Ela implementa um algoritmo recursivo conhecido como Radix Sort ao chamar a função recursiva sortR para ordenar o vetor v", "correta": false },
        { "letra": "c", "texto": "Ela implementa um algoritmo recursivo conhecido como Merge Sort ao chamar a função recursiva sortR para ordenar o vetor v", "correta": true },
        { "letra": "d", "texto": "Ela não ordena o vetor v", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** O código apresenta a clássica estratégia de \"dividir para conquistar\".\n\n1.  **Função `sort`:** A função principal que aloca um vetor auxiliar (`vaux`) e chama a função recursiva `sortR`.\n2.  **Função `sortR`:** Esta é a função recursiva. Ela verifica a condição de parada (`inicio < fim`). Se não for o caso, ela divide o vetor ao meio (`meio = (inicio+fim)/2`), chama a si mesma para a metade esquerda (`inicio` a `meio`) e para a metade direita (`meio+1` a `fim`).\n3.  **Função `par`:** Após as chamadas recursivas retornarem (o que significa que as duas metades estão ordenadas), a função `par` é chamada. Esta função intercala (merges) as duas metades ordenadas em um único segmento ordenado, usando o vetor auxiliar `vaux` e depois copiando o resultado de volta para o vetor original `v`.\n\nEsta sequência de **dividir**, **conquistar** (chamadas recursivas) e **combinar** (intercalar) é a definição do algoritmo **Merge Sort**.\n\n- **(a) Incorreto:** QuickSort também é \"dividir para conquistar\", mas sua etapa de combinação é trivial, e o trabalho principal é feito na etapa de particionamento (antes das chamadas recursivas), o que não corresponde ao código.\n- **(b) Incorreto:** Radix Sort não é um algoritmo baseado em comparação e não segue essa estrutura recursiva.\n- **(c) Correto:** O código implementa o Merge Sort.\n- **(d) Incorreto:** O algoritmo ordena corretamente o vetor."
    },
    {
      "id_questao": "2023_0_q9",
      "prova_referencia": "2023-0.pdf",
      "numero_questao": 9,
      "ano_prova": 2023,
      "area": [
        { "nome": "Recursão", "subarea": "Técnicas recursivas e análise" }
      ],
      "enunciado": "Qual é a saída do seguinte pseudo-código? Considere que:\n- len(lista) retorna o número de elementos em uma lista\n- max(a,b) retorna o maior dos argumentos. Por exemplo, max(5,8) retorna 8 e max(3,1) retorna 3\n- A notação lista[1:] equivale a uma cópia da lista sem o primeiro elemento. Por exemplo, se a lista for lista = [1,2,3], então lista[1:] será a lista [2, 3]\n\n```python\ndef recursao(lista):\n  if len(lista) == 1:\n    return lista[0]\n  else:\n    return max(lista[0], recursao(lista[1:]))\n\nprint(recursao([11, 2, 13, 5, 7, 3]))\n```",
      "opcoes": [
        { "letra": "a", "texto": "13", "correta": true },
        { "letra": "b", "texto": "3", "correta": false },
        { "letra": "c", "texto": "11", "correta": false },
        { "letra": "d", "texto": "2", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A função `recursao` foi projetada para encontrar o maior elemento de uma lista. Ela faz isso comparando o primeiro elemento da lista com o maior elemento do restante da lista (encontrado através de uma chamada recursiva).\n\n**Rastreamento da Execução:**\n- `recursao([11, 2, 13, 5, 7, 3])` retorna `max(11, recursao([2, 13, 5, 7, 3]))`\n- `recursao([2, 13, 5, 7, 3])` retorna `max(2, recursao([13, 5, 7, 3]))`\n- `recursao([13, 5, 7, 3])` retorna `max(13, recursao([5, 7, 3]))`\n- `recursao([5, 7, 3])` retorna `max(5, recursao([7, 3]))`\n- `recursao([7, 3])` retorna `max(7, recursao([3]))`\n- `recursao([3])` atinge o caso base e retorna `3`.\n\nAgora, as chamadas retornam:\n- `max(7, 3)` retorna `7`.\n- `max(5, 7)` retorna `7`.\n- `max(13, 7)` retorna `13`.\n- `max(2, 13)` retorna `13`.\n- `max(11, 13)` retorna `13`.\n\nO valor final impresso é **13**.\n\n- **(a) Correto:** O resultado da execução é 13.\n- **(b, c, d) Incorreto:** São outros valores presentes na lista, mas não o máximo."
    },
    {
      "id_questao": "2023_0_q10",
      "prova_referencia": "2023-0.pdf",
      "numero_questao": 10,
      "ano_prova": 2023,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Arrays" },
        { "nome": "Operações Fundamentais", "subarea": null }
      ],
      "enunciado": "Qual é o resultado do seguinte pseudo-código na variável resultMatrix quando as entradas são duas matrizes \"matrixA\" e \"matrixB\" de dimensões m x n e n x p, respectivamente? Sendo $m=2$, $n=3$ e $p=2$\n```c\nint[][] matrixA = {{1, 0, 2}, {0, 5, 0}};\nint[][] matrixB = {{0, 8}, {9, 0}, {0, 11}};\nint[][] resultMatrix = new int[m][p];\n\nfor (int i=0; i<m; i++) {\n  for (int j=0; j<p; j++) {\n    int sum=0;\n    for (int k=0; k<n; k++) {\n      sum += matrixA[i][k] * matrixB[k][j];\n    }\n    resultMatrix[i][j] = sum;\n  }\n}\n```",
      "opcoes": [
        { "letra": "a", "texto": "resultMatrix = {{0, 0}, {0, 0}}", "correta": false },
        { "letra": "b", "texto": "resultMatrix = {{0, 30, 0}, {45, 0, 0}}", "correta": false },
        { "letra": "c", "texto": "resultMatrix = {{0, 30}, {45, 0}, {9, 8}}", "correta": false },
        { "letra": "d", "texto": "resultMatrix = {{0, 30}, {45, 0}}", "correta": true }
      ],
      "explicacao_geral": "**Raciocínio:** O código implementa a multiplicação de matrizes. A matriz resultante `resultMatrix` terá dimensões $m \\times p$, ou seja, $2 \\times 2$.\n\n**Cálculo dos Elementos:**\n\n- **resultMatrix[0][0]:** (Linha 0 de A) ⋅ (Coluna 0 de B)\n  = `(1*0) + (0*9) + (2*0)`\n  = `0 + 0 + 0 = 0`\n\n- **resultMatrix[0][1]:** (Linha 0 de A) ⋅ (Coluna 1 de B)\n  = `(1*8) + (0*0) + (2*11)`\n  = `8 + 0 + 22 = 30`\n\n- **resultMatrix[1][0]:** (Linha 1 de A) ⋅ (Coluna 0 de B)\n  = `(0*0) + (5*9) + (0*0)`\n  = `0 + 45 + 0 = 45`\n\n- **resultMatrix[1][1]:** (Linha 1 de A) ⋅ (Coluna 1 de B)\n  = `(0*8) + (5*0) + (0*11)`\n  = `0 + 0 + 0 = 0`\n\n**Matriz Resultante:** `resultMatrix` será `{{0, 30}, {45, 0}}`.\n\n- **(d) Correto:** Corresponde ao resultado do cálculo da multiplicação das matrizes.\n- **(a, b, c) Incorreto:** São resultados de cálculos incorretos ou com dimensões erradas."
    }
  ]