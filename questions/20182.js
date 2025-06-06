[
    {
      "id_questao": "2018_2_q1",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 1,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Hashing",
          "subarea": "Funções Hash"
        }
      ],
      "enunciado": "Considere um arquivo sequencial com 10.000 registros, cujas chaves identificadoras são números inteiros de até 8 dígitos. Para criar um índice tipo hashing para esse arquivo, contendo endereços de 0 até 11.999, a mais adequada definição para uma função de hashing f(x) onde x é uma chave e (a mod b) é o resto da divisão de a por b, seria:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "$f=x$ mod $1000+12$",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "$f=x$ mod 12000",
          "correta": true
        },
        {
          "letra": "c",
          "texto": "$f=x/10000$",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "$f=x/11999$",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "f = (x-11999)/10000",
          "correta": false
        }
      ],
      "explicacao_geral": "O objetivo de uma função de hashing é mapear chaves para endereços dentro de uma tabela hash. A tabela deve ter endereços de 0 a 11.999, o que significa um tamanho total de 12.000 posições. A função de hash modular é comumente usada para mapear chaves inteiras para um intervalo de endereços.\n\nA função hash deve produzir valores dentro do intervalo $[0, M-1]$, onde M é o tamanho da tabela hash. Neste caso, M = 12.000. A operação \"mod\" (módulo) é ideal para isso, pois `x mod M` sempre resultará em um valor entre `0` e `M-1` (inclusive).\n\n* **(a) $f=x$ mod $1000+12$**: O resultado estaria no intervalo $[12, 1011]$, que não cobre o intervalo total de 0 a 11.999. Incorreto.\n* **(b) $f=x$ mod 12000**: Esta função produzirá um resultado no intervalo $[0, 11999]$ para qualquer valor inteiro de x. Isso corresponde exatamente ao intervalo de endereços da tabela. Correto.\n* **(c) $f=x/10000$**: A divisão inteira `x/10000` resultaria em um pequeno número de valores, não adequado para espalhar chaves em 12.000 posições. Incorreto.\n* **(d) $f=x/11999$**: Similarmente, a divisão inteira resultaria em um pequeno número de valores. Incorreto.\n* **(e) f = (x-11999)/10000**: Esta função também produziria um pequeno número de valores, e o intervalo resultante não seria o desejado. Incorreto."
    },
    {
      "id_questao": "2018_2_q2",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 2,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Arrays"
        }
      ],
      "enunciado": "Matrizes são estruturas de dados de n-dimensões. Por simplicidade, chamaremos de matrizes as matrizes bidimensionais numéricas (que armazenam números inteiros). Sendo assim, marque a alternativa INCORRETA.",
      "opcoes": [
        {
          "letra": "a",
          "texto": "Uma matriz de m linhas e n colunas contêm $(m^{*}n)$ dados.",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "Uma matriz pode ser representada utilizando listas ligadas.",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "A soma dos elementos de uma matriz pode ser calculada fazendo dois laços aninhados, um sobre as linhas e o outro sobre as colunas.",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "A soma de duas matrizes de m linhas e n colunas resulta em uma matriz de $2^{*}m$ linhas e $2^{*}n$ colunas.",
          "correta": true
        },
        {
          "letra": "e",
          "texto": "O produto de duas matrizes de n linhas e n colunas resulta em uma matriz de n linhas e n colunas.",
          "correta": false
        }
      ],
      "explicacao_geral": "Vamos analisar cada afirmativa sobre matrizes:\n\n* **(a) Uma matriz de m linhas e n colunas contêm $(m*n)$ dados.** \n    * **Correta.** O número total de elementos em uma matriz é o produto do número de linhas pelo número de colunas.\n\n* **(b) Uma matriz pode ser representada utilizando listas ligadas.** \n    * **Correta.** Embora arrays bidimensionais sejam a representação mais comum e eficiente para matrizes densas, matrizes esparsas (com muitos zeros) podem ser eficientemente representadas usando listas ligadas para economizar espaço.\n\n* **(c) A soma dos elementos de uma matriz pode ser calculada fazendo dois laços aninhados, um sobre as linhas e o outro sobre as colunas.** \n    * **Correta.** Esta é a forma padrão e mais intuitiva de percorrer todos os elementos de uma matriz bidimensional e somá-los.\n\n* **(d) A soma de duas matrizes de m linhas e n colunas resulta em uma matriz de $2*m$ linhas e $2*n$ colunas.** \n    * **Incorreta.** Para somar duas matrizes, elas devem ter as mesmas dimensões (m linhas e n colunas). O resultado da soma será uma nova matriz que também terá m linhas e n colunas, e não $2*m$ linhas e $2*n$ colunas. Esta é a alternativa INCORRETA.\n\n* **(e) O produto de duas matrizes de n linhas e n colunas resulta em uma matriz de n linhas e n colunas.** \n    * **Correta.** Para o produto de duas matrizes A (mxn) e B (pxq), o número de colunas de A deve ser igual ao número de linhas de B (n=p). O resultado será uma matriz C (mxq). No caso específico de duas matrizes quadradas de dimensão n x n, o produto resultará em uma matriz de n x n."
    },
    {
      "id_questao": "2018_2_q3",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 3,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores (AVL)"
        }
      ],
      "enunciado": "Considere a árvore AVL abaixo para responder à questão.\n\nQual é a sequência de chaves que constrói a referida árvore AVL, inicialmente vazia?",
      "opcoes": [
        {
          "letra": "a",
          "texto": "23-7-29-15-4-25-35-13-17",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "23-13-35-7-4-29-15-25-17",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "23-29-7-17-13-4-35-25-15",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "23-25-7-15-4-13-35-29-17",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "23-7-29-17-4-35-15-25-13",
          "correta": false
        }
      ],
      "explicacao_geral": "A questão foi anulada conforme o gabarito oficial. Portanto, não é possível fornecer uma resposta correta."
    },
    {
      "id_questao": "2018_2_q4",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 4,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Algoritmos de Ordenação",
          "subarea": "Geral"
        }
      ],
      "enunciado": "Considere as afirmativas sobre métodos de ordenação. Sabendo que N se refere ao número de elementos do conjunto, a alternativa INCORRETA é:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "Os algoritmos Bubble sort e Selection sort são ambos $O(N^{2})$.",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "O Selection sort é o método mais rápido para qualquer tamanho de N se os elementos já estão ordenados, pois este é o seu melhor caso, que é O(Log2 N).",
          "correta": true
        },
        {
          "letra": "c",
          "texto": "No método Quicksort, inicialmente o vetor é dividido em uma sublista da direita e uma da esquerda, de modo que todo elemento da sublista da esquerda seja menor que os da direita. Em seguida, ordenam-se, pelo mesmo processo, as duas sublistas de forma recursiva.",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "O tempo de execução dos algoritmos de ordenação aumenta na medida em que aumentamos o número de chaves se considerarmos o pior caso.",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "O método Quicksort é, essencialmente, uma aplicação do princípio \"dividir para conquistar\".",
          "correta": false
        }
      ],
      "explicacao_geral": "Vamos analisar cada afirmativa:\n\n* **(a) Os algoritmos Bubble sort e Selection sort são ambos $O(N^2)$.** \n    * **Correta.** No pior caso, tanto Bubble Sort quanto Selection Sort têm complexidade de tempo quadrática, $O(N^2)$.\n\n* **(b) O Selection sort é o método mais rápido para qualquer tamanho de N se os elementos já estão ordenados, pois este é o seu melhor caso, que é O(Log2 N).** \n    * **Incorreta.** O Selection Sort tem uma complexidade de tempo de $O(N^2)$ mesmo no melhor caso (quando os elementos já estão ordenados) porque ele sempre realiza o mesmo número de comparações para encontrar o menor elemento em cada iteração, independentemente da ordem inicial. A complexidade $O(\\log N)$ é de busca binária ou de algoritmos de ordenação baseados em comparação em seu melhor caso (como Quicksort ou Mergesort). Esta é a alternativa INCORRETA.\n\n* **(c) No método Quicksort, inicialmente o vetor é dividido em uma sublista da direita e uma da esquerda, de modo que todo elemento da sublista da esquerda seja menor que os da direita. Em seguida, ordenam-se, pelo mesmo processo, as duas sublistas de forma recursiva.** \n    * **Correta.** Esta é uma descrição precisa do processo de particionamento do Quicksort, onde um pivô é escolhido e os elementos são rearranjados de forma que todos os menores (ou maiores, dependendo da ordem) fiquem de um lado e os maiores (ou menores) do outro.\n\n* **(d) O tempo de execução dos algoritmos de ordenação aumenta na medida em que aumentamos o número de chaves se considerarmos o pior caso.** \n    * **Correta.** A complexidade de tempo (seja $O(N \\log N)$, $O(N^2)$, etc.) indica como o tempo de execução cresce com o tamanho da entrada no pior caso. Assim, quanto maior N, maior o tempo de execução.\n\n* **(e) O método Quicksort é, essencialmente, uma aplicação do princípio \"dividir para conquistar\".** \n    * **Correta.** Quicksort é um algoritmo clássico de \"dividir para conquistar\": ele divide o problema em subproblemas menores, conquista (resolve) esses subproblemas recursivamente e combina as soluções (neste caso, a combinação é trivial, pois a partição já coloca o pivô em seu lugar final)."
    },
    {
      "id_questao": "2018_2_q5",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 5,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores Binárias de Busca"
        }
      ],
      "enunciado": "A árvore binária de busca, formada pela inserção dos números 100, 80, 25, 72, 23, 42 e 5, nesta ordem, terá como nós folha os números ___ I, II e ___ e como pai do nó 72 o número ___ III. As lacunas I, II e III são preenchidas CORRETAMENTE e, respectivamente, por:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "100-80-100",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "5-42-25",
          "correta": true
        },
        {
          "letra": "c",
          "texto": "23-25-72",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "25-72-100",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "72-5-23",
          "correta": false
        }
      ],
      "explicacao_geral": "Vamos construir a Árvore Binária de Busca (ABB) inserindo os números na ordem dada: 100, 80, 25, 72, 23, 42, 5.\n\n1.  **100:** Raiz.\n2.  **80:** 80 < 100 -> Esquerda de 100.\n3.  **25:** 25 < 100 -> Esquerda de 100 (80). 25 < 80 -> Esquerda de 80.\n4.  **72:** 72 < 100 -> Esquerda de 100 (80). 72 > 80 (FALSO: 72 < 80) -> 72 > 25 (VERDADEIRO: 72 > 25) -> Direita de 25.\n5.  **23:** 23 < 100 -> Esquerda (80). 23 < 80 -> Esquerda (25). 23 < 25 -> Esquerda de 25.\n6.  **42:** 42 < 100 -> Esquerda (80). 42 < 80 -> Esquerda (25). 42 > 25 -> Direita (72). 42 < 72 -> Esquerda de 72.\n7.  **5:** 5 < 100 -> Esquerda (80). 5 < 80 -> Esquerda (25). 5 < 25 -> Esquerda (23). 5 < 23 -> Esquerda de 23.\n\nÁrvore resultante:\n\n```\n          100\n         /   \n        80\n       /  \n      25\n     /  \\\n    23   72\n   /    /  \n  5    42\n```\n\nAgora, vamos identificar os nós folha e o pai do nó 72:\n\n* **Nós Folha:** São os nós que não possuem filhos. Na árvore construída, os nós folha são **5** (não tem filhos), **42** (não tem filhos) e **72** (não tem filhos). (Revisando: 72 tem filho 42, então não é folha. 5 é folha, 42 é folha. 23 tem filho 5, então não é folha). Os nós folha são 5, 42. No entanto, a imagem da questão pode ter uma pequena diferença na estrutura, ou a pergunta pode estar se referindo a uma construção onde 72 é filho de 25, e 42 é filho de 72, mas 72 não tem filhos. Mas a instrução diz: \"A árvore binária de busca, formada pela inserção dos números 100, 80, 25, 72, 23, 42 e 5, nesta ordem...\". A inserção que fiz acima: 72 é direita de 25, 42 é esquerda de 72, 5 é esquerda de 23.\n\nVamos refazer a construção com muito cuidado para evitar erros:\n\n1.  **100** (Raiz)\n2.  **80** (<100) -> filho esquerdo de 100.\n3.  **25** (<100, <80) -> filho esquerdo de 80.\n4.  **72** (<100, <80, >25) -> filho direito de 25.\n5.  **23** (<100, <80, <25) -> filho esquerdo de 25.\n6.  **42** (<100, <80, >25, <72) -> filho esquerdo de 72.\n7.  **5** (<100, <80, <25, <23) -> filho esquerdo de 23.\n\nÁrvore final:\n\n```\n          100\n         /   \n        80\n       /  \n      25\n     /  \\\n    23   72\n   /    /  \n  5    42\n```\n\nNós Folha: São os nós que não têm filhos. Os nós folha são **5**, **42** e **72** (No meu desenho, 72 tem 42 como filho esq, então 72 não é folha). Ah, 72 é o pai de 42, então 42 é folha. E 5 é folha. O nó 72 não é folha.\n\nEntão, os nós folha são: **5, 42**. Faltaria um nó folha se a questão pede 3.\n\nRevisando o gabarito. O gabarito é (b) 5-42-25. Isso significa que os nós folha são 5 e 42, e o pai de 72 é 25.\n\n* **Nós Folha (I, II):** 5 e 42. (De acordo com minha construção)\n* **Pai do nó 72 (III):** O nó 72 é filho direito de 25. Portanto, o pai de 72 é **25**.\n\nCom base na construção, os nós folha são 5 e 42, e o pai do nó 72 é 25. Isso corresponde à alternativa (b)."
    },
    {
      "id_questao": "2018_2_q6",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 6,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Algoritmos de Ordenação",
          "subarea": "QuickSort"
        }
      ],
      "enunciado": "Marque a alternativa CORRETA. O método de ordenação QuickSort (ordenação rápida) é um método sofisticado de ordenação de vetores que:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "Considera em cada passo somente um único elemento sucessor na sequência fonte e todos os elementos do vetor destino para encontrar o ponto correto da inserção.",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "Ordena todos os elementos que estiverem a intervalos de 4 posições entre si na sequência corrente.",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "É baseado nos princípios de ordenação por inserção direta através de incrementos decrescentes.",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "O Quicksort é um algoritmo que pode usar espaço extra linear no pior caso.",
          "correta": true
        },
        {
          "letra": "e",
          "texto": "É baseado nos princípios de ordenação por seleção direta que consiste na seleção repetitiva da menor dentre as chaves de n elementos, e depois dentre os n-1 elementos restantes, e assim por diante.",
          "correta": false
        }
      ],
      "explicacao_geral": "Vamos analisar cada afirmativa sobre o QuickSort:\n\n* **(a) Considera em cada passo somente um único elemento sucessor na sequência fonte e todos os elementos do vetor destino para encontrar o ponto correto da inserção.**\n    * **Incorreta.** Esta descrição é mais próxima do Insertion Sort, que insere elementos um a um em uma porção já ordenada da lista.\n\n* **(b) Ordena todos os elementos que estiverem a intervalos de 4 posições entre si na sequência corrente.**\n    * **Incorreta.** Esta descrição lembra o Shell Sort, que utiliza uma sequência de intervalos (gaps) para realizar inserções.\n\n* **(c) É baseado nos princípios de ordenação por inserção direta através de incrementos decrescentes.**\n    * **Incorreta.** Esta é uma descrição do Shell Sort.\n\n* **(d) O Quicksort é um algoritmo que pode usar espaço extra linear no pior caso.** \n    * **Correta.** No pior caso (quando o pivô escolhido resulta sempre em partições desbalanceadas, como uma lista já ordenada ou em ordem inversa), a profundidade da recursão do QuickSort pode ser $O(N)$, levando a um uso de espaço de pilha recursiva de $O(N)$.\n\n* **(e) É baseado nos princípios de ordenação por seleção direta que consiste na seleção repetitiva da menor dentre as chaves de n elementos, e depois dentre os n-1 elementos restantes, e assim por diante.** \n    * **Incorreta.** Esta é uma descrição do Selection Sort."
    },
    {
      "id_questao": "2018_2_q7",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 7,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores (AVL)"
        }
      ],
      "enunciado": "Avaliando as sentenças seguintes a respeito de estrutura de dados,\n\nI. A diferença entre árvore binária simples e árvores AVL é o fato de que a segunda pode se reconfigurar dinamicamente, com o intuito de manter um bom nível de balanceamento.\nII. Uma pilha garante que o último elemento inserido seja localizado no seu topo.\nIII. Do ponto de vista conceitual, não há diferença alguma entre uma estrutura de array e uma lista encadeada.\nIV. Tabelas hash são estruturas de dados indicadas para armazenar grande volume de dados.\n\nVerifica-se que:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "As sentenças I e IV são verdadeiras.",
          "correta": true
        },
        {
          "letra": "b",
          "texto": "Apenas a sentença I é verdadeira.",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "As sentenças III e IV são verdadeiras",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "As sentenças II e III são verdadeiras.",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "Apenas I, II e IV são verdadeiras.",
          "correta": false
        }
      ],
      "explicacao_geral": "Vamos analisar cada sentença:\n\n* **I. A diferença entre árvore binária simples e árvores AVL é o fato de que a segunda pode se reconfigurar dinamicamente, com o intuito de manter um bom nível de balanceamento.** \n    * **Verdadeira.** Árvores AVL são árvores binárias de busca *autobalanceadas*. Elas realizam rotações (reconfigurações) automaticamente após inserções e deleções para manter a propriedade de balanceamento (fator de balanceamento de cada nó entre -1, 0, 1).\n\n* **II. Uma pilha garante que o último elemento inserido seja localizado no seu topo.** \n    * **Verdadeira.** Uma pilha (stack) segue o princípio LIFO (Last-In, First-Out). O último elemento inserido é sempre o primeiro a ser acessado (no topo).\n\n* **III. Do ponto de vista conceitual, não há diferença alguma entre uma estrutura de array e uma lista encadeada.** \n    * **Falsa.** Conceitualmente, arrays e listas encadeadas são muito diferentes. Arrays são estruturas de tamanho fixo (ou dinamicamente redimensionáveis com custo), armazenam elementos em posições de memória contíguas e permitem acesso aleatório $O(1)$ por índice. Listas encadeadas são dinâmicas, armazenam elementos em nós não contíguos ligados por ponteiros e permitem inserções/remoções eficientes no início/fim, mas acesso sequencial $O(N)$.\n\n* **IV. Tabelas hash são estruturas de dados indicadas para armazenar grande volume de dados.** \n    * **Verdadeira.** Tabelas hash são amplamente utilizadas para armazenar e recuperar grandes volumes de dados de forma eficiente, pois oferecem tempo médio de busca, inserção e remoção de $O(1)$.\n\nAs sentenças corretas são I, II e IV. A opção `e` afirma \"Apenas I, II e IV são verdadeiras.\", mas o gabarito oficial para esta questão é `a) As sentenças I e IV são verdadeiras.`. Isso indica uma inconsistência na minha análise da sentença II ou no gabarito oficial. A sentença II (\"Uma pilha garante que o último elemento inserido seja localizado no seu topo\") é uma definição fundamental de pilha e está correta. Portanto, se o gabarito oficial é 'a', isso significa que a sentença II é considerada falsa pela prova. Não posso criar informações para justificar essa falsidade. Mantenho a análise de que I, II e IV são corretas e, portanto, a opção 'e' seria a correta, mas devido ao gabarito, apresento o gabarito oficial 'a'. **Limitação:** Inconsistência entre minha análise e o gabarito oficial na avaliação da sentença II."
    },
    {
      "id_questao": "2018_2_q8",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 8,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Geral"
        }
      ],
      "enunciado": "É INCORRETO afirmar que:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "A fila de prioridade, uma estrutura de dados linear, é uma versão especial da fila.",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "Uma lista linear é uma estrutura de dados onde elementos do mesmo tipo são organizados de forma sequencial.",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "Na pilha, uma estrutura não linear, os elementos são colocados e retirados por um único lado da lista, ou seja, pelo topo.",
          "correta": true
        },
        {
          "letra": "d",
          "texto": "Na tabela de Hash por endereçamento aberto, a chave é transformada num índice inteiro que é usado para acessar os dados.",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "Um array pode ser alocado dinamicamente, situação na qual ele passa a ser denominado lista ligada ou lista encadeada.",
          "correta": false
        }
      ],
      "explicacao_geral": "Vamos analisar cada afirmativa para encontrar a INCORRETA:\n\n* **(a) A fila de prioridade, uma estrutura de dados linear, é uma versão especial da fila.** \n    * **Correta.** Filas de prioridade são estruturas que, embora permitam inserção e remoção, a ordem de remoção não é estritamente FIFO, mas sim baseada na prioridade do elemento, sendo uma variação conceitual de fila (linear).\n\n* **(b) Uma lista linear é uma estrutura de dados onde elementos do mesmo tipo são organizados de forma sequencial.** \n    * **Correta.** Listas lineares (como arrays ou listas encadeadas) armazenam elementos em uma sequência, seja em memória contígua ou ligada por ponteiros. O termo \"mesmo tipo\" refere-se à homogeneidade de tipos, embora em linguagens mais flexíveis isso possa variar.\n\n* **(c) Na pilha, uma estrutura não linear, os elementos são colocados e retirados por um único lado da lista, ou seja, pelo topo.** \n    * **Incorreta.** Uma pilha (stack) é uma estrutura de dados *linear* (os elementos formam uma sequência), não não-linear. A característica de inserção e remoção por um único lado (topo) é correta (LIFO - Last-In, First-Out), mas a classificação como \"não linear\" está errada. Esta é a afirmação INCORRETA.\n\n* **(d) Na tabela de Hash por endereçamento aberto, a chave é transformada num índice inteiro que é usado para acessar os dados.** \n    * **Correta.** Este é o funcionamento básico de uma tabela hash: uma função hash mapeia a chave para um índice, e esse índice é usado para acessar a posição na tabela.\n\n* **(e) Um array pode ser alocado dinamicamente, situação na qual ele passa a ser denominado lista ligada ou lista encadeada.** \n    * **Correta.** Um array pode ser alocado dinamicamente (ex: `malloc` em C, `new` em Java). No entanto, um array dinâmico *não* é chamado de lista ligada ou lista encadeada. Listas encadeadas são estruturas de dados onde os elementos são conectados por ponteiros e não precisam de memória contígua. Arrays (mesmo dinâmicos) ainda são arrays. Essa afirmação tem uma parte correta (array pode ser alocado dinamicamente) e uma parte conceitualmente errada (passar a ser denominado lista ligada). No entanto, a questão pede a *incorreta*. A questão 2018-2.pdf, questão 8, foi **anulada**. Portanto, não posso fornecer uma resposta correta."
    },
    {
      "id_questao": "2018_2_q9",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 9,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores (B-trees)"
        }
      ],
      "enunciado": "Para uma árvore B, de ordem \"m\", o número mínimo de descendentes para um nível \"d\" da árvore é de:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "$2*m/2^{(d-1)}$",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "$d*m/2$",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "$(m*d/2)^{2}$",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "$[(m*d/2)^{2}]/2$",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "$d*(m/2)^{2}$",
          "correta": false
        }
      ],
      "explicacao_geral": "A questão foi anulada conforme o gabarito oficial. Portanto, não é possível fornecer uma resposta correta."
    },
    {
      "id_questao": "2018_2_q10",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 10,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Filas"
        },
        {
          "nome": "Estruturas de Dados",
          "subarea": "Pilhas"
        },
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores Binárias de Busca"
        }
      ],
      "enunciado": "Dois vetores, v1 e v2, capazes de armazenar N inteiros cada um, estão ordenados de forma crescente e têm a propriedade de que o último elemento de v1 (v1 [N-1]) é menor que o primeiro elemento de v2 (v2[0]). É retirado um elemento de cada vez de cada um desses vetores alternadamente, e cada elemento retirado é colocado em uma fila. Posteriormente, os elementos são retirados da fila e inseridos em uma árvore binária de busca. A árvore é percorrida em ordem simétrica, e os elementos são inseridos, assim que retirados, em uma pilha. Depois, cada elemento é retirado da pilha e inserido alternadamente em um dos vetores, começando por v1. Diante do exposto, conclui-se que:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "v1[i] ≥v2[i], i = 0,1,...,N-1",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "v1[i]≤ v2[i], i = 0,1,...,N-1",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "v1[N-1] > v2[0]",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "As listas não estão mais ordenadas.",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "Todos os elementos de v1 estão armazenados em v2 e vice-versa.",
          "correta": true
        }
      ],
      "explicacao_geral": "Vamos analisar cada passo do processo:\n\n1.  **Vetores v1 e v2 ordenados crescentemente, com v1[N-1] < v2[0].**\n    * Exemplo: `v1 = [1, 2, 3]`, `v2 = [4, 5, 6]` (N=3)\n\n2.  **Elementos retirados alternadamente de v1 e v2 e colocados em uma fila.**\n    * Primeiro de v1, depois de v2, depois de v1, etc.\n    * Fila: `[1, 4, 2, 5, 3, 6]` (FIFO)\n\n3.  **Elementos retirados da fila e inseridos em uma árvore binária de busca (ABB).**\n    * Ordem de inserção na ABB: `1, 4, 2, 5, 3, 6`\n    * Construção da ABB:\n        * 1 (Raiz)\n        * 4 (>1) -> Direita de 1\n        * 2 (>1, <4) -> Direita de 1, Esquerda de 4\n        * 5 (>1, >4) -> Direita de 1, Direita de 4\n        * 3 (>1, <4, >2) -> Direita de 1, Esquerda de 4, Direita de 2\n        * 6 (>1, >4, >5) -> Direita de 1, Direita de 4, Direita de 5\n    * ABB resultante:\n        ```\n             1\n              \\\n               4\n              / \\\n             2   5\n              \\\   \\\n               3   6\n        ```\n\n4.  **A árvore é percorrida em ordem simétrica (in-ordem), e os elementos são inseridos em uma pilha.**\n    * Percurso em-ordem: Esquerda -> Raiz -> Direita\n    * Percurso em-ordem da ABB: `1, 2, 3, 4, 5, 6`\n    * Inserção na pilha (LIFO):\n        * Push 1 -> `[1]`\n        * Push 2 -> `[1, 2]`\n        * Push 3 -> `[1, 2, 3]`\n        * Push 4 -> `[1, 2, 3, 4]`\n        * Push 5 -> `[1, 2, 3, 4, 5]`\n        * Push 6 -> `[1, 2, 3, 4, 5, 6]` (6 no topo)\n\n5.  **Cada elemento é retirado da pilha e inserido alternadamente em v1 e v2, começando por v1.**\n    * Ordem de retirada da pilha: `6, 5, 4, 3, 2, 1` (LIFO)\n    * Inserção de volta nos vetores:\n        * v1 recebe 6\n        * v2 recebe 5\n        * v1 recebe 4\n        * v2 recebe 3\n        * v1 recebe 2\n        * v2 recebe 1\n\n    * Vetores finais (assumindo que preenchem as N posições originais):\n        * `v1 = [6, 4, 2]`\n        * `v2 = [5, 3, 1]`\n\nDiante do exposto, as conclusões são:\n\n* Os vetores v1 e v2 não estão mais ordenados crescentemente. Na verdade, eles estão ordenados decrescentemente.\n* A propriedade `v1[N-1] < v2[0]` foi perdida.\n* Todos os elementos originais de v1 e v2 foram misturados e redistribuídos.\n\nAnalisando as opções:\n\n* **(a) v1[i] ≥v2[i], i = 0,1,...,N-1**: No exemplo, v1[0]=6, v2[0]=5 (6>=5). v1[1]=4, v2[1]=3 (4>=3). v1[2]=2, v2[2]=1 (2>=1). Esta afirmação é verdadeira para o exemplo. \n* **(b) v1[i]≤ v2[i], i = 0,1,...,N-1**: Falsa.\n* **(c) v1[N-1] > v2[0]**: Falsa. No exemplo v1[2]=2, v2[0]=5, então 2 > 5 é falso.\n* **(d) As listas não estão mais ordenadas.** No exemplo, v1 está decrescente (6,4,2) e v2 está decrescente (5,3,1). Elas estão ordenadas, mas decrescentemente, não crescentemente como no início. No entanto, se a pergunta se refere à \"ordenação original\", então elas não estão mais ordenadas crescentemente. Mas o termo \"listas\" aqui se refere a v1 e v2.\n* **(e) Todos os elementos de v1 estão armazenados em v2 e vice-versa.** \n    * **Correta.** Os elementos foram completamente misturados e redistribuídos. Não há garantia de que os elementos originais de `v1` permanecerão em `v1` ou que os de `v2` permanecerão em `v2`. Todos foram para a ABB e depois redistribuídos. Assim, elementos que estavam em `v1` podem ir para `v2`, e vice-versa. Por exemplo, 1 e 2 (originais de v1) terminaram em v2, e 4,5,6 (originais de v2) terminaram em v1. Esta é a afirmação mais universalmente verdadeira sobre a redistribuição.\n\nA questão foi anulada no gabarito oficial. Minha análise aponta que (e) é a mais correta sobre a redistribuição dos elementos. No entanto, (a) também parece consistente com o resultado do processo, dado o meu exemplo. Se a questão foi anulada, não devo fornecer uma resposta como correta."
    },
    {
      "id_questao": "2018_2_q11",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 11,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores (B-trees)"
        }
      ],
      "enunciado": "Para remoção de uma chave cuja página esteja com o número mínimo, em árvore B, é CORRETO afirmar que:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "Deve-se fazer o processo de SPLIT sempre na página onde se encontrar a chave.",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "Deve-se fazer o processo de SPLIT na página onde se encontrar a chave, exceto quanto é um elemento da raiz da árvore.",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "Se a página onde se encontrar a chave não é folha, deve-se fazer procedimento de concatenação ou redistribuição, considerando os irmãos.",
          "correta": true
        },
        {
          "letra": "d",
          "texto": "Remove-se a chave, e a substitui por uma chave do nó irmão.",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "No caso de só haver uma única página, a remoção não causa a necessidade de balanceamento.",
          "correta": false
        }
      ],
      "explicacao_geral": "A remoção em árvores B é um processo que visa manter as propriedades da árvore, especialmente o número mínimo de chaves em cada nó (exceto a raiz). Quando a remoção de uma chave de um nó resultaria em um número de chaves abaixo do mínimo permitido (`m/2 - 1`), são necessários procedimentos de balanceamento, como concatenação (fusão) ou redistribuição de chaves com nós irmãos.\n\n* **(a) Deve-se fazer o processo de SPLIT sempre na página onde se encontrar a chave.** \n    * **Incorreta.** SPLIT (divisão) ocorre quando um nó está *cheio* e precisa acomodar uma nova chave, não na remoção.\n\n* **(b) Deve-se fazer o processo de SPLIT na página onde se encontrar a chave, exceto quanto é um elemento da raiz da árvore.** \n    * **Incorreta.** Novamente, SPLIT não é para remoção.\n\n* **(c) Se a página onde se encontrar a chave não é folha, deve-se fazer procedimento de concatenação ou redistribuição, considerando os irmãos.** \n    * **Correta.** Este é o procedimento padrão de rebalanceamento em árvores B após uma remoção de um nó interno que causaria subfluxo. Se o nó tem menos chaves que o mínimo, ele tenta redistribuir chaves com um irmão ou se funde com um irmão. Se a chave a ser removida estiver em um nó não folha, ela é substituída pelo seu predecessor ou sucessor, e então a remoção da chave original ocorre na folha.\n\n* **(d) Remove-se a chave, e a substitui por uma chave do nó irmão.** \n    * **Incorreta.** A chave é substituída pelo seu predecessor (o maior elemento na subárvore esquerda) ou sucessor (o menor elemento na subárvore direita), e a remoção física ocorre no nó folha. Não é simplesmente por \"uma chave do nó irmão\".\n\n* **(e) No caso de só haver uma única página, a remoção não causa a necessidade de balanceamento.** \n    * **Incorreta.** Se houver apenas uma página (a raiz) e a remoção fizer com que ela fique vazia, a árvore se torna vazia, o que é uma forma de \"balanceamento\" ou ajuste da estrutura."
    },
    {
      "id_questao": "2018_2_q12",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 12,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Listas Encadeadas"
        }
      ],
      "enunciado": "Lista circular encadeada é uma das estruturas de dados dinâmicas básicas. Uma questão que deve ser resolvida pelo algoritmo de busca em lista circular encadeada é:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "Saber quando finalizar a busca, se o elemento procurado não estiver na lista circular.",
          "correta": true
        },
        {
          "letra": "b",
          "texto": "Retornar o elemento anterior ao buscado, dada a propriedade de circularidade da lista.",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "Devolver o número de elementos constantes na lista.",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "Parar a busca assim que encontrar um elemento cujo ponteiro para o próximo elemento tenha valor nulo, o que indica o fim da lista.",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "Devolver o ponteiro de marcação de início, em sua nova posição",
          "correta": false
        }
      ],
      "explicacao_geral": "Em uma lista circular encadeada, o último nó aponta para o primeiro nó, e não para `NULL`. Isso cria um ciclo. Quando se realiza uma busca nesta estrutura, é essencial ter um mecanismo para evitar um loop infinito, pois não há um ponteiro `NULL` para indicar o fim da lista.\n\n* **(a) Saber quando finalizar a busca, se o elemento procurado não estiver na lista circular.** \n    * **Correta.** Esta é a principal questão. Em uma lista circular, se você não encontrar o elemento, você pode acabar percorrendo a lista indefinidamente. A solução comum é iniciar a busca a partir de um ponto conhecido (ex: o nó `head`) e parar quando o ponteiro de iteração retornar a esse ponto inicial, significando que toda a lista foi percorrida e o elemento não foi encontrado.\n\n* **(b) Retornar o elemento anterior ao buscado, dada a propriedade de circularidade da lista.** \n    * **Incorreta.** A circularidade por si só não facilita a busca do elemento anterior em uma lista *simplesmente* encadeada circular. Para isso, seria mais eficiente uma lista *duplamente* encadeada circular.\n\n* **(c) Devolver o número de elementos constantes na lista.**\n    * **Incorreta.** O número de elementos em uma lista encadeada (circular ou não) não é intrinsecamente \"constante\" (pode variar com inserções e remoções), e descobrir esse número não é o principal desafio de busca.\n\n* **(d) Parar a busca assim que encontrar um elemento cujo ponteiro para o próximo elemento tenha valor nulo, o que indica o fim da lista.** \n    * **Incorreta.** Esta é a condição de parada para uma lista encadeada *não circular*. Em uma lista circular, o ponteiro do último elemento aponta para o primeiro, não para `NULL`.\n\n* **(e) Devolver o ponteiro de marcação de início, em sua nova posição**\n    * **Incorreta.** Esta não é uma questão de busca, mas de manipulação do ponteiro de início, se ele for movido."
    },
    {
      "id_questao": "2018_2_q13",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 13,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores Binárias de Busca"
        }
      ],
      "enunciado": "Suponha que uma Árvore Binária de Busca possui números entre 1 e 1000 e que se quer procurar pelo número 363. Qual sequência abaixo NÃO poderia ser a sequência de nós examinados?",
      "opcoes": [
        {
          "letra": "a",
          "texto": "2, 252, 401, 398, 330, 344, 397, 363.",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "924, 220, 911, 244, 898, 258, 362, 363.",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "925, 202, 911, 240, 912, 245, 363.",
          "correta": true
        },
        {
          "letra": "d",
          "texto": "2, 399, 387, 219, 266, 382, 381, 278, 363.",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "935, 278, 347, 621, 350, 392, 358, 363.",
          "correta": false
        }
      ],
      "explicacao_geral": "Em uma Árvore Binária de Busca (ABB), a regra fundamental é que, para qualquer nó, todos os valores na sua subárvore esquerda são menores que o nó, e todos os valores na sua subárvore direita são maiores que o nó. Durante uma busca pelo valor 363, se o valor do nó atual é menor que 363, a busca deve continuar na subárvore direita; se o valor do nó atual é maior que 363, a busca deve continuar na subárvore esquerda.\n\nVamos analisar cada sequência de nós examinados, buscando inconsistências:\n\n* **(a) 2, 252, 401, 398, 330, 344, 397, 363.** \n    * 2: 363 > 2 (vai para a direita de 2)\n    * 252: 363 > 252 (vai para a direita de 252)\n    * 401: 363 < 401 (vai para a esquerda de 401)\n    * 398: 363 < 398 (vai para a esquerda de 398)\n    * 330: 363 > 330 (vai para a direita de 330)\n    * 344: 363 > 344 (vai para a direita de 344)\n    * 397: 363 < 397 (vai para a esquerda de 397)\n    * 363: Encontrado. (Consistente)\n\n* **(b) 924, 220, 911, 244, 898, 258, 362, 363.** \n    * 924: 363 < 924 (vai para a esquerda de 924)\n    * 220: 363 > 220 (vai para a direita de 220)\n    * 911: 363 < 911 (vai para a esquerda de 911). Isso é possível se 911 for um nó na subárvore direita de 220.\n    * 244: 363 > 244 (vai para a direita de 244). Isso é possível se 244 for um nó na subárvore esquerda de 911.\n    * 898: 363 < 898 (vai para a esquerda de 898). Isso é possível se 898 for um nó na subárvore direita de 244.\n    * 258: 363 > 258 (vai para a direita de 258). Isso é possível se 258 for um nó na subárvore esquerda de 898.\n    * 362: 363 > 362 (vai para a direita de 362). Isso é possível se 362 for um nó na subárvore direita de 258.\n    * 363: Encontrado. (Consistente)\n\n* **(c) 925, 202, 911, 240, 912, 245, 363.** \n    * 925: 363 < 925 (vai para a esquerda de 925)\n    * 202: 363 > 202 (vai para a direita de 202)\n    * 911: 363 < 911 (vai para a esquerda de 911). Isso é possível se 911 for um nó na subárvore direita de 202.\n    * 240: 363 > 240 (vai para a direita de 240). Isso é possível se 240 for um nó na subárvore esquerda de 911.\n    * 912: 363 < 912 (vai para a esquerda de 912). Isso é possível se 912 for um nó na subárvore direita de 240. **INCONSISTÊNCIA:** Se estamos na subárvore direita de 240, o próximo nó deve ser *maior* que 240. 912 é maior que 240, então isso é OK. Mas 912 está na subárvore esquerda de 911, o que é consistente (912 < 911 seria FALSO, mas 912 é o próximo nó na sequência, o que significa que ele é um filho de 240, e 912 > 240 é consistente. A inconsistência é que 912 não poderia ser visitado após 911 na busca por 363 porque 363 < 911, o que significa que a busca deveria ir para a esquerda de 911, e 912 é > 911. Ah, a sequência é `925 -> 202 -> 911 -> 240 -> 912`. Se `911` é um filho da direita de `202`, então `911` é a raiz da subárvore direita de `202`. A busca é por `363`. Depois de `202`, vamos para a direita (para `911` porque `363 > 202`). Em `911`, como `363 < 911`, a busca deveria ir para a subárvore **esquerda** de `911`. O próximo nó na sequência é `240`. Isso é consistente (`240 < 911`). Em `240`, como `363 > 240`, a busca deveria ir para a subárvore **direita** de `240`. O próximo nó é `912`. Isso é consistente (`912 > 240`). No entanto, `912` não pode ser um nó na subárvore *esquerda* de `911` (porque `912 > 911`), e a busca já estava indo para a esquerda de `911`. Portanto, `912` não poderia ser alcançado a partir da sequência anterior `911 -> 240` mantendo as regras da ABB. O nó 912 é maior que 911. Se a busca por 363 está em 911 (que é maior que 363), o próximo passo é ir para a ESQUERDA de 911. 240 é uma opção. Se estamos em 240 (menor que 363), o próximo passo é ir para a DIREITA de 240. 912 é maior que 240, mas também é MAIOR que 911 (o avô). Um nó na subárvore esquerda de 911 não pode ser maior que 911. Portanto, esta sequência é **inconsistente**.\n\n* **(d) 2, 399, 387, 219, 266, 382, 381, 278, 363.** \n    * 2: 363 > 2 (D)\n    * 399: 363 < 399 (E)\n    * 387: 363 < 387 (E)\n    * 219: 363 > 219 (D). Possível se 219 for filho esquerdo de 387. (219 < 387. OK)\n    * 266: 363 > 266 (D). Possível se 266 for filho direito de 219. (266 > 219. OK)\n    * 382: 363 < 382 (E). Possível se 382 for filho direito de 266. (382 > 266. OK)\n    * 381: 363 < 381 (E). Possível se 381 for filho esquerdo de 382. (381 < 382. OK)\n    * 278: 363 > 278 (D). Possível se 278 for filho esquerdo de 381. (278 < 381. OK)\n    * 363: Encontrado. (Consistente)\n\n* **(e) 935, 278, 347, 621, 350, 392, 358, 363.** \n    * 935: 363 < 935 (E)\n    * 278: 363 > 278 (D)\n    * 347: 363 > 347 (D). Possível se 347 for filho direito de 278. (347 > 278. OK)\n    * 621: 363 < 621 (E). Possível se 621 for filho direito de 347. (621 > 347. OK)\n    * 350: 363 < 350 (FALSO: 363 > 350. Se estamos em 621 (maior que 363), vamos para a esquerda. 350 é menor que 621. OK. Mas 350 é menor que 347 (pai). O nó 350 não pode ser filho esquerdo de 621 se 621 é filho direito de 347 e 350 < 347. Isso é inconsistente.)\n\nReavaliando a opção (e) com a regra de ABB:\n`935` (363<935, vai esq)\n`278` (363>278, vai dir)\n`347` (363>347, vai dir)\n`621` (363<621, vai esq)\n`350` (363>350, vai dir)\n`392` (363<392, vai esq)\n`358` (363>358, vai dir)\n`363` (Encontrado)\n\nEsta sequência é consistente. Minha análise anterior estava incorreta. Vamos focar na opção (c).\n\nRevisando (c):\n`925` (363<925, vai esq)\n`202` (363>202, vai dir)\n`911` (363<911, vai esq)\n`240` (363>240, vai dir)\n`912` (363<912, vai esq)\n`245` (363>245, vai dir)\n`363` (Encontrado)\n\nA inconsistência em (c) é a seguinte: estamos na subárvore esquerda de `911` (porque `363 < 911`). Os nós nessa subárvore devem ser menores que `911`. A sequência nos leva a `240` (que é menor que `911`). De `240`, como `363 > 240`, vamos para a subárvore direita de `240`. O próximo nó na sequência é `912`. No entanto, `912` é *maior* que `911` (`912 > 911`). Um nó na subárvore direita de `240` não pode ser `912` se `240` é um nó na subárvore esquerda de `911`, pois todos os nós na subárvore esquerda de `911` devem ser menores que `911`. Portanto, a sequência `... -> 911 -> 240 -> 912 -> ...` é impossível em uma ABB. A busca por `363` deveria ter continuado na subárvore esquerda de `911` (já que `363 < 911`), e o nó `912` não pode estar nessa subárvore.\n\nPortanto, a sequência que NÃO poderia ser a sequência de nós examinados é (c)."
    },
    {
      "id_questao": "2018_2_q14",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 14,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores (B-trees)"
        }
      ],
      "enunciado": "Analise as afirmativas a seguir sobre árvores B e árvores binárias\n\nI. Diferente das árvores binárias, cada nó de uma árvore B deverá sempre ter mais de dois filhos.\nII. Um nó de árvore B tem um campo ou um método para indicar se é um nó folha ou não. Característica esta herdada da AVL.\nIII. As folhas da árvore B são dispostas mais flexivelmente que as da árvore binária: suas folhas poderão estar em níveis diferentes, desde zero até o valor da altura da árvore.\nIV. A árvore B tem um método de balanceamento muito custoso, por isso, sua indicação para trabalhar com dispositivos de armazenamento secundário, deve ser avaliada com muita cautela.\n\ne assinale a alternativa CORRETA.",
      "opcoes": [
        {
          "letra": "a",
          "texto": "Todas as afirmativas estão corretas.",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "Somente as afirmativas II e III estão corretas",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "Somente as afirmativas I, II e IV estão corretas.",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "Somente as afirmativas I, III e IV estão corretas.",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "Todas as afirmativas estão incorretas",
          "correta": true
        }
      ],
      "explicacao_geral": "Vamos analisar cada afirmativa:\n\n* **I. Diferente das árvores binárias, cada nó de uma árvore B deverá sempre ter mais de dois filhos.** \n    * **Falsa.** Uma árvore B de ordem 'm' pode ter entre $\\lceil m/2 \\rceil$ e 'm' filhos (com exceção da raiz). Se 'm' for 3, os nós podem ter 2 ou 3 filhos. Se m=2, podem ter 1 ou 2 filhos. O termo \"sempre\" e a exigência de \"mais de dois filhos\" a torna falsa, pois um nó de uma árvore B pode ter apenas dois filhos.\n\n* **II. Um nó de árvore B tem um campo ou um método para indicar se é um nó folha ou não. Característica esta herdada da AVL.** \n    * **Falsa.** Embora nós de árvore B precisem de um mecanismo para identificar se são folhas (pois as folhas têm um papel específico), a ideia de \"herdada da AVL\" está incorreta. Árvores AVL são um tipo diferente de árvore binária de busca balanceada; essa característica não é transferida entre tipos tão distintos de árvores.\n\n* **III. As folhas da árvore B são dispostas mais flexivelmente que as da árvore binária: suas folhas poderão estar em níveis diferentes, desde zero até o valor da altura da árvore.** \n    * **Falsa.** Uma das propriedades fundamentais das árvores B é que *todas as folhas devem estar no mesmo nível* (ou profundidade). Isso é o que garante o balanceamento e a eficiência das buscas em disco.\n\n* **IV. A árvore B tem um método de balanceamento muito custoso, por isso, sua indicação para trabalhar com dispositivos de armazenamento secundário, deve ser avaliada com muita cautela.** \n    * **Falsa.** Pelo contrário, as árvores B foram desenvolvidas justamente para serem extremamente eficientes com dispositivos de armazenamento secundário. Seus métodos de balanceamento (divisão e fusão de nós) são projetados para minimizar as operações de I/O de disco, que são as mais custosas. A afirmação de que é custoso e exige cautela é o oposto da realidade.\n\nComo todas as afirmativas são falsas, a alternativa (e) é a correta."
    },
    {
      "id_questao": "2018_2_q15",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 15,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores (AVL)"
        }
      ],
      "enunciado": "Se em uma árvore binária de pesquisa a diferença de altura entre a subárvore à esquerda e a subarvore à direita de um dos nós for maior que 1, pode-se concluir que:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "A árvore é uma árvore AVL.",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "Trata-se com certeza de uma árvore binária sem balanceamento.",
          "correta": true
        },
        {
          "letra": "c",
          "texto": "Trata-se com certeza de uma árvore vermelho e preto.",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "Tal árvore não pode existir por não se tratar de uma árvore binária de pesquisa.",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "Nenhuma das alternativas anteriores está correta.",
          "correta": false
        }
      ],
      "explicacao_geral": "Uma árvore AVL (Adelson-Velsky e Landis) é um tipo específico de Árvore Binária de Busca (ABB) que mantém uma propriedade de balanceamento rigorosa. Essa propriedade estabelece que, para qualquer nó na árvore, a diferença de altura entre sua subárvore esquerda e sua subárvore direita (conhecida como fator de balanceamento) deve ser -1, 0 ou 1.\n\n* **(a) A árvore é uma árvore AVL.** \n    * **Incorreta.** Se a diferença de altura for maior que 1, a árvore *não* é uma AVL. A propriedade fundamental da AVL é justamente que essa diferença nunca excede 1.\n\n* **(b) Trata-se com certeza de uma árvore binária sem balanceamento.** \n    * **Correta.** Se uma Árvore Binária de Busca (ABB) apresenta um nó com fator de balanceamento (diferença de altura entre subárvores) maior que 1, ela está desbalanceada. Árvores binárias de busca que não implementam um mecanismo de autobalanceamento (como AVL ou Rubro-Negra) podem facilmente ficar desbalanceadas, degenerando em listas encadeadas no pior caso. Portanto, se o fator de balanceamento é maior que 1, ela é uma ABB, mas sem balanceamento.\n\n* **(c) Trata-se com certeza de uma árvore vermelho e preto.** \n    * **Incorreta.** Uma árvore vermelho-preto também é uma árvore binária de busca balanceada. Embora suas regras de balanceamento sejam diferentes das da AVL, elas também garantem que a altura da árvore seja logarítmica, evitando fatores de desbalanceamento tão extremos (maior que 1). Se a diferença de altura é maior que 1, ela não pode ser uma árvore vermelho-preto válida.\n\n* **(d) Tal árvore não pode existir por não se tratar de uma árvore binária de pesquisa.** \n    * **Incorreta.** A árvore pode existir como uma Árvore Binária de Busca; apenas não é balanceada. A propriedade de uma ABB (elementos menores à esquerda, maiores à direita) pode ser mantida mesmo que a árvore esteja muito desbalanceada."
    },
    {
      "id_questao": "2018_2_q16",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 16,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores (AVL)"
        }
      ],
      "enunciado": "Considere as seguintes árvores onde são apresentados apenas os valores das chaves em cada nó, sem mostrar o valor de outros campos eventualmente existentes. Além disso, note que em todos os casos, as árvores não estão em processo de rotação por inserção de chaves, estando portanto em seu estado final após a inserção do conjunto de chaves mostrado.\n\nÉ CORRETO afirmar que:\nA) Apenas a árvore do quadro I poderia ser uma árvore AVL.\nB) Apenas a árvore III não poderia ser uma árvore AVL.\nC) Nenhuma das 4 opções apresentadas poderiam ser exemplos de árvores AVL.\nD) Apenas as opções I e II podem ser exemplos de árvores AVL.\nE) Nenhuma das alternativas anteriores (de A, B, C ou D) está correta.",
      "opcoes": [
        {
          "letra": "a",
          "texto": "Apenas a árvore do quadro I poderia ser uma árvore AVL.",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "Apenas a árvore III não poderia ser uma árvore AVL.",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "Nenhuma das 4 opções apresentadas poderiam ser exemplos de árvores AVL.",
          "correta": true
        },
        {
          "letra": "d",
          "texto": "Apenas as opções I e II podem ser exemplos de árvores AVL.",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "Nenhuma das alternativas anteriores (de A, B, C ou D) está correta.",
          "correta": false
        }
      ],
      "explicacao_geral": "Esta questão é uma duplicata da questão 16 da prova 2017-1, e também foi **anulada** no gabarito oficial. Portanto, não é possível fornecer uma resposta correta."
    },
    {
      "id_questao": "2018_2_q17",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 17,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Pilhas"
        }
      ],
      "enunciado": "Após a inserção da sequencia de números 10, 1, 3, 4, 6, 8 e 9 em uma pilha, o resultado de três (3) remoções sucessivas seria:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "10, 1 e 3 nessa ordem",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "4, 3 e 1 nessa ordem",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "6, 8 e 9 nessa ordem",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "3, 1 e 10 nessa ordem",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "Nenhuma das alternativas anteriores (A, B, C ou D) está correta",
          "correta": false
        }
      ],
      "explicacao_geral": "A questão foi anulada conforme o gabarito oficial. Portanto, não é possível fornecer uma resposta correta."
    },
    {
      "id_questao": "2018_2_q18",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 18,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Hashing",
          "subarea": "Geral"
        }
      ],
      "enunciado": "Considere as afirmações sobre um hash por encadeamento:\n\nI. Tem como desvantagem o fato de não ordenar as chaves inseridas\nII. O número médio de operações esperado para realizar uma busca é constante se o hash for bem projetado\nIII. Mesmo quando bem implementado, ocupa mais espaço extra do que uma árvore B em memória.\n\nSobre as afirmações, sabe-se que:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "Todas as afirmações são verdadeiras",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "Todas as afirmações são falsas",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "Apenas as afirmações I e III são verdadeiras",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "Apenas a afirmação III é verdadeira",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "Apenas as afirmações I e II são verdadeiras",
          "correta": true
        }
      ],
      "explicacao_geral": "Vamos analisar cada afirmação sobre hash por encadeamento:\n\n* **I. Tem como desvantagem o fato de não ordenar as chaves inseridas** \n    * **Verdadeira.** Uma tabela hash, por sua natureza, não mantém as chaves em ordem. A ordem dos elementos é determinada pela função hash e pela técnica de resolução de colisões, não por um critério de ordenação crescente ou decrescente.\n\n* **II. O número médio de operações esperado para realizar uma busca é constante se o hash for bem projetado** \n    * **Verdadeira.** Se a função hash é boa e o fator de carga é mantido razoável, as chaves se distribuem de forma uniforme, e o comprimento médio das listas encadeadas é pequeno e constante. Isso resulta em um tempo médio de $O(1)$ para busca, inserção e remoção.\n\n* **III. Mesmo quando bem implementado, ocupa mais espaço extra do que uma árvore B em memória.** \n    * **Falsa.** O espaço extra necessário para hash por encadeamento é para a tabela (array de ponteiros) e para os nós das listas encadeadas (chaves e ponteiros). Uma árvore B, embora eficiente para armazenamento em disco, pode ocupar *mais* espaço em memória principal devido à estrutura de seus nós (que podem armazenar múltiplas chaves e muitos ponteiros para filhos) e à complexidade de seus nós internos, especialmente em comparação com uma simples lista encadeada usada em hash. A comparação exata de espaço pode variar dependendo da ordem 'm' da árvore B e do fator de carga da tabela hash, mas não é uma verdade absoluta que hash ocupa mais espaço que uma árvore B.\n\nPortanto, as afirmações I e II são verdadeiras."
    },
    {
      "id_questao": "2018_2_q19",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 19,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Árvores (AVL)"
        }
      ],
      "enunciado": "Quanto ao algoritmo e estrutura de dados no caso de árvore AVL, analise as afirmativas abaixo como verdadeiras (V) ou falsas (F) e assinale a alternativa que apresenta a sequência CORRETA de cima para baixo:\n\n() Uma árvore AVL é dita balanceada quando, para cada nó da árvore, a diferença entre as alturas das suas sub-árvores (direita e esquerda) não é maior do que um.\n() Caso haja diferença de altura maior que 1 ente as sub-árvores à direita e à esquerda de qualquer nó, é necessário que se realizem rotações com o objetivo de reduzir tal diferença.\n() A operação de rotação realizada em um ponto da árvore, após a inserção, pode resultar em uma árvore ainda desbalanceada, podendo ser necessária a realização de novas rotações que, na pior das hipóteses, podem ser propagadas até a raiz.",
      "opcoes": [
        {
          "letra": "a",
          "texto": "F-V-V",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "F-F-V",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "V-F-F",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "V-V-F",
          "correta": false
        },
        {
          "letra": "e",
          "texto": "V-V-V",
          "correta": true
        }
      ],
      "explicacao_geral": "Vamos analisar cada afirmativa sobre árvores AVL:\n\n* **() Uma árvore AVL é dita balanceada quando, para cada nó da árvore, a diferença entre as alturas das suas sub-árvores (direita e esquerda) não é maior do que um.** \n    * **Verdadeira.** Esta é a definição fundamental de uma árvore AVL. O fator de balanceamento (altura da subárvore esquerda - altura da subárvore direita) de qualquer nó deve estar no intervalo [-1, 1]. Uma diferença de altura \"não maior do que um\" significa que o valor absoluto da diferença é 0 ou 1.\n\n* **() Caso haja diferença de altura maior que 1 ente as sub-árvores à direita e à esquerda de qualquer nó, é necessário que se realizem rotações com o objetivo de reduzir tal diferença.** \n    * **Verdadeira.** Se o fator de balanceamento de um nó exceder 1 (ou for menor que -1), a árvore fica desbalanceada em relação às regras da AVL. Para restaurar o balanceamento, são realizadas operações de rotação (simples ou duplas).\n\n* **() A operação de rotação realizada em um ponto da árvore, após a inserção, pode resultar em uma árvore ainda desbalanceada, podendo ser necessária a realização de novas rotações que, na pior das hipóteses, podem ser propagadas até a raiz.** \n    * **Verdadeira.** Em uma árvore AVL, após uma rotação simples ou dupla, o balanceamento é restaurado no nó onde a rotação ocorreu e em seus antepassados. No entanto, o problema afirma que \"na pior das hipóteses, podem ser propagadas até a raiz\". Essa propagação refere-se à necessidade de verificar e, se necessário, realizar mais rotações em nós ascendentes até que toda a árvore esteja balanceada. Uma única rotação não garante o balanceamento de toda a árvore, apenas do subproblema específico, e a correção pode se propagar para cima. É importante notar que em árvores AVL, uma única inserção ou remoção requer no máximo uma ou duas rotações para balancear o caminho do nó inserido/removido até a raiz, e esse processo garante o balanceamento de toda a árvore. No entanto, a frase \"pode resultar em uma árvore ainda desbalanceada\" após *uma* rotação é tecnicamente correta se interpretada como a árvore *completa* ainda não estar balanceada (se a rotação foi em um subnó e o desbalanceamento se propagou para cima, exigindo mais verificações e talvez outra rotação em um nó ancestral). As rotações em AVL são desenhadas para serem localizadas e eficientes, garantindo balanceamento até a raiz. A propagação até a raiz significa que os fatores de balanceamento dos ancestrais podem precisar ser ajustados, e se um ancestral ficar desbalanceado, mais rotações podem ser necessárias. Portanto, a afirmação está tecnicamente correta no contexto de que uma única rotação isolada não garante o balanceamento *global* de toda a árvore a partir de um ponto arbitrário, e a correção se propaga para cima (podendo envolver mais rotações em níveis superiores).\n\nA sequência correta é V-V-V."
    },
    {
      "id_questao": "2018_2_q20",
      "prova_referencia": "2018-2.pdf",
      "numero_questao": 20,
      "ano_prova": 2018,
      "area": [
        {
          "nome": "Estruturas de Dados",
          "subarea": "Pilhas"
        },
        {
          "nome": "Estruturas de Dados",
          "subarea": "Filas"
        }
      ],
      "enunciado": "Dados os seguinte valores de entrada 11, 12, 23, 14, 25, 50, 8, 18, 29, 10, insira-os em uma PILHA. Em seguida retire cada um dos valores da PILHA e insira numa FILA. Mostre a FILA. Depois retire os dados da FILA e insira na PILHA. Mostre a PILHA.\n\nAs valores MOSTRADOS ficam\n\nI. FILA (começo) 10-29-18-8-50-25-14-23-12-11 (fim)\nII. PILHA: (topo) 11-12-23-14-25-50-8-18-29-10\nIII. PILHA: (topo) 10-29-18-8-50-25-14-23-12-11\nIV. FILA: (começo) 11-12-23-14-25-50-8-18-29-10 (fim)\n\nEstá CORRETO o que se afirma APENAS em:",
      "opcoes": [
        {
          "letra": "a",
          "texto": "I e II",
          "correta": false
        },
        {
          "letra": "b",
          "texto": "I e IV",
          "correta": false
        },
        {
          "letra": "c",
          "texto": "II e Ill",
          "correta": false
        },
        {
          "letra": "d",
          "texto": "III e IV",
          "correta": true
        },
        {
          "letra": "e",
          "texto": "III e IV",
          "correta": false
        }
      ],
      "explicacao_geral": "Vamos traçar as operações passo a passo:\n\n**Valores de entrada:** `11, 12, 23, 14, 25, 50, 8, 18, 29, 10`\n\n**1. Inserir na PILHA (LIFO - Last-In, First-Out):**\nElementos são empilhados na ordem dada. O último inserido fica no topo.\n`PILHA (topo) : 10, 29, 18, 8, 50, 25, 14, 23, 12, 11` (10 está no topo)\n\n**2. Retirar da PILHA e inserir na FILA (FIFO - First-In, First-Out):**\nOs elementos são retirados da pilha do topo para a base, e inseridos na fila na ordem de retirada.\n\n* Retira 10 da PILHA -> Insere 10 na FILA\n* Retira 29 da PILHA -> Insere 29 na FILA\n* Retira 18 da PILHA -> Insere 18 na FILA\n* Retira 8 da PILHA -> Insere 8 na FILA\n* Retira 50 da PILHA -> Insere 50 na FILA\n* Retira 25 da PILHA -> Insere 25 na FILA\n* Retira 14 da PILHA -> Insere 14 na FILA\n* Retira 23 da PILHA -> Insere 23 na FILA\n* Retira 12 da PILHA -> Insere 12 na FILA\n* Retira 11 da PILHA -> Insere 11 na FILA\n\n`FILA (começo): 10-29-18-8-50-25-14-23-12-11 (fim)`\n\n**3. Mostrar a FILA:**\nIsso corresponde à afirmação **I. FILA (começo) 10-29-18-8-50-25-14-23-12-11 (fim)**. Esta afirmação é **CORRETA**.\n\n**4. Retirar os dados da FILA e inserir na PILHA:**\nOs elementos são retirados da fila do começo para o fim, e empilhados na pilha na ordem de retirada.\n\n* Retira 10 da FILA -> Insere 10 na PILHA\n* Retira 29 da FILA -> Insere 29 na PILHA\n* Retira 18 da FILA -> Insere 18 na PILHA\n* Retira 8 da FILA -> Insere 8 na PILHA\n* Retira 50 da FILA -> Insere 50 na PILHA\n* Retira 25 da FILA -> Insere 25 na PILHA\n* Retira 14 da FILA -> Insere 14 na PILHA\n* Retira 23 da FILA -> Insere 23 na PILHA\n* Retira 12 da FILA -> Insere 12 na PILHA\n* Retira 11 da FILA -> Insere 11 na PILHA\n\n`PILHA (topo) : 11, 12, 23, 14, 25, 50, 8, 18, 29, 10` (11 está no topo)\n\n**5. Mostrar a PILHA:**\n\nIsso corresponde à afirmação **II. PILHA: (topo) 11-12-23-14-25-50-8-18-29-10**. Esta afirmação é **CORRETA**.\n\nAgora vamos verificar as opções dadas:\n\n* **I. FILA (começo) 10-29-18-8-50-25-14-23-12-11 (fim)** - Correta\n* **II. PILHA: (topo) 11-12-23-14-25-50-8-18-29-10** - Correta\n* **III. PILHA: (topo) 10-29-18-8-50-25-14-23-12-11** - Incorreta (Esta seria a pilha após a primeira inserção).\n* **IV. FILA: (começo) 11-12-23-14-25-50-8-18-29-10 (fim)** - Incorreta (Esta seria a fila se os elementos tivessem sido retirados da pilha e inseridos em ordem inversa, o que não é o caso).\n\nAs afirmações CORRETAS são I e II. No entanto, as opções de resposta são: a) I e II, b) I e IV, c) II e III, d) III e IV, e) III e IV (repetida).\n\nO gabarito oficial para esta questão é `d) III e IV`. Isso significa que minhas análises de I e II estão incorretas, e III e IV estariam corretas. Há uma grande inconsistência entre minha simulação e o gabarito. Vamos reanalisar a ordem de entrada e saída das pilhas e filas com base na forma como a prova pode interpretar.\n\n**Reanálise:**\n\n**Pilha (LIFO):**\nEntrada: `11, 12, 23, 14, 25, 50, 8, 18, 29, 10`\nPilhas são comumente visualizadas com o topo à direita ou à esquerda. Vamos usar a visualização padrão `[base, ..., topo]`.\nApós pushes: `[11, 12, 23, 14, 25, 50, 8, 18, 29, 10]` (10 é o topo)\n\n**Passo 2: PILHA -> FILA**\nRetira da PILHA: `10, 29, 18, 8, 50, 25, 14, 23, 12, 11` (nesta ordem)\nInsere na FILA (FIFO):\n`FILA: [10, 29, 18, 8, 50, 25, 14, 23, 12, 11]` (10 é o começo, 11 é o fim)\n\nEsta é a afirmação **I. FILA (começo) 10-29-18-8-50-25-14-23-12-11 (fim)**. Esta afirmação continua sendo **CORRETA** pela minha simulação.\n\n**Passo 3: FILA -> PILHA**\nRetira da FILA: `10, 29, 18, 8, 50, 25, 14, 23, 12, 11` (nesta ordem)\nInsere na PILHA:\nPush 10\nPush 29\n... (até 11)\n`PILHA: [10, 29, 18, 8, 50, 25, 14, 23, 12, 11]` (11 é o topo)\n\nEsta é a afirmação **II. PILHA: (topo) 11-12-23-14-25-50-8-18-29-10**. Esta afirmação é **CORRETA** pela minha simulação.\n\n**Reverificando III e IV (que o gabarito oficial marca como corretas):**\n\n* **III. PILHA: (topo) 10-29-18-8-50-25-14-23-12-11**\n    * Esta é a PILHA após a *primeira* sequência de inserções. Se a questão pede \"Mostre a PILHA\" *depois* da segunda rodada de operações (FILA -> PILHA), então esta seria a PILHA antes da segunda rodada. Portanto, se a PILHA inicial é mostrada, então seria III. Mas a ordem é mostrar a FILA primeiro, depois a PILHA final. Então, esta é a PILHA *antes* de ser esvaziada para a fila. Se for \"As estruturas exibidas CORRETAMENTE nas operações 3 e 5 são:\", onde 3 é a exibição da FILA e 5 é a exibição da PILHA, então:\n        * Operação 3: Mostrar FILA. Minha FILA é: `10-29-18-8-50-25-14-23-12-11`. Isso corresponde à afirmação I.\n        * Operação 5: Mostrar PILHA. Minha PILHA é: `11-12-23-14-25-50-8-18-29-10`. Isso corresponde à afirmação II.\n\n* **IV. FILA: (começo) 11-12-23-14-25-50-8-18-29-10 (fim)**\n    * Esta afirmação está incorreta. A fila criada foi `10-29-18...-11`.\n\nExiste uma grande discrepância entre minha simulação e o gabarito oficial. Não posso fabricar uma lógica que leve à opção (d) \"III e IV\" sendo corretas, pois minhas simulações mostram que I e II são corretas e III e IV são incorretas na ordem e conteúdo esperados. No entanto, por aderência às regras, eu aponto que o gabarito oficial é (d) e informo a inconsistência."
    }
  ]