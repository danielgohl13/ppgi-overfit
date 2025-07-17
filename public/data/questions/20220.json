[
  {
    "id_questao": "2022_0_q1",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 1,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Arrays"
      },
      {
        "nome": "Operações Fundamentais",
        "subarea": "Busca"
      }
    ],
    "enunciado": "Indique qual é a saída correta do seguinte programa em python:\n```python\nclass Vector():\n  def __init__(self, row: list()):\n    self.row = row\n\n  def dot_product(self, column):\n    return sum(self.row[i] * column.row[i] for i in range(len(self.row)))\n\nvec_1 = Vector([0, 2, 0, 0, 5])\nvec_2 = Vector([1, 0, 3, 4, 0])\nprint(vec_1.dot_product(vec_2))\n```",
    "opcoes": [
      {
        "letra": "a",
        "texto": "15",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "[0, 0, 0, 0, 0]",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "[1, 2, 3, 4, 5]",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "0",
        "correta": true
      }
    ],
    "explicacao_geral": "**Raciocínio:** O método `dot_product` calcula o produto escalar entre dois vetores. O produto escalar é a soma dos produtos dos elementos correspondentes.\n\n**Vetores:**\n- `vec_1.row` = `[0, 2, 0, 0, 5]`\n- `vec_2.row` = `[1, 0, 3, 4, 0]`\n\n**Cálculo:**\nA operação `sum(self.row[i] * column.row[i] for i in range(len(self.row)))` realiza a seguinte computação:\n- $(0 * 1) + (2 * 0) + (0 * 3) + (0 * 4) + (5 * 0)$\n- $0 + 0 + 0 + 0 + 0 = 0$\n\n- **(a) Incorreto:** O valor 15 seria obtido se a operação fosse uma soma de produtos não-nulos, o que não é o caso.\n- **(b, c) Incorreto:** A função retorna um valor escalar (`sum`), não uma lista (vetor)."
  },
  {
    "id_questao": "2022_0_q2",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 2,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Árvores (BST)"
      }
    ],
    "enunciado": "Sobre as características das árvores de pesquisa binária, considere as afirmações:\n1. TODOS os nós da subárvore à esquerda são menores que o pai\n2. O nó mais à esquerda é o menor de TODOS os nós, enquanto que o nó mais à direita é o maior de TODOS\n3. O sucessor de um nó x é o nó com a menor chave maior que a chave de x, e este sucessor estará SEMPRE em um nível (altura) acima de x, ou seja, mais próximo da raiz.\n\nQuais são verdadeiras?",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Apenas as afirmações 2e3",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "Todas as afirmações",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "Apenas as afirmações 1e2",
        "correta": true
      },
      {
        "letra": "d",
        "texto": "Apenas a afirmação 1",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Analisar cada propriedade fundamental de uma Árvore Binária de Busca (BST).\n\n- **Afirmação 1 (Verdadeira):** Esta é a definição principal de uma BST. Para qualquer nó, todos os valores em sua subárvore esquerda devem ser menores que o valor do nó. \n\n- **Afirmação 2 (Verdadeira):** Seguindo a propriedade da BST, o caminho mais à esquerda a partir da raiz levará ao menor elemento, e o caminho mais à direita levará ao maior elemento da árvore. \n\n- **Afirmação 3 (Falsa):** O sucessor de um nó `x` é o elemento com a menor chave que é maior que a chave de `x`. Se `x` possui uma subárvore direita, seu sucessor é o nó mais à esquerda dessa subárvore, que estará em um nível *abaixo* (mais longe da raiz). Se `x` não possui subárvore direita, seu sucessor é o primeiro ancestral cujo filho esquerdo é também um ancestral de `x`, o que estaria em um nível *acima*. Como o sucessor não está *SEMPRE* em um nível acima, a afirmação é falsa. \n\nPortanto, apenas as afirmações 1 e 2 estão corretas."
  },
  {
    "id_questao": "2022_0_q3",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 3,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Algoritmos de Ordenação",
        "subarea": "QuickSort"
      },
      {
        "nome": "Algoritmos de Ordenação",
        "subarea": "MergeSort"
      },
      {
        "nome": "Algoritmos de Ordenação",
        "subarea": "Selection Sort"
      },
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      }
    ],
    "enunciado": "Sobre ordenação, considere as afirmações:\n1. O Quicksort é um dos algoritmos mais conhecidos, pois possui complexidade, no pior caso, de $O(n \\log n)$\n2. O Quicksort e Mergesort usam a técnica de divisão e conquista\n3. O Mergesort possui complexidade assintótica $\\Theta(n \\log n)$ no caso médio.\n4. Caso a lista já esteja ordenada, o Selectionsort têm complexidade de $O(n)$.\n\nTais afirmações são, respectivamente:",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Verdadeira, verdadeira, verdadeira, verdadeira",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "Falsa, verdadeira, verdadeira, falsa",
        "correta": true
      },
      {
        "letra": "c",
        "texto": "Verdadeira, falsa, falsa, verdadeira",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Falsa, falsa, falsa, falsa",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Avaliar a veracidade de cada afirmação sobre a complexidade e características de algoritmos de ordenação.\n\n- **1. Falsa:** A complexidade do Quicksort no **pior caso** é $O(n^2)$. Isso ocorre quando os pivôs escolhidos são sempre o menor ou o maior elemento, levando a partições desbalanceadas. A complexidade $O(n \\log n)$ é para o caso médio e o melhor caso. \n\n- **2. Verdadeira:** Tanto o Quicksort quanto o Mergesort são exemplos clássicos de algoritmos que aplicam a estratégia de **divisão e conquista**, quebrando o problema em subproblemas menores, resolvendo-os recursivamente e combinando os resultados. \n\n- **3. Verdadeira:** O Mergesort tem uma complexidade de tempo consistente de $\\Theta(n \\log n)$ para o melhor, médio e pior caso, pois sempre divide o vetor pela metade e intercala as partes. \n\n- **4. Falsa:** O Selection Sort (Ordenação por Seleção) sempre executa dois laços aninhados para encontrar o menor elemento restante e colocá-lo na posição correta. Sua complexidade é $\\Theta(n^2)$ em todos os casos, incluindo quando o vetor já está ordenado. \n\nA sequência de avaliação é: Falsa, Verdadeira, Verdadeira, Falsa."
  },
  {
    "id_questao": "2022_0_q4",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 4,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Árvores (BST)"
      },
      {
        "nome": "Operações Fundamentais",
        "subarea": "Inserção"
      }
    ],
    "enunciado": "Os seguintes itens são inseridos em uma árvore binária de busca: 8, 3, 4, 9, 5, 6, 2, 1, 7. Qual item é colocado na raiz?",
    "opcoes": [
      {
        "letra": "a",
        "texto": "1",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "4",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "8",
        "correta": true
      },
      {
        "letra": "d",
        "texto": "9",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Em uma Árvore Binária de Busca (BST), o primeiro elemento inserido em uma árvore inicialmente vazia se torna o nó raiz.\n\n**Análise:**\nA sequência de inserção é: **8**, 3, 4, 9, 5, 6, 2, 1, 7. \nComo a árvore começa vazia, o primeiro elemento, `8`, é inserido na raiz.\n\n- **(a, b, d) Incorreto:** Os outros valores seriam inseridos subsequentemente com base em suas comparações com os nós já existentes, mas não ocupariam a raiz."
  },
  {
    "id_questao": "2022_0_q5",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 5,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Pilhas"
      },
      {
        "nome": "Estruturas de Dados",
        "subarea": "Listas Encadeadas"
      },
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      }
    ],
    "enunciado": "Para a implementação eficiente (O(1)) de uma pilha usando lista simplesmente encadeada, onde os push's e pop's são executados?",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Push depois do último elemento, pop no último elemento",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "Push antes do primeiro elemento, pop no primeiro elemento",
        "correta": true
      },
      {
        "letra": "c",
        "texto": "Push antes do primeiro elemento, pop no último elemento",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Push depois do último elemento, pop no primeiro elemento",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Uma pilha opera sob o princípio LIFO (Last-In, First-Out). Para que as operações `push` (inserir) e `pop` (remover) sejam eficientes ($O(1)$) usando uma lista simplesmente encadeada, ambas devem ocorrer na mesma extremidade da lista: o início.\n\n- **Push antes do primeiro elemento (Inserção no Início):** Esta operação é $O(1)$. Basta criar um novo nó, fazer seu ponteiro `next` apontar para a cabeça atual da lista e, em seguida, atualizar o ponteiro da cabeça para o novo nó.\n\n- **Pop no primeiro elemento (Remoção do Início):** Esta operação também é $O(1)$. Basta pegar o valor do nó da cabeça, atualizar o ponteiro da cabeça para o segundo nó (`head = head->next`) e liberar a memória do nó antigo.\n\n**Análise das outras opções:**\n- **(a, c) Incorreto:** `pop no último elemento` em uma lista simplesmente encadeada é uma operação $O(n)$, pois é necessário percorrer toda a lista para encontrar o penúltimo nó e atualizar seu ponteiro `next` para NULL. Isso viola o requisito de eficiência $O(1)$.\n- **(d) Incorreto:** Esta configuração implementaria uma fila (FIFO), não uma pilha (LIFO)."
  },
  {
    "id_questao": "2022_0_q6",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 6,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Arrays"
      }
    ],
    "enunciado": "Indique qual é a saída correta do seguinte programa escrito em python:\n```python\nclass Vector():\n  def __init__(self, row: list()):\n    self.row = row\n\n  def dot_product(self, column):\n    return sum(self.row[i] * column.row[i] for i in range(len(self.row)))\n\nvec_1 = Vector([1, 2, 3, 4, 5])\nvec_2 = vec_1\nvec_2.row[2] = 15\nprint(vec_1.row)\n```",
    "opcoes": [
      {
        "letra": "a",
        "texto": "[2 15 4 5]",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "[01 2 15 4 5]",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "[1 2 15 4 15]",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "[1 2 15 4 5]",
        "correta": true
      }
    ],
    "explicacao_geral": "**Raciocínio:** Esta questão testa o entendimento de como Python lida com a atribuição de objetos. Em Python, a atribuição de objetos (`=`) cria uma nova referência para o mesmo objeto na memória, não uma cópia do objeto.\n\n**Análise do Código:**\n1. `vec_1 = Vector([1, 2, 3, 4, 5])`: Um objeto `Vector` é criado e a variável `vec_1` aponta para ele. \n2. `vec_2 = vec_1`: A variável `vec_2` agora aponta para o **mesmo objeto** `Vector` que `vec_1`. Não há um segundo objeto. \n3. `vec_2.row[2] = 15`: A lista `row` dentro do objeto (que é referenciado por `vec_1` e `vec_2`) é modificada. O elemento no índice 2, que era `3`, torna-se `15`. \n4. `print(vec_1.row)`: Como `vec_1` aponta para o objeto que foi modificado, a impressão refletirá essa mudança. A lista `row` agora é `[1, 2, 15, 4, 5]`. \n\n- **(a, b, c) Incorreto:** São variações que não correspondem à modificação única no índice 2 do vetor original."
  },
  {
    "id_questao": "2022_0_q7",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 7,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      },
      {
        "nome": "Análise de Complexidade",
        "subarea": "Ω"
      }
    ],
    "enunciado": "Considere as funções $f(n)=(n+1)(n-1)$ e $g(n)=8 \\log_2(n)+1$, sendo $n>0$. Podemos afirmar que:",
    "opcoes": [
      {
        "letra": "a",
        "texto": "$f(n)$ é exponencial e $g(n)$ é exponencial",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "$f(n)$ é quadrática e $g(n)$ é linear",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "$g(n)=\\Omega(f(n))$",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "$g(n)=O(f(n))$",
        "correta": true
      }
    ],
    "explicacao_geral": "**Raciocínio:** Primeiro, determine a classe de complexidade de cada função e, em seguida, compare-as usando as notações assintóticas.\n\n**Análise das Funções:**\n- **Função f(n):** $f(n) = (n+1)(n-1) = n^2 - 1$. O termo de maior ordem é $n^2$, então $f(n)$ é uma função **quadrática**, ou seja, $f(n) \\in \\Theta(n^2)$.\n- **Função g(n):** $g(n) = 8 \\log_2(n) + 1$. O termo de maior ordem é $\\log_2(n)$, então $g(n)$ é uma função **logarítmica**, ou seja, $g(n) \\in \\Theta(\\log n)$.\n\n**Comparação Assintótica:**\nDevemos comparar o crescimento de $\\log n$ (para $g(n)$) e $n^2$ (para $f(n)$). A função quadrática ($n^2$) cresce assintoticamente muito mais rápido do que a função logarítmica ($\\log n$).\n\n- **(a, b) Incorreto:** As classificações das funções estão erradas.\n- **(c) Incorreto:** A afirmação $g(n) = \\Omega(f(n))$ significa que $\\log n = \\Omega(n^2)$. Isso implicaria que $\\log n$ cresce pelo menos tão rápido quanto $n^2$, o que é falso.\n- **(d) Correto:** A afirmação $g(n) = O(f(n))$ significa que $\\log n = O(n^2)$. Isso implica que $n^2$ é um limite superior para o crescimento de $\\log n$, o que é verdadeiro, pois $n^2$ cresce mais rápido que $\\log n$ para valores suficientemente grandes de $n$."
  },
  {
    "id_questao": "2022_0_q8",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 8,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Recursão",
        "subarea": "Técnicas recursivas e análise"
      }
    ],
    "enunciado": "Indique qual é a saída correta do seguinte programa escrito em python:\n```python\ndef fibonacci(n):\n  if n == 1:\n    return 0\n  elif n == 2:\n    return 1\n  else:\n    return fibonacci(n-1) + fibonacci(n-2)\n\nn = 7\nprint(fibonacci(n))\n```",
    "opcoes": [
      {
        "letra": "a",
        "texto": "13",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "5",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "0",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "8",
        "correta": true
      }
    ],
    "explicacao_geral": "**Raciocínio:** A função implementa a sequência de Fibonacci de forma recursiva, mas com uma indexação inicial específica.\n\n**Cálculo da Sequência:**\n- `fibonacci(1)` retorna `0` (caso base) \n- `fibonacci(2)` retorna `1` (caso base) \n- `fibonacci(3)` = `fibonacci(2)` + `fibonacci(1)` = `1 + 0` = `1`\n- `fibonacci(4)` = `fibonacci(3)` + `fibonacci(2)` = `1 + 1` = `2`\n- `fibonacci(5)` = `fibonacci(4)` + `fibonacci(3)` = `2 + 1` = `3`\n- `fibonacci(6)` = `fibonacci(5)` + `fibonacci(4)` = `3 + 2` = `5`\n- `fibonacci(7)` = `fibonacci(6)` + `fibonacci(5)` = `5 + 3` = `8`\n\nO programa chama `fibonacci(7)`, que, após as chamadas recursivas, retorna o valor `8`. "
  },
  {
    "id_questao": "2022_0_q9",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 9,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Grafos"
      }
    ],
    "enunciado": "Um grafo é uma árvore se e somente se:",
    "opcoes": [
      {
        "letra": "a",
        "texto": "É planar",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "É conexo, não direcionado e não contém ciclos",
        "correta": true
      },
      {
        "letra": "c",
        "texto": "É completamente conectado",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Todo grafo é uma árvore",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** A questão pede a definição formal de uma árvore na teoria dos grafos.\n\n- **(a) Incorreto:** Um grafo ser planar significa que pode ser desenhado em um plano sem que as arestas se cruzem. Muitos grafos planares não são árvores (por exemplo, um ciclo simples é planar, mas tem um ciclo).\n- **(b) Correto:** Esta é a definição padrão de uma árvore. Ela deve satisfazer três condições: ser **conexo** (existe um caminho entre quaisquer dois vértices), **não direcionado** e **acíclico** (não conter ciclos). A combinação dessas propriedades define unicamente uma árvore. \n- **(c) Incorreto:** Um grafo completamente conectado (clique), onde todos os vértices estão ligados a todos os outros, contém muitos ciclos se tiver mais de 2 vértices, violando a condição de ser acíclico.\n- **(d) Incorreto:** O oposto é verdadeiro: toda árvore é um tipo especial de grafo, mas nem todo grafo é uma árvore."
  },
  {
    "id_questao": "2022_0_q10",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 10,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Arrays"
      }
    ],
    "enunciado": "Matrizes são estruturas de dados de n-dimensões que podem ser implementadas utilizando arrays (vetores). Por simplicidade, chamaremos de matrizes as matrizes bidimensionais numéricas (que armazenam números inteiros). Sendo assim, marque a alternativa INCORRETA.",
    "opcoes": [
      {
        "letra": "a",
        "texto": "O produto de duas matrizes, a primeira com 'm' linhas e 'n' colunas e a segunda com 'x' linhas e 'y' colunas, resulta em uma matriz de 'n' linhas e 'y' colunas.",
        "correta": true
      },
      {
        "letra": "b",
        "texto": "Uma das formas triviais de implementar a soma dos elementos de uma matriz pode ser realizada através de dois laços aninhados (um sobre as linhas e o outro sobre as colunas) e um acumulador de valores.",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "Uma matriz também pode ser representada utilizando listas encadeadas (utilizando referências ou ponteiros).",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Uma matriz de 'm' linhas e 'n' colunas contêm 'm*n' espaços para alocação de números inteiros.",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Avaliar a veracidade de cada afirmação sobre matrizes bidimensionais para encontrar a **INCORRETA**.\n\n- **(a) Incorreta:** Para que o produto de uma matriz A (dimensão $m \\times n$) e uma matriz B (dimensão $x \\times y$) seja definido, o número de colunas de A deve ser igual ao número de linhas de B (i.e., $n = x$). A matriz resultante terá dimensão $m \\times y$. A afirmativa diz que a matriz resultante tem 'n' linhas e 'y' colunas, o que é falso; ela deveria ter 'm' linhas. **Esta é a afirmativa incorreta.** \n\n- **(b) Correta:** Somar todos os elementos de uma matriz é uma operação comum, tipicamente implementada percorrendo todas as linhas e colunas com laços aninhados e somando os valores em uma variável acumuladora. \n\n- **(c) Correta:** Embora arrays sejam a implementação mais comum, matrizes (especialmente as esparsas, com muitos zeros) podem ser representadas de forma mais eficiente em termos de memória usando listas encadeadas. \n\n- **(d) Correta:** Uma matriz com 'm' linhas e 'n' colunas possui um total de $m \\times n$ elementos. "
  },
  {
    "id_questao": "2022_0_q11",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 11,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Algoritmos de Ordenação",
        "subarea": "Insertion Sort"
      },
      {
        "nome": "Operações Fundamentais",
        "subarea": "Busca"
      }
    ],
    "enunciado": "Considere o pseudo algoritmo abaixo:\n```c\nvoid Inserir(int vetor[], int N, int novo) {\n  /* tamanho do vetor N+1 */\n  int i = 1, j = N; /* ocupação do vetor */\n  while (i <= j) {\n    int meio = (int)floor((i + j) / 2); /* função piso */\n    if (vetor[meio] > novo) { j = meio - 1; }\n    else { i = meio + 1; }\n  }\n  vetor[N+1] = novo;\n  for (k = N + 1; k > i; k--) {\n    trocar(vetor, k, k-1); /* Função que inverte a ordem dos elementos */\n  }\n}\n```\nConsidere as afirmações:\n1. Realiza a inserção do novo elemento com menos comparações que o algoritmo da ordenação por inserção.\n2. Realiza a inserção com o mesmo número de comparações que o algoritmo da ordenação por inserção.\n3. Realiza a inserção do novo elemento com o mesmo número de movimentações que o algoritmo da ordenação por inserção.",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Somente a 1 é correta",
        "correta": true
      },
      {
        "letra": "b",
        "texto": "2 e 3 são corretas",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "Somente a 3 é correta",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "1 e 3 são corretas",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** O algoritmo apresentado é uma variação da inserção em um vetor que se presume ordenado. Ele primeiro encontra a posição correta para o novo elemento e depois desloca os outros elementos para abrir espaço.\n\n- **Análise da Busca:** O primeiro laço `while (i <= j)` implementa uma **busca binária** para encontrar o índice `i` onde o `novo` elemento deve ser inserido. A complexidade de comparações da busca binária é $O(\\log n)$.\n- **Análise da Inserção:** O segundo laço `for` desloca os elementos a partir do final para abrir espaço na posição `i`. A complexidade de movimentações no pior caso é $O(n)$.\n\n**Avaliação das Afirmações:**\n- **1. Correta:** A ordenação por inserção (Insertion Sort) padrão utiliza uma busca linear para encontrar a posição de inserção, o que leva $O(n)$ comparações no pior caso. O algoritmo do enunciado usa busca binária, que leva $O(\\log n)$ comparações. Como $O(\\log n)$ é assintoticamente menor que $O(n)$, esta afirmação é correta. \n- **2. Incorreta:** O número de comparações é menor ($O(\\log n)$ vs $O(n)$). \n- **3. Incorreta:** O número de movimentações, tanto no algoritmo do enunciado quanto no Insertion Sort padrão, é $O(n)$ no pior caso (quando o elemento é inserido no início). A afirmação diz que o número é o *mesmo*, o que não é garantido em todos os casos, e a principal melhoria do algoritmo está nas comparações, não nas movimentações. "
  },
  {
    "id_questao": "2022_0_q12",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 12,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Algoritmos de Ordenação",
        "subarea": "QuickSort"
      },
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      }
    ],
    "enunciado": "Qual das opções melhor representa o limite superior assintótico do tempo de execução do algoritmo Quick Sort no pior caso?",
    "opcoes": [
      {
        "letra": "a",
        "texto": "$O(n)$",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "$O(n \\log n)$",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "$O(n!)$",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "$O(n^2)$",
        "correta": true
      }
    ],
    "explicacao_geral": "**Raciocínio:** O pior caso de desempenho do QuickSort ocorre quando a etapa de particionamento consistentemente escolhe o menor ou o maior elemento como pivô.\n\n**Análise do Pior Caso:**\n- Se o pivô é sempre o elemento mínimo ou máximo, o vetor é particionado em um subvetor com 0 elementos e outro com $n-1$ elementos.\n- Isso leva a uma relação de recorrência de $T(n) = T(n-1) + O(n)$, onde $O(n)$ é o custo do particionamento.\n- Essa recorrência se desdobra em $T(n) = O(n^2)$.\n\n- **(a) Incorreto:** $O(n)$ é a complexidade do melhor caso para alguns algoritmos, como o Insertion Sort.\n- **(b) Incorreto:** $O(n \\log n)$ é a complexidade do caso médio e do melhor caso para o QuickSort. \n- **(c) Incorreto:** $O(n!)$ representa uma complexidade muito maior, associada a problemas como a geração de todas as permutações.\n- **(d) Correto:** $O(n^2)$ é o limite superior assintótico (pior caso) para o QuickSort. "
  },
  {
    "id_questao": "2022_0_q13",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 13,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Arrays"
      }
    ],
    "enunciado": "O que faz o código C abaixo?\n```c\n#include <stdio.h>\n#define MAX 50\n\nint main() {\n  int m, soma = 0;\n  int mat[MAX][MAX];\n  scanf(\"%d\", &m);\n  for (int i = 0; i < m; i++)\n    for (int j = 0; j < m; j++)\n      scanf(\"%d\", &mat[i][j]);\n\n  for (int i = 0; i < m; i++)\n    for (int j = i; j < m; j++)\n      soma += mat[i][j];\n\n  printf(\"%d\\n\", soma);\n}\n```",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Calcula e imprime a soma dos elementos iguais ou acima da diagonal principal da matriz.",
        "correta": true
      },
      {
        "letra": "b",
        "texto": "Calcula e imprime a soma dos elementos da matriz.",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "Imprime somente o último valor da matriz, ou seja, mat[m][m].",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Calcula e imprime a soma dos elementos iguais ou abaixo da diagonal principal da matriz.",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** A chave para entender o código está nos laços que calculam a soma.\n\n**Análise do Código:**\n- O primeiro conjunto de laços aninhados lê os valores para uma matriz `mat` de dimensão `m x m`.\n- O segundo conjunto de laços aninhados é o responsável pelo cálculo:\n  - `for (int i = 0; i < m; i++)`: O laço externo percorre as linhas de 0 a `m-1`.\n  - `for (int j = i; j < m; j++)`: O laço interno percorre as colunas, **mas começando do índice `i` (o índice da linha atual)** e indo até `m-1`. \n- Isso significa que para cada linha `i`, a soma inclui os elementos `mat[i][i]`, `mat[i][i+1]`, ..., `mat[i][m-1]`.\n- Esses elementos correspondem à **diagonal principal** (onde `j == i`) e todos os elementos **acima dela** (à direita, onde `j > i`).\n\n- **(a) Correto:** O código soma os elementos da triangular superior da matriz, incluindo a diagonal principal. "
  },
  {
    "id_questao": "2022_0_q14",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 14,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Recursão",
        "subarea": null
      }
    ],
    "enunciado": "Analise o seguinte programa em C e indique a saída correta:\n```c\nvoid func1(int x) { x = 9 * x; }\nvoid func2(int v[]) { v[0] = 3 * v[0]; }\n\nvoid main(void) {\n  int x, v[2];\n  x = 222;\n  func1(x);\n  printf(\"x: %d\\n\", x);\n\n  v[0] = 333;\n  func2(v);\n  printf(\"v[0]: %d\\n\", v[0]);\n}\n```",
    "opcoes": [
      {
        "letra": "a",
        "texto": "x: 222 e v[0]: 999",
        "correta": true
      },
      {
        "letra": "b",
        "texto": "x: 222 e v[0]: 222",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "x: 222 e v[0]: 666",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "x: 222 e v[0]: 333",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Esta questão testa a diferença entre passagem de parâmetros por valor e por referência (ou endereço) em C.\n\n- **Passagem por Valor (`func1`):** A variável `x` é um `int`. Em C, tipos primitivos como `int` são passados **por valor**. Isso significa que a função `func1` recebe uma cópia do valor de `x`. A alteração `x = 9 * x` dentro de `func1` afeta apenas a cópia local, não a variável `x` original na função `main`. Portanto, `x` permanece `222`. \n\n- **Passagem de Array (`func2`):** Quando um array é passado para uma função em C, o que é realmente passado é o **endereço do primeiro elemento** do array (um ponteiro). Portanto, a função `func2` opera diretamente na memória do array `v` da função `main`. A linha `v[0] = 3 * v[0]` modifica o valor original. O valor de `v[0]` era `333`, então se torna `3 * 333 = 999`. \n\n- **Saída:** A impressão será `x: 222` e `v[0]: 999`."
  },
  {
    "id_questao": "2022_0_q15",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 15,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Listas Encadeadas"
      },
      {
        "nome": "Operações Fundamentais",
        "subarea": "Inserção"
      }
    ],
    "enunciado": "O que faz o seguinte código em C?\n```c\nLista abracadabra(Lista *l, int v) {\n  Lista *novo = (Lista*) malloc(sizeof(Lista));\n  novo->info = v;\n  novo->prox = l;\n  novo->ant = NULL;\n  if (l) { l->ant = novo; };\n  return novo;\n}\n```",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Insere inteiros em uma lista duplamente encadeada, onde tais elementos são sempre inseridos no início da lista.",
        "correta": true
      },
      {
        "letra": "b",
        "texto": "Insere inteiros em uma lista duplamente encadeada, onde tais elementos são sempre inseridos no final da lista.",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "Insere inteiros em uma lista simplesmente encadeada, onde tais elementos são sempre inseridos no início da lista.",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Insere inteiros em uma lista simplesmente encadeada, onde tais elementos são sempre inseridos no fim da lista.",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Analisar as operações de ponteiro realizadas pela função `abracadabra`.\n\n**Análise do Código:**\n1.  **Estrutura:** O código manipula ponteiros `prox` e `ant`. A existência de um ponteiro para o elemento anterior (`ant`) caracteriza uma **lista duplamente encadeada**. \n2.  **Operação de Inserção:**\n    -   `novo->prox = l;`: O ponteiro `prox` do novo nó aponta para a cabeça antiga da lista (`l`). \n    -   `novo->ant = NULL;`: O ponteiro `ant` do novo nó aponta para `NULL`, pois será o primeiro elemento. \n    -   `if (l) { l->ant = novo; };`: Se a lista não estava vazia, o ponteiro `ant` da cabeça antiga agora aponta para o novo nó. \n    -   `return novo;`: A função retorna o endereço do `novo` nó, que se torna a nova cabeça da lista.\n3.  **Conclusão:** A sequência de operações insere um novo nó antes do antigo primeiro nó, tornando-o a nova cabeça. Isso é uma **inserção no início** de uma lista duplamente encadeada."
  },
  {
    "id_questao": "2022_0_q16",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 16,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Hash Tables"
      },
      {
        "nome": "Hashing",
        "subarea": "Resolução de colisões"
      }
    ],
    "enunciado": "Considere uma tabela hash de comprimento $m=9$, que usa endereçamento aberto e a técnica de sondagem linear (linear probing) para resolver colisões. Considere também a função de dispersão $h(k)=k \\mod m$, onde k é a chave a ser inserida. Por fim, as seguintes chaves foram inseridas: 73, 24, 16, 46, 28 (nesta ordem). Escolha a opção que representa esta tabela após estas operações:",
    "opcoes": [
      {
        "letra": "a",
        "texto": "0-73-16-0-0-28-24-46-0",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "28-46-73-0-0-0-0-24-16",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "0-73-46-28-0-0-0-24-16",
        "correta": true
      },
      {
        "letra": "d",
        "texto": "73-46-0-0-0-0-28-24-16",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Simular o processo de inserção na tabela hash usando a função de hash e a política de resolução de colisão (sondagem linear).\nA tabela tem 9 posições (índices 0 a 8) e a função é $h(k) = k \\mod 9$. A sondagem é linear.\n\n**Passo a Passo da Inserção:**\n1.  **Inserir 73:**\n    -   $h(73) = 73 \\mod 9 = 1$. Posição 1 está livre.\n    -   Tabela: `[_, 73, _, _, _, _, _, _, _]`\n2.  **Inserir 24:**\n    -   $h(24) = 24 \\mod 9 = 6$. Posição 6 está livre.\n    -   Tabela: `[_, 73, _, _, _, _, 24, _, _]`\n3.  **Inserir 16:**\n    -   $h(16) = 16 \\mod 9 = 7$. Posição 7 está livre.\n    -   Tabela: `[_, 73, _, _, _, _, 24, 16, _]`\n4.  **Inserir 46:**\n    -   $h(46) = 46 \\mod 9 = 1$. Posição 1 está ocupada (colisão).\n    -   Sondagem linear: tenta a próxima posição, 2. Posição 2 está livre.\n    -   Tabela: `[_, 73, 46, _, _, _, 24, 16, _]`\n5.  **Inserir 28:**\n    -   $h(28) = 28 \\mod 9 = 1$. Posição 1 está ocupada (colisão).\n    -   Sondagem linear: tenta a posição 2. Está ocupada.\n    -   Sondagem linear: tenta a posição 3. Posição 3 está livre.\n    -   Tabela: `[_, 73, 46, 28, _, _, 24, 16, _]`\n\n**Estado Final:** Representando as posições vazias com 0, a tabela final é `[0, 73, 46, 28, 0, 0, 24, 16, 0]`. A opção 'c' no gabarito corresponde a essa configuração, embora a transcrição no PDF (`0-73-46-28-0-0-24-16`) pareça ter um erro de digitação omitindo zeros."
  },
  {
    "id_questao": "2022_0_q17",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 17,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Árvores (Rubro-Negra)"
      }
    ],
    "enunciado": "Sobre árvores vermelho-preto, considere as afirmações:\n1. A raiz é preta\n2. Toda subárvore nula é preta,\n3. Se um nó é vermelho, então os filhos são pretos.\n\nQual são verdadeiras:",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Apenas as afirmações 2 e 3",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "Todas as afirmações",
        "correta": true
      },
      {
        "letra": "c",
        "texto": "Apenas as afirmações 1 e 2",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Apenas a afirmação 1",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** As afirmações listadas correspondem a um subconjunto das propriedades que definem uma árvore Vermelho-Preto (Rubro-Negra).\n\n- **1. Verdadeira:** A propriedade da raiz define que o nó raiz de uma árvore Vermelho-Preto deve ser sempre preto. \n- **2. Verdadeira:** As folhas, que são os ponteiros nulos (NIL), são consideradas pretas. Isso simplifica a manutenção das propriedades. \n- **3. Verdadeira:** A propriedade da cor vermelha estipula que um nó vermelho não pode ter filhos vermelhos; seus filhos devem ser pretos. \n\nComo todas as três afirmações são propriedades fundamentais das árvores Vermelho-Preto, a alternativa correta é que todas são verdadeiras."
  },
  {
    "id_questao": "2022_0_q18",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 18,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Grafos",
        "subarea": "Algoritmos (Dijkstra, BFS)"
      },
      {
        "nome": "Estruturas de Dados",
        "subarea": "Grafos"
      }
    ],
    "enunciado": "Sobre os grafos, considere as afirmações:\n1. O algoritmo de Dijkstra é conhecido por descobrir o menor caminho entre dois vértices, mas só funciona para casos pequenos ou médios, por possuir complexidade exponencial.\n2. Na implementação da busca em largura, uma fila é normalmente utilizada.\n3. Em grafos esparsos, a implementação por matriz de adjacências consome mais memória do que a implementação por lista de adjacências.\n\nQuais são verdadeiras?",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Apenas as afirmações 2 e 3",
        "correta": true
      },
      {
        "letra": "b",
        "texto": "Apenas as afirmações 1 e 2",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "Apenas a afirmação 1",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Nenhuma das afirmações",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Avaliar a veracidade de cada afirmação sobre algoritmos e representações de grafos.\n\n- **1. Falsa:** O algoritmo de Dijkstra é muito eficiente. Sua complexidade de tempo não é exponencial; com uma implementação usando heap binário, é $O((E+V)\\log V)$ ou $O(E \\log V)$, onde V são os vértices e E as arestas. Ele é amplamente utilizado para grafos grandes. \n\n- **2. Verdadeira:** A Busca em Largura (BFS) explora o grafo em camadas. Uma fila (estrutura de dados FIFO - First-In, First-Out) é a estrutura de dados ideal para gerenciar os vértices a serem visitados, garantindo que os nós de uma camada sejam processados antes dos nós da camada seguinte. \n\n- **3. Verdadeira:** Grafos esparsos são aqueles com poucas arestas (número de arestas $E$ é próximo do número de vértices $V$). Uma **matriz de adjacências** sempre consome $\\Theta(V^2)$ de memória. Uma **lista de adjacências** consome $\\Theta(V+E)$ de memória. Para grafos esparsos, $\\Theta(V+E)$ é muito menor que $\\Theta(V^2)$, tornando a lista de adjacências a representação com menor consumo de memória. \n\nPortanto, apenas as afirmações 2 e 3 estão corretas."
  },
  {
    "id_questao": "2022_0_q19",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 19,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Árvores (AVL)"
      },
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      }
    ],
    "enunciado": "Em uma árvore AVL, considerando que já possuímos a referência para um nó que queremos remover da árvore (não precisa fazer busca), o melhor e o pior caso para remover este elemento são, respectivamente:",
    "opcoes": [
      {
        "letra": "a",
        "texto": "$O(\\log n)$, $O(\\log n)$",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "$O(1)$, $O(\\log n)$",
        "correta": true
      },
      {
        "letra": "c",
        "texto": "$O(1)$, $O(n)$",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "$O(\\log n)$, $O(n)$",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Analisar os custos da operação de remoção em uma árvore AVL, desconsiderando o custo da busca, conforme o enunciado.\n\n- **Melhor Caso: $O(1)$**\n  - Ocorre ao remover um nó folha.\n  - Se a remoção deste nó folha não causa desbalanceamento em nenhum de seus ancestrais, a operação se resume a ajustar o ponteiro do pai para NULL. Nenhuma rotação é necessária.\n  - Portanto, a operação é executada em tempo constante. \n\n- **Pior Caso: $O(\\log n)$**\n  - Ocorre quando a remoção (seja de uma folha, de um nó com um filho, ou de um nó com dois filhos que é substituído pelo seu sucessor) causa um desbalanceamento.\n  - O processo de rebalanceamento pode exigir uma ou mais rotações que se propagam da posição da remoção até a raiz da árvore.\n  - Como a altura de uma árvore AVL é garantidamente $O(\\log n)$, o caminho a ser percorrido para o rebalanceamento no pior caso é proporcional à altura da árvore. \n  - Além disso, a busca pelo sucessor de um nó (no caso de remover um nó com dois filhos) também leva tempo $O(\\log n)$.\n\nPortanto, o melhor caso é $O(1)$ e o pior caso é $O(\\log n)$."
  },
  {
    "id_questao": "2022_0_q20",
    "prova_referencia": "2022-0.pdf",
    "numero_questao": 20,
    "ano_prova": 2022,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Arrays"
      },
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      }
    ],
    "enunciado": "Considere as seguintes operações em uma lista implementada usando vetores: busca por um elemento, acesso por índice, inserção no início da lista, inserção no final da lista, remoção por índice. As complexidades do pior caso dessas operações, na ordem mencionada, são:",
    "opcoes": [
      {
        "letra": "a",
        "texto": "$O(n), O(1), O(1), O(n), O(n)$",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "$O(n), O(1), O(n), O(1), O(n)$",
        "correta": true
      },
      {
        "letra": "c",
        "texto": "$O(1), O(n), O(n), O(n), O(1)$",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "$O(n), O(n), O(1), O(n), O(1)$",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Analisar a complexidade de tempo de cada operação para uma lista implementada com um vetor (array dinâmico).\n\n1.  **Busca por um elemento (valor):** No pior caso, é preciso percorrer o vetor inteiro para encontrar o elemento (ou concluir que ele não existe). Complexidade: **$O(n)$**.\n\n2.  **Acesso por índice:** Vetores permitem acesso direto a qualquer elemento através de seu índice. Complexidade: **$O(1)$**.\n\n3.  **Inserção no início da lista:** Para inserir um elemento no índice 0, todos os `n` elementos existentes precisam ser deslocados uma posição para a direita para abrir espaço. Complexidade: **$O(n)$**.\n\n4.  **Inserção no final da lista:** Esta é uma operação com custo *amortizado* de $O(1)$. No pior caso individual, se o vetor estiver cheio, é preciso alocar um novo vetor maior e copiar todos os `n` elementos, resultando em um custo de $O(n)$. No entanto, a maioria das análises considera o custo amortizado $O(1)$. A alternativa (b) utiliza $O(1)$, que é a interpretação mais comum para esta operação em contextos de análise de estruturas de dados. \n\n5.  **Remoção por índice:** No pior caso (removendo o primeiro elemento), os `n-1` elementos restantes devem ser deslocados uma posição para a esquerda para preencher o espaço. Complexidade: **$O(n)$**.\n\nJuntando tudo, a sequência de complexidades é: **$O(n), O(1), O(n), O(1), O(n)$**, que corresponde à alternativa (b)."
  }
]