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
      "enunciado": "Seja um vetor de inteiros com 400 elementos distintos ordenados em ordem crescente. Qual é o número máximo de iterações necessárias para encontrar um elemento qualquer desse vetor, caso seja utilizado o algoritmo de busca binária? ",
      "opcoes": [
        { "letra": "a", "texto": "9", "correta": true },
        { "letra": "b", "texto": "8", "correta": false },
        { "letra": "c", "texto": "7", "correta": false },
        { "letra": "d", "texto": "200", "correta": false },
        { "letra": "e", "texto": "400", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A busca binária tem uma complexidade de tempo de pior caso de $O(\\log_2 n)$, onde 'n' é o número de elementos no vetor. Para encontrar o número máximo de iterações, precisamos calcular o logaritmo de 400 na base 2 e arredondar para cima (teto), ou, de forma equivalente, encontrar o menor inteiro 'k' tal que $2^k \\ge 400$.\n\n**Cálculo:**\n- $2^8 = 256$\n- $2^9 = 512$\n\nComo 400 está entre 256 e 512, são necessárias no máximo 9 iterações para garantir que o espaço de busca seja reduzido a um único elemento.\n\n- **(a) Correto:** 9 é o menor inteiro 'k' para o qual $2^k \\ge 400$.\n- **(b, c) Incorreto:** 8 iterações cobririam apenas até 256 elementos, o que não é suficiente.\n- **(d, e) Incorreto:** 200 e 400 seriam respostas associadas a uma busca linear, não binária."
    },
    {
      "id_questao": "2016_2_q2",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 2,
      "ano_prova": 2016,
      "area": [
        { "nome": "Recursão", "subarea": "Técnicas recursivas e análise" }
      ],
      "enunciado": "Sobre as funções abaixo,\n\n| Função I | Função II |\n| :--- | :--- |\n| `int fatorial(int i) {` | `void fatorial() {` |\n| `if (i <= 1)` | `int fat[0]=1;` |\n| `return 1;` | `for (int j=1;;j++) {` |\n| `} else {` | `fat[j]=j*fat[j-1];` |\n| `fatorial(i-1);` | `}` |\n| `}` | `}` |\n| `}` | | \n\nAssinale a alternativa CORRETA: ",
      "opcoes": [
        { "letra": "a", "texto": "Somente a função I é recursiva.", "correta": true },
        { "letra": "b", "texto": "Ambas as funções são recursivas.", "correta": false },
        { "letra": "c", "texto": "Somente a função II é recursiva.", "correta": false },
        { "letra": "d", "texto": "A função I não é recursivo e a função II é orientada a objeto.", "correta": false },
        { "letra": "e", "texto": "Ambas as funções não são recursivas.", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Uma função é dita recursiva se ela chama a si mesma dentro de seu corpo.\n\n- **Função I:** A função `fatorial(int i)` contém a chamada `fatorial(i-1)`. Portanto, ela chama a si mesma e é recursiva. (Nota: há um erro no código, pois o resultado da chamada recursiva não é utilizado nem retornado, o que levaria a um comportamento incorreto, mas a característica de ser recursiva permanece).\n- **Função II:** A função `fatorial()` utiliza um laço de repetição (`for`) para calcular os fatoriais de forma iterativa, armazenando-os em um vetor. Ela não faz nenhuma chamada a si mesma.\n\n**Conclusão:** Apenas a Função I possui a característica de recursividade.\n\n- **(a) Correto:** Alinha-se com a análise de que apenas a primeira função é recursiva.\n- **(b, c, e) Incorreto:** Contradizem a análise das definições das funções.\n- **(d) Incorreto:** A função I é recursiva, e a função II não demonstra características de orientação a objetos, mas sim de programação imperativa/procedural."
    },
    {
      "id_questao": "2016_2_q3",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 3,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores" },
        { "nome": "Grafos", "subarea": "Propriedades" }
      ],
      "enunciado": "As seguintes afirmações sobre árvores estão corretas, com EXCEÇÃO de:",
      "opcoes": [
        { "letra": "a", "texto": "É um grafo conexo que admite ciclos.", "correta": true },
        { "letra": "b", "texto": "É um grafo conexo e há exatamente um caminho entre dois vértices quaisquer.", "correta": false },
        { "letra": "c", "texto": "Uma árvore com n vértices possui n-1 arestas.", "correta": false },
        { "letra": "d", "texto": "Toda árvore é um grafo, mas nem todo grafo é uma árvore.", "correta": false },
        { "letra": "e", "texto": "Uma união disjunta de árvores forma uma floresta", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A questão pede para identificar a afirmação incorreta sobre árvores. A definição fundamental de uma árvore em teoria dos grafos é ser um **grafo acíclico (sem ciclos) e conexo**.\n\n- **(a) Correto (é a exceção):** Esta afirmação diz que uma árvore \"admite ciclos\". Isso contradiz diretamente a definição de árvore, que deve ser acíclica. Portanto, esta é a afirmação incorreta.\n- **(b) Incorreto (é uma afirmação verdadeira):** Ser conexo e ter um único caminho entre quaisquer dois vértices são propriedades definidoras de uma árvore. \n- **(c) Incorreto (é uma afirmação verdadeira):** Uma propriedade fundamental de qualquer árvore com 'n' vértices é que ela possui exatamente 'n-1' arestas. \n- **(d) Incorreto (é uma afirmação verdadeira):** Árvores são um tipo específico de grafo, então toda árvore é um grafo. O inverso não é verdadeiro, pois um grafo pode ter ciclos, ser desconexo, etc.\n- **(e) Incorreto (é uma afirmação verdadeira):** A definição de uma floresta é um conjunto (ou união disjunta) de uma ou mais árvores. "
    },
    {
      "id_questao": "2016_2_q4",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 4,
      "ano_prova": 2016,
      "area": [
        { "nome": "Algoritmos de Ordenação", "subarea": "Selection Sort" }
      ],
      "enunciado": "Considere que o vetor abaixo será ordenado com o algoritmo de ordenação por seleção.\n`4 5 5 3 17 2 1 22`\nConsiderando-se que o vetor tem sua primeira posição contada como 0 (zero), a segunda troca de valores entre posições do vetor ocorrerá entre: ",
      "opcoes": [
        { "letra": "a", "texto": "Posição 0 e posição 2", "correta": false },
        { "letra": "b", "texto": "Posição 0 e posição 7", "correta": false },
        { "letra": "c", "texto": "Posição 1 e posição 5", "correta": false },
        { "letra": "d", "texto": "Posição 1 e posição 6", "correta": true },
        { "letra": "e", "texto": "Posição 3 e posição 5", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** O algoritmo de ordenação por seleção (Selection Sort) funciona da seguinte forma: para cada posição `i` do vetor, ele encontra o menor elemento no subvetor não ordenado (`v[i]` até `v[n-1]`) e o troca com o elemento da posição `i`.\n\n**Vetor Original:** `[4, 5, 5, 3, 17, 2, 1, 22]`\n\n- **1ª Iteração (i=0):**\n  - O algoritmo procura o menor elemento no intervalo `[0...7]`. O menor valor é `1`, localizado na posição `6`.\n  - **1ª Troca:** Troca `v[0]` (valor 4) com `v[6]` (valor 1).\n  - Vetor após a 1ª troca: `[1, 5, 5, 3, 17, 2, 4, 22]`\n\n- **2ª Iteração (i=1):**\n  - O algoritmo procura o menor elemento no intervalo `[1...7]`. O menor valor é `2`, localizado na posição `5`.\n  - **2ª Troca:** Troca `v[1]` (valor 5) com `v[5]` (valor 2).\n  - Vetor após a 2ª troca: `[1, 2, 5, 3, 17, 5, 4, 22]`\n\n**Análise das Opções e do Gabarito:**\nDe acordo com a execução padrão do algoritmo, a segunda troca ocorre entre as posições **1 e 5**, o que corresponderia à alternativa **(c)**. No entanto, o gabarito oficial da prova aponta a alternativa **(d)** como correta. Isso indica uma provável inconsistência no gabarito da prova original, pois a troca entre as posições 1 e 6 não ocorreria na segunda iteração do Selection Sort padrão. A explicação segue a execução correta do algoritmo, mas a alternativa correta é marcada conforme o gabarito."
    },
    {
      "id_questao": "2016_2_q5",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 5,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Filas" }
      ],
      "enunciado": "Considere uma estrutura de fila (disciplina FIFO) de números inteiros com duas operações: INSERE(n) e RETIRA(). Considere, também, que a representação do estado da fila em um instante qualquer é realizada listando os elementos, de forma que o primeiro elemento, da esquerda para a direita, é o mais antigo presente na fila. Se a fila começa vazia, a sequência:\n\n`INSERE(3) → RETIRA() → INSERE(2) → INSERE(5) → RETIRA() → RETIRA() → INSERE(1) → RETIRA() → INSERE(4)`\n\nO estado final da fila será: ",
      "opcoes": [
        { "letra": "a", "texto": "12345", "correta": false },
        { "letra": "b", "texto": "23145", "correta": false },
        { "letra": "c", "texto": "314", "correta": false },
        { "letra": "d", "texto": "45", "correta": false },
        { "letra": "e", "texto": "5", "correta": true }
      ],
      "explicacao_geral": "**Raciocínio:** A questão descreve uma sequência de operações em uma fila (FIFO - First-In, First-Out). Vamos rastrear o estado da fila (representada como uma lista, com o início à esquerda) após cada operação.\n\n**Rastreamento da Sequência:**\n1.  `Estado Inicial:` `[]`\n2.  `INSERE(3):` `[3]`\n3.  `RETIRA():`   `[]` (remove o 3)\n4.  `INSERE(2):` `[2]`\n5.  `INSERE(5):` `[2, 5]`\n6.  `RETIRA():`   `[5]` (remove o 2)\n\n**Análise e Inconsistência:**\nA execução da sequência de operações conforme fornecida na questão (`INSERE(3) → RETIRA() → ... → INSERE(4)`) resulta em um estado final de `[4]`. Nenhuma das alternativas corresponde a este resultado.\n\nEntretanto, para que a resposta correta seja **(e) 5**, a sequência de operações teria que parar exatamente após o sexto passo (`RETIRA()`, que remove o 2). Nesse ponto, a fila conteria apenas o elemento `5`. É provável que haja um erro no enunciado da questão ou nas alternativas fornecidas na prova original. A explicação considera o cenário que leva à resposta do gabarito."
    },
    {
      "id_questao": "2016_2_q6",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 6,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Listas Encadeadas" }
      ],
      "enunciado": "Marque a alternativa CORRETA. Uma lista duplamente encadeada tem como característica ser formada por elementos que: ",
      "opcoes": [
        { "letra": "a", "texto": "se concatenam de forma circular, de tal maneira que, ao chegar ao final da lista, o próximo elemento volta a ser o primeiro.", "correta": false },
        { "letra": "b", "texto": "contêm, além de um ou mais campos chave, mais um campo de ponteiro: o próximo, que permite o acesso ao elemento que sucede o atual (o próximo) presente na mesma lista.", "correta": false },
        { "letra": "c", "texto": "contêm, além de um campo chave, mais um campo de ponteiro: o próximo, que permite o acesso ao elemento que sucede o atual (o próximo) presente na mesma lista, de tal forma que os campos chave estão ordenados, ou seja, a chave do próximo é sempre maior ou igual à chave do atual elemento.", "correta": false },
        { "letra": "d", "texto": "contêm, além de um ou mais campos chave, dois outros campos de ponteiros: próximo e anterior, que permitem o acesso aos elementos adjacentes (próximo e anterior) presentes na mesma lista.", "correta": true },
        { "letra": "e", "texto": "Estão em posições adjacentes da memória, permitindo o acesso sequencial ao próximo e ao anterior de cada elemento pelo simples uso de um índice.", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A questão pede a definição correta de uma lista duplamente encadeada. Vamos analisar cada opção:\n\n- **(a) Incorreto:** Descreve uma **lista circular**. A característica principal é o último elemento apontar para o primeiro.\n- **(b) Incorreto:** Descreve uma **lista simplesmente encadeada (ou ligada)**. Cada elemento (nó) possui um dado e um único ponteiro para o próximo nó. \n- **(c) Incorreto:** Descreve uma **lista ordenada simplesmente encadeada**. Adiciona a restrição de ordem à lista simplesmente encadeada. \n- **(d) Correto:** Esta é a definição precisa de uma **lista duplamente encadeada**. Cada nó contém, além do dado, dois ponteiros: um para o elemento `próximo` e outro para o elemento `anterior`. Isso permite a travessia da lista em ambas as direções. \n- **(e) Incorreto:** Descreve a estrutura de um **array (vetor)**, onde os elementos são armazenados em posições contíguas de memória e acessados por um índice. "
    },
    {
      "id_questao": "2016_2_q7",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 7,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores (BST)" }
      ],
      "enunciado": "Considere a estrutura de dados Árvore Binária de Busca (ABB). Se inserirmos numa ABB inicialmente vazia os nós: 60, 10, 20, 80, 15, 75, 12 e 77, nessa ordem. Dado que a raiz encontra-se no nível 1, a altura da árvore e o nível do nó 15, respectivamente, serão: ",
      "opcoes": [
        { "letra": "a", "texto": "5 e 4", "correta": true },
        { "letra": "b", "texto": "5 e 5", "correta": false },
        { "letra": "c", "texto": "6 e 5", "correta": false },
        { "letra": "d", "texto": "6 e 4", "correta": false },
        { "letra": "e", "texto": "7 e 3", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Vamos construir a Árvore Binária de Busca (ABB) passo a passo e determinar os níveis e a altura. A raiz está no nível 1.\n\n**Construção da ABB:**\n1. `insere(60)`: A árvore é `[60]`. (Nível 1)\n2. `insere(10)`: 10 < 60, vai para a esquerda. (Nível 2)\n3. `insere(20)`: 20 < 60 (esq), 20 > 10 (dir). (Nível 3)\n4. `insere(80)`: 80 > 60, vai para a direita. (Nível 2)\n5. `insere(15)`: 15 < 60 (esq), 15 > 10 (dir), 15 < 20 (esq). **O nó 15 está no Nível 4**.\n6. `insere(75)`: 75 > 60 (dir), 75 < 80 (esq). (Nível 3)\n7. `insere(12)`: 12 < 60 (esq), 12 > 10 (dir), 12 < 20 (esq), 12 < 15 (esq). (Nível 5)\n8. `insere(77)`: 77 > 60 (dir), 77 < 80 (esq), 77 > 75 (dir). (Nível 4)\n\n**Estrutura Final:**\n- Nível 1: `60`\n- Nível 2: `10`, `80`\n- Nível 3: `20`, `75`\n- Nível 4: `15`, `77`\n- Nível 5: `12`\n\n**Cálculos:**\n- **Altura da árvore:** A altura é o maior nível de um nó. O nó mais profundo é o `12`, no nível 5. Portanto, a altura é **5**.\n- **Nível do nó 15:** Conforme a construção, o nó `15` está no nível **4**.\n\nO resultado é altura 5 e nível do nó 15 igual a 4."
    },
    {
      "id_questao": "2016_2_q8",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 8,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Pilhas" },
        { "nome": "Estruturas de Dados", "subarea": "Filas" }
      ],
      "enunciado": "Sabendo que as seguintes operações foram realizadas:\n1. Dados foram inseridos numa PILHA na seguinte ordem: 11, 12, 23, 14, 25, 50, 8, 18, 29, 10.\n2. Repetiu-se 10 vezes o par de operações: retirada da PILHA; inserção na FILA. \n3. A FILA foi exibida (impressa).\n4. Repetiu-se 10 vezes o par de operações: retirada da FILA; inserção na PILHA. \n5. A PILHA foi exibida (impressa).\n\nAs possíveis estruturas exibidas nas operações 3 e 5 são:\nI) FILA (começo) 10-29-18-8-50-25-14-23-12-11 (fim)\nII) PILHA: (topo) 11-12-23-14-25-50-8-18-29-10\nIII) PILHA: (topo) 10-29-18-8-50-25-14-23-12-11\nIV) FILA: (começo) 11-12-23-14-25-50-8-18-29-10 (fim)\nV) A PILHA mostrada fica com os elementos em ordem invertida dos dados de entrada\n\nAs estruturas exibidas CORRETAMENTE nas operações 3 e 5 são:",
      "opcoes": [
        { "letra": "a", "texto": "I e II", "correta": true },
        { "letra": "b", "texto": "I e V", "correta": false },
        { "letra": "c", "texto": "II e III", "correta": false },
        { "letra": "d", "texto": "III e IV", "correta": false },
        { "letra": "e", "texto": "III e V", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Vamos rastrear o conteúdo da Pilha (LIFO - Last-In, First-Out) e da Fila (FIFO - First-In, First-Out) em cada etapa.\n\n1.  **Inserção na Pilha:** Os dados `11, 12, ..., 10` são inseridos. O último a entrar, `10`, fica no topo.\n    -   Pilha inicial (Topo à esquerda): `[10, 29, 18, 8, 50, 25, 14, 23, 12, 11]`\n\n2.  **Mover da Pilha para a Fila:** Retira-se do topo da pilha e insere-se no final da fila.\n    -   `Pop(10)`, `Enqueue(10)` -> Fila: `[10]`\n    -   `Pop(29)`, `Enqueue(29)` -> Fila: `[10, 29]`\n    -   ...e assim por diante.\n    -   Fila final (Início à esquerda): `[10, 29, 18, 8, 50, 25, 14, 23, 12, 11]`\n\n3.  **Exibir Fila:** A fila exibida corresponde à **Estrutura I**. (`FILA (começo) 10-29-18-8-50-25-14-23-12-11 (fim)`)\n\n4.  **Mover da Fila para a Pilha:** Retira-se do início da fila e insere-se no topo da pilha.\n    -   `Dequeue(10)`, `Push(10)` -> Pilha: `[10]`\n    -   `Dequeue(29)`, `Push(29)` -> Pilha: `[29, 10]`\n    -   ...e assim por diante. O último a ser inserido na pilha será `11`.\n    -   Pilha final (Topo à esquerda): `[11, 12, 23, 14, 25, 50, 8, 18, 29, 10]`\n\n5.  **Exibir Pilha:** A pilha exibida corresponde à **Estrutura II**. (`PILHA: (topo) 11-12-23-14-25-50-8-18-29-10`)\n\n**Conclusão:** As estruturas corretas exibidas são a **I** e a **II**. A alternativa que corresponde a essa combinação é a **(a)**. \n\n*Nota: O gabarito oficial da prova indica a alternativa 'E' como correta. No entanto, com base na execução padrão das operações de pilha e fila, o resultado correto é a combinação das estruturas I e II, correspondendo à alternativa 'A'. Isso sugere uma inconsistência no gabarito original.*"
    },
    {
      "id_questao": "2016_2_q9",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 9,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Listas Encadeadas" }
      ],
      "enunciado": "Os registros em uma lista duplamente encadeada com 20 elementos possuem, cada um, três campos:\n1. próximo: um ponteiro para o próximo elemento da lista;\n2. valor: informação armazenada pelo elemento; \n3. anterior: um ponteiro para o elemento anterior da lista.\nSendo \"Z\" o décimo elemento desta lista e \"X\" e \"Y\" dois outros elementos que não pertencem à lista, sendo apontados, respectivamente, pelos seguintes ponteiros \"PZ\", \"PX\" e \"PY\", considere o trecho de código abaixo. \n\n`PY->próximo = PX;`\n`PX->anterior = PY;`\n`PX->próximo = PZ->próximo;`\n`PZ->próximo->anterior = PX;`\n`PZ->próximo = PY;`\n`PY->anterior = PZ;`\n\nEste trecho de código é usado para inserir na lista os elementos: ",
      "opcoes": [
        { "letra": "a", "texto": "Y, logo após o Z, e X, logo após o Y.", "correta": true },
        { "letra": "b", "texto": "Y, antes do Z, e X, logo após o Z", "correta": false },
        { "letra": "c", "texto": "Y, antes do Z, e X, antes do Y.", "correta": false },
        { "letra": "d", "texto": "X, logo após o Z, e Y, logo após o X.", "correta": false },
        { "letra": "e", "texto": "X, antes do Z, e Y, logo após o Z.", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Vamos analisar o trecho de código passo a passo para entender como os ponteiros são manipulados. Assumimos que `PZ` aponta para o nó `Z` e que `Z` tem um sucessor na lista, `Z_next` (`PZ->próximo`).\n\n1.  `PY->próximo = PX;`: O ponteiro `próximo` do nó `Y` aponta para o nó `X`.\n2.  `PX->anterior = PY;`: O ponteiro `anterior` do nó `X` aponta para o nó `Y`. (Neste ponto, temos uma sub-lista isolada `Y <-> X`).\n\n3.  `PX->próximo = PZ->próximo;`: O ponteiro `próximo` de `X` agora aponta para o nó que originalmente vinha depois de `Z` (`Z_next`). (Agora temos `Y <-> X -> Z_next`).\n\n4.  `PZ->próximo->anterior = PX;`: O ponteiro `anterior` do nó `Z_next` é atualizado para apontar para `X`. (Agora a ligação é `Y <-> X <-> Z_next`).\n\n5.  `PZ->próximo = PY;`: O ponteiro `próximo` de `Z` é atualizado para apontar para `Y`. (Agora temos `Z -> Y` e o resto da estrutura formada nos passos anteriores, resultando em `Z -> Y <-> X <-> Z_next`).\n\n6.  `PY->anterior = PZ;`: O ponteiro `anterior` de `Y` é atualizado para apontar para `Z`. (A ligação dupla final é `Z <-> Y`).\n\n**Conclusão:** Juntando tudo, a lista que antes era `... <-> Z <-> Z_next <-> ...` torna-se `... <-> Z <-> Y <-> X <-> Z_next <-> ...`. Isso significa que o nó `Y` foi inserido imediatamente após `Z`, e o nó `X` foi inserido imediatamente após `Y`."
    },
    {
      "id_questao": "2016_2_q10",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 10,
      "ano_prova": 2016,
      "area": [
        { "nome": "Hashing", "subarea": "Funções hash" },
        { "nome": "Hashing", "subarea": "Resolução de colisões" }
      ],
      "enunciado": "Considere as afirmações sobre um hash linear (sem encadeamento):\nI) É obrigatório o uso de várias funções de hash\nII) Não funciona com número de chaves maior que o tamanho da tabela hash\nIII) Quando acontece uma colisão, o valor a ser inserido é colocado no local no lugar do já existente.\nSobre as afirmações, sabe-se que: ",
      "opcoes": [
        { "letra": "a", "texto": "Todas são verdadeiras", "correta": false },
        { "letra": "b", "texto": "Todas são falsas", "correta": true },
        { "letra": "c", "texto": "Apenas I e III são verdadeiras", "correta": false },
        { "letra": "d", "texto": "Apenas II é verdadeira", "correta": false },
        { "letra": "e", "texto": "Apenas I e II são verdadeiras", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** O termo \"hash linear (sem encadeamento)\" é ambíguo. Pode se referir à **sondagem linear** (uma técnica de endereçamento aberto) ou ao **Hashing Linear** (uma técnica de hashing dinâmico que, paradoxalmente, usa encadeamento).\n\n**Interpretação 1: Sondagem Linear (Linear Probing)**\n-   I) Falsa. A sondagem linear usa uma única função hash. Em caso de colisão, ela simplesmente sonda a próxima posição sequencialmente (`h(k)+1, h(k)+2, ...`).\n-   II) Verdadeira. Em qualquer técnica de endereçamento aberto, como a sondagem linear, o número de chaves não pode exceder o tamanho da tabela, pois não há onde armazenar o excedente.\n-   III) Falsa. Em uma colisão, o novo valor é colocado na próxima posição livre, não no lugar do valor existente.\n*Nesta interpretação, a resposta seria que apenas a II é verdadeira, o que não corresponde ao gabarito.*\n\n**Interpretação 2: Hashing Linear (Esquema Dinâmico)**\nEsta técnica permite que a tabela hash cresça dinamicamente.\n-   I) Falsa. Utiliza uma família de funções hash ($h_0, h_1, ...$), mas apenas uma ou duas estão ativas em um dado momento, não \"várias\" no sentido de hashing duplo, por exemplo.\n-   II) Falsa. A principal vantagem do Hashing Linear é justamente funcionar bem com um número de chaves que excede o tamanho inicial da tabela, pois ela se expande conforme necessário.\n-   III) Falsa. O Hashing Linear usa encadeamento (listas ligadas) para tratar colisões, não sobrescreve valores.\n\n**Conclusão:** Sob a interpretação de Hashing Linear dinâmico, **todas as afirmações são falsas**. Essa conclusão alinha-se com o gabarito da prova. Portanto, é mais provável que a questão, apesar da nota \"sem encadeamento\", se referisse ao esquema de Hashing Linear."
    },
    {
      "id_questao": "2016_2_q11",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 11,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores" },
        { "nome": "Operações Fundamentais", "subarea": "Travessia" }
      ],
      "enunciado": "As sequências que representam os percursos da árvore da figura em pós-ordem e in-ordem são, respectivamente:\n\n![Árvore com raiz P, filhos Q e R. Q tem filhos S e T.](https://i.imgur.com/example.png)",
      "opcoes": [
        { "letra": "a", "texto": "PQST R e P Q S T R", "correta": false },
        { "letra": "b", "texto": "S T Q P R e S T Q R P", "correta": false },
        { "letra": "c", "texto": "S T Q R P e S Q T P R", "correta": true },
        { "letra": "d", "texto": "R P Q T S e S T Q R P", "correta": false },
        { "letra": "e", "texto": "P T Q R S e P Q S T R", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Vamos realizar os dois percursos (travessias) na árvore fornecida.\n**Árvore:** Raiz `P`, filho esquerdo `Q`, filho direito `R`. `Q` tem filho esquerdo `S` e filho direito `T`.\n\n1.  **Percurso em Pós-Ordem (Post-order):** A regra é visitar recursivamente a subárvore Esquerda, depois a subárvore Direita e, por último, a Raiz (E-D-R).\n    -   Começa em `P`. Vai para a esquerda (`Q`).\n    -   Em `Q`. Vai para a esquerda (`S`). Visita `S`.\n    -   Volta para `Q`. Vai para a direita (`T`). Visita `T`.\n    -   Volta para `Q`. Visita `Q`.\n    -   Volta para `P`. Vai para a direita (`R`). Visita `R`.\n    -   Volta para `P`. Visita `P`.\n    -   **Sequência Pós-Ordem: S, T, Q, R, P**\n\n2.  **Percurso em In-Ordem (In-order):** A regra é visitar recursivamente a subárvore Esquerda, depois a Raiz e, por último, a subárvore Direita (E-R-D).\n    -   Começa em `P`. Vai para a esquerda (`Q`).\n    -   Em `Q`. Vai para a esquerda (`S`). Visita `S`.\n    -   Volta para `Q`. Visita `Q`.\n    -   Vai para a direita (`T`). Visita `T`.\n    -   Volta para `P`. Visita `P`.\n    -   Vai para a direita (`R`). Visita `R`.\n    -   **Sequência In-Ordem: S, Q, T, P, R**\n\n**Conclusão:** As sequências corretas são `STQRP` (pós-ordem) e `SQTPR` (in-ordem), que correspondem à alternativa (c)."
    },
    {
      "id_questao": "2016_2_q12",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 12,
      "ano_prova": 2016,
      "area": [
        { "nome": "Hashing", "subarea": "Resolução de colisões" }
      ],
      "enunciado": "Considere as afirmações sobre hash linear e hash encadeado\nI) Hash encadeado funciona melhor em disco, pois as chaves sempre ficam próximas uma das outras, facilitando a varredura.\nII) Para uma tabela hash de tamanho M, tanto o hash linear quanto o hash encadeado podem receber uma quantidade de chaves C, onde C > M. \nIII) Quanto acontece uma colisão no hash encadeado, a chave é inserida na posição livre mais próxima da chave original.\nSobre as afirmações, sabe-se que: ",
      "opcoes": [
        { "letra": "a", "texto": "Todas são verdadeiras", "correta": false },
        { "letra": "b", "texto": "Todas são falsas", "correta": true },
        { "letra": "c", "texto": "Apenas I e III são verdadeiras", "correta": false },
        { "letra": "d", "texto": "Apenas II é verdadeira", "correta": false },
        { "letra": "e", "texto": "Apenas I e II são verdadeiras", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Vamos analisar cada afirmação, comparando \"hash linear\" (interpretado como sondagem linear/endereçamento aberto) com \"hash encadeado\" (separate chaining).\n\n-   **I) Incorreta.** Em armazenamento em disco, o hash por endereçamento aberto (como a sondagem linear) geralmente apresenta melhor localidade de dados, pois os elementos colididos são armazenados em posições próximas na mesma área de memória (o array). O hash encadeado pode levar a múltiplos acessos aleatórios ao disco se os nós da lista ligada estiverem espalhados pela memória/disco, o que é menos eficiente.\n\n-   **II) Incorreta.** A afirmação diz que *ambos* podem ter mais chaves que o tamanho da tabela ($C > M$). Isso é verdade para o hash encadeado, cujo fator de carga pode ser maior que 1. No entanto, é falso para o hash linear (endereçamento aberto), que não pode armazenar mais chaves do que o número de posições disponíveis na tabela. Como a afirmação exige que a condição seja válida para ambos, ela é falsa.\n\n-   **III) Incorreta.** A descrição \"a chave é inserida na posição livre mais próxima da chave original\" corresponde à **sondagem linear**, não ao hash encadeado. No hash encadeado, quando ocorre uma colisão, a nova chave é inserida na lista ligada associada àquela posição da tabela.\n\n**Conclusão:** Todas as três afirmações são falsas."
    },
    {
      "id_questao": "2016_2_q13",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 13,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores (AVL)" }
      ],
      "enunciado": "Em uma árvore AVL, todos os nós têm grau",
      "opcoes": [
        { "letra": "a", "texto": "0, 1 ou 2.", "correta": true },
        { "letra": "b", "texto": "divisível por 2.", "correta": false },
        { "letra": "c", "texto": "2", "correta": false },
        { "letra": "d", "texto": "1 e 2", "correta": false },
        { "letra": "e", "texto": "maior ou igual a 2.", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A questão pergunta sobre o grau dos nós em uma árvore AVL. O **grau** de um nó é o número de filhos que ele possui.\n\nUma árvore AVL é um tipo especial de **árvore binária** de busca. Por definição, em qualquer árvore binária (seja ela AVL, rubro-negra, ou uma ABB simples), cada nó pode ter no máximo dois filhos.\n\nAs possibilidades para o número de filhos (grau) de um nó são:\n-   **0 filhos:** O nó é uma folha (grau 0).\n-   **1 filho:** O nó tem apenas um descendente, seja à esquerda ou à direita (grau 1).\n-   **2 filhos:** O nó tem ambos os filhos, esquerdo e direito (grau 2).\n\nPortanto, qualquer nó em uma árvore AVL (ou qualquer árvore binária) deve ter grau 0, 1 ou 2."
    },
    {
      "id_questao": "2016_2_q14",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 14,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores (BST)" },
        { "nome": "Operações Fundamentais", "subarea": "Travessia" }
      ],
      "enunciado": "A estrutura de dados conhecida como Árvore Binária de Busca (ABB) encontra diversas aplicações em soluções práticas. Sobre esta estrutura é CORRETO afirmar: ",
      "opcoes": [
        { "letra": "a", "texto": "Uma ABB é um conjunto finito de nós que possui um nó especial, chamado raiz, do qual partem os nós de duas árvores binárias distintas: a da esquerda e a da direita.", "correta": false },
        { "letra": "b", "texto": "Quando os elementos a serem inseridos na ABB estão em ordem crescente, resulta em uma ABB com altura mínima.", "correta": false },
        { "letra": "c", "texto": "Para se utilizar uma ABB como método de ordenação, basta fazer o caminhamento ou percurso \"em-ordem\" e obter todos os elementos ordenados.", "correta": true },
        { "letra": "d", "texto": "Uma característica que confere à ABB grande agilidade na pesquisa e recuperação de elementos é que seus nós são sempre rearranjados de forma que a árvore resultante é sempre perfeitamente balanceada.", "correta": false },
        { "letra": "e", "texto": "ABB são um caso especial de listas encadeadas em que nenhum nó aponta para mais de 2 sucessores.", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A questão pede a afirmação correta sobre Árvores Binárias de Busca (ABB).\n\n- **(a) Incorreto:** A descrição está próxima da definição recursiva, mas a formulação pode ser imprecisa. O mais importante em uma ABB é a propriedade de busca, que não é mencionada aqui.\n- **(b) Incorreto:** Inserir elementos em ordem crescente (ou decrescente) em uma ABB resulta em uma árvore degenerada, similar a uma lista encadeada. Isso leva à **altura máxima**, não mínima, e ao pior desempenho para operações de busca. \n- **(c) Correto:** Uma das propriedades mais importantes e úteis da ABB é que um percurso **em-ordem (in-order)** visita os nós em ordem crescente de suas chaves. Portanto, realizar essa travessia e coletar os nós é uma forma de ordenar um conjunto de elementos. \n- **(d) Incorreto:** Esta afirmação descreve uma árvore autobalanceada (como AVL ou Rubro-Negra). Uma ABB padrão não garante balanceamento; ela pode se tornar desbalanceada dependendo da ordem de inserção. \n- **(e) Incorreto:** Comparar uma ABB a uma lista encadeada é uma analogia falha. Embora uma árvore degenerada se pareça com uma, a estrutura e suas operações são fundamentalmente diferentes. "
    },
    {
      "id_questao": "2016_2_q15",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 15,
      "ano_prova": 2016,
      "area": [
        { "nome": "Algoritmos de Ordenação", "subarea": "QuickSort" },
        { "nome": "Algoritmos de Ordenação", "subarea": "MergeSort" },
        { "nome": "Algoritmos de Ordenação", "subarea": "HeapSort" },
        { "nome": "Algoritmos de Ordenação", "subarea": "Insertion Sort" },
        { "nome": "Análise de Complexidade", "subarea": null }
      ],
      "enunciado": "Considere as afirmações a seguir sobre os algoritmos de ordenação Quicksort, MergeSort, HeapSort e InsertionSort\nI) São algoritmos estáveis: Insertion Sort, QuickSort e MergeSorte\nII) Pior caso tem número de operações quadrático (proporcional a uma constante vezes n²): InsertionSort, QuickSort\nIII) Utiliza um espaço extra proporcional a n² (proporcional ao quadrado do número de elementos): HeapSort,\nIV) A ordem das entradas é incapaz de influenciar o desempenho do algoritmo: InsertionSort, MergeSort\nMarque a alternativa que indica TODAS as afirmações INCORRETAS feitas: ",
      "opcoes": [
        { "letra": "a", "texto": "I e IV", "correta": false },
        { "letra": "b", "texto": "I, III e IV", "correta": true },
        { "letra": "c", "texto": "I, II e III", "correta": false },
        { "letra": "d", "texto": "I, II, III e IV", "correta": false },
        { "letra": "e", "texto": "II e IV", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A questão pede para identificar todas as afirmações incorretas.\n\n- **I) INCORRETA:** Um algoritmo de ordenação é **estável** se não altera a ordem relativa de elementos com chaves iguais. Insertion Sort e MergeSort são estáveis, mas **QuickSort não é estável**. Portanto, a afirmação está incorreta.\n\n- **II) CORRETA:** O pior caso de complexidade de tempo para o **InsertionSort** é $O(n^2)$ (quando o vetor está em ordem inversa). O pior caso para o **QuickSort** também é $O(n^2)$ (quando o pivô escolhido é consistentemente o menor ou maior elemento).\n\n- **III) INCORRETA:** O **HeapSort** é um algoritmo *in-place*, o que significa que ele requer apenas uma quantidade constante de espaço extra, ou seja, $O(1)$. Nenhum dos algoritmos de ordenação comuns utiliza espaço $O(n^2)$.\n\n- **IV) INCORRETA:** O desempenho do **InsertionSort** é altamente dependente da ordem de entrada (melhor caso $O(n)$, pior caso $O(n^2)$). O desempenho do **MergeSort** não é influenciado pela ordem dos dados, sendo sempre $\\Theta(n \\log n)$. Como a afirmação inclui o InsertionSort como sendo insensível à ordem de entrada, ela está incorreta.\n\n**Conclusão:** As afirmações incorretas são a I, a III e a IV."
    },
    {
      "id_questao": "2016_2_q16",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 16,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores (AVL)" }
      ],
      "enunciado": "Uma árvore AVL é uma árvore binária de busca com balanceamento automático que respeita algumas propriedades fundamentais. Como todas as árvores, ela tem uma propriedade chamada altura. Sabendo que a altura de uma folha é igual a um e que a altura de um nó pai é igual ao máximo das alturas de seus filhos mais um, qual estrutura NÃO pode representar uma árvore AVL? ",
      "opcoes": [
        { "letra": "a", "texto": "Uma árvore com três nós e altura igual a três", "correta": true },
        { "letra": "b", "texto": "Uma árvore com seis nós e altura igual a três", "correta": false },
        { "letra": "c", "texto": "Uma árvore com três nós e altura igual a dois", "correta": false },
        { "letra": "d", "texto": "Uma árvore vazia", "correta": false },
        { "letra": "e", "texto": "Uma árvore com dois nós", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Uma árvore AVL é uma árvore binária de busca onde, para cada nó, as alturas das duas subárvores filhas diferem em no máximo 1. A questão usa uma definição de altura onde uma folha tem altura 1 e a altura de um nó é `1 + max(altura_filho_esq, altura_filho_dir)`. A altura de um nó nulo seria 0.\n\nVamos analisar a opção (a):\n- **\"Uma árvore com três nós e altura igual a três\"**: Para ter altura 3 com apenas 3 nós, a árvore precisa ser uma linha reta (degenerada). Por exemplo, `Nó1 -> Nó2 -> Nó3`.\n- **Nó1 (Raiz):** Tem um filho (`Nó2`) e o outro é nulo. A altura da subárvore do `Nó2` é 2 (pois tem um filho, `Nó3`, que é uma folha de altura 1). A altura da subárvore nula é 0.\n- **Fator de Balanceamento da Raiz:** A diferença entre as alturas das subárvores é `|altura_esq - altura_dir| = |0 - 2| = 2`.\n- **Conclusão:** Um fator de balanceamento de 2 viola a propriedade da árvore AVL, que exige que a diferença seja no máximo 1. Portanto, esta estrutura não pode ser uma árvore AVL. \n\nAs outras opções são possíveis:\n- (b) Uma árvore com 6 nós e altura 3 é perfeitamente possível e pode ser balanceada.\n- (c) Uma árvore com 3 nós e altura 2 (uma raiz com dois filhos) é uma AVL válida (fator de balanceamento 0 na raiz).\n- (d) Uma árvore vazia é uma AVL válida por definição.\n- (e) Uma árvore com 2 nós (raiz e um filho) é uma AVL válida (fator de balanceamento 1 na raiz)."
    },
    {
      "id_questao": "2016_2_q17",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 17,
      "ano_prova": 2016,
      "area": [
        { "nome": "Algoritmos", "subarea": "Busca" },
        { "nome": "Estruturas de Dados", "subarea": "Listas Encadeadas" }
      ],
      "enunciado": "Considere os códigos de funções abaixo, assumindo que os mesmos são usados dentro de um programa e que os todos os cabeçalhos necessários são incluídos:\n\n| /*QUADRO I) função que retorna 1 se a chave de busca chave, passada como parâmetro, ocorre dentro de um vetor de inteiros ordenado e retorna 0 caso a chave não ocorra no vetor. O vetor tem tamanho determinado pelo parâmetro tm */ | /* QUADRO II) Conta ocorrências de uma chave na lista encadeada, retornando o total de ocorrências, zero caso a chave não ocorra */ |\n| :--- | :--- |\n| `int buscaChave(int v[], int chave, int tm) {` | `int ContaOcorrenciasChave(tipoNo *prim, int chave) {` |\n| ` while((tm>=0) && (v[tm]!=chave)) tm--;` | ` tipoNo *aux=prim;` |\n| ` if (tm>=0) return 0;` | ` int cont =0;` |\n| ` return 1;` | ` int x;` |\n| `}` | ` for (x =0;aux[x]!=NULL;x++) {` |\n| | `  if(aux[x].dado==chave)cont++;` |\n| | ` }` |\n| | ` return x;` |\n| | `}` |\n\nMarque a alternativa correta dentre as afirmações abaixo: ",
      "opcoes": [
        { "letra": "a", "texto": "Os dois códigos executam as tarefas propostas sem gerar qualquer tipo de erro de lógica ou de vazamento de memória", "correta": false },
        { "letra": "b", "texto": "Apenas o código I executa sem erros a tarefa proposta", "correta": false },
        { "letra": "c", "texto": "Apenas o código II executa sem erros a tarefa proposta", "correta": false },
        { "letra": "d", "texto": "Os dois códigos geram erros de vazamento de memória ou de falha de segmentação", "correta": false },
        { "letra": "e", "texto": "Nenhuma das alternativas anteriores", "correta": true }
      ],
      "explicacao_geral": "**Raciocínio:** Vamos analisar os erros em cada código.\n\n-   **Código I (buscaChave):**\n    -   **Erro de Lógica:** A descrição diz que a função deve retornar 1 se a chave for encontrada e 0 caso contrário. O código, no entanto, faz o oposto: `if (tm>=0) return 0;` (se encontrou, retorna 0) e `return 1;` (se não encontrou, retorna 1). O código não executa a tarefa proposta corretamente.\n    -   **Erro de Acesso:** O parâmetro `tm` parece ser o tamanho do vetor. O acesso `v[tm]` estaria fora dos limites (índices vão de 0 a `tm-1`). A busca deveria começar em `tm-1`. Assumindo que `tm` seja o último índice, a lógica ainda está invertida. Não gera falha de segmentação ou vazamento de memória, apenas resultado incorreto.\n\n-   **Código II (ContaOcorrenciasChave):**\n    -   **Erro de Sintaxe/Execução:** O código trata `aux`, um ponteiro para um nó de lista encadeada (`tipoNo *`), como se fosse um vetor (`aux[x]`). Isso é um erro fundamental que causaria erro de compilação ou falha de segmentação (segmentation fault) na execução. A travessia correta seria com `aux = aux->prox`.\n    -   **Erro de Lógica:** A função deveria retornar `cont` (o contador de ocorrências), mas ela retorna `x` (o contador do laço).\n\n**Análise das Alternativas:**\n-   (a), (b), (c) são falsas, pois ambos os códigos têm erros graves.\n-   (d) \"Os dois códigos geram erros...\". O Código II certamente causa falha de segmentação. O Código I, no entanto, não causa falha de segmentação nem vazamento de memória; seu erro é puramente lógico. Como a afirmação diz respeito a *ambos* os códigos, ela é tecnicamente falsa.\n-   (e) **Correto.** Como as alternativas (a), (b), (c) e (d) são falsas, a opção correta é \"Nenhuma das alternativas anteriores\"."
    },
    {
      "id_questao": "2016_2_q18",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 18,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores" }
      ],
      "enunciado": "Considere as definições a seguir.\nI) O nível do nó raiz de uma árvore é 1.\nII) O nível de qualquer nó subsequente é igual ao nível do seu nó pai mais 1.\nIII) A profundidade de uma árvore é igual ao maior nível encontrado dentre todos os seus nós\nPartindo-se das premissas acima, a menor e a maior quantidade de nós, respectivamente, que poderiam existir em uma árvore binária de profundidade 4 são: ",
      "opcoes": [
        { "letra": "a", "texto": "4 e 15", "correta": true },
        { "letra": "b", "texto": "3 e 15", "correta": false },
        { "letra": "c", "texto": "3 e 16", "correta": false },
        { "letra": "d", "texto": "4 e 16", "correta": false },
        { "letra": "e", "texto": "5 e 14", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A questão define profundidade como o maior nível, com a raiz estando no nível 1. Portanto, uma árvore de profundidade 4 tem nós nos níveis 1, 2, 3 e 4.\n\n-   **Menor Quantidade de Nós:** Para que uma árvore atinja a profundidade 4, ela precisa ter pelo menos um nó em cada um dos níveis de 1 a 4. A estrutura que minimiza o número de nós para uma dada profundidade é uma árvore degenerada (uma \"linha\" ou \"galho\").\n    -   Nível 1: 1 nó (a raiz)\n    -   Nível 2: 1 nó\n    -   Nível 3: 1 nó\n    -   Nível 4: 1 nó\n    -   Total mínimo: 1 + 1 + 1 + 1 = **4 nós**.\n\n-   **Maior Quantidade de Nós:** A estrutura que maximiza o número de nós para uma dada profundidade é uma árvore binária *completa* (ou *cheia*), onde cada nível está totalmente preenchido.\n    -   Nível 1: $2^{1-1} = 1$ nó\n    -   Nível 2: $2^{2-1} = 2$ nós\n    -   Nível 3: $2^{3-1} = 4$ nós\n    -   Nível 4: $2^{4-1} = 8$ nós\n    -   Total máximo: 1 + 2 + 4 + 8 = **15 nós**. (A fórmula geral para uma árvore completa de profundidade `p` é $2^p - 1$, então $2^4 - 1 = 15$).\n\n**Conclusão:** A menor quantidade de nós é 4 e a maior é 15."
    },
    {
      "id_questao": "2016_2_q19",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 19,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores" }
      ],
      "enunciado": "Uma árvore binária completa tem no $5^{o}$ nível uma quantidade de nós igual a",
      "opcoes": [
        { "letra": "a", "texto": "16", "correta": true },
        { "letra": "b", "texto": "15", "correta": false },
        { "letra": "c", "texto": "31", "correta": false },
        { "letra": "d", "texto": "64", "correta": false },
        { "letra": "e", "texto": "32", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** Em uma árvore binária completa (ou cheia), cada nível `k` está totalmente preenchido com o número máximo possível de nós.\n\nA quantidade de nós em um determinado nível `k` de uma árvore binária é dada pela fórmula $2^{(k-1)}$, assumindo que o nível da raiz é `k=1`.\n\n**Cálculo:**\nPara o $5^{o}$ nível, temos `k=5`.\nNúmero de nós = $2^{(5-1)} = 2^4 = 16$.\n\n- **(a) Correto:** O cálculo resulta em 16.\n- **(b, c) Incorreto:** 15 e 31 são os números totais de nós em árvores completas de altura 4 e 5, respectivamente, não o número de nós em um nível específico.\n- **(e) Incorreto:** 32 seria o número de nós no 6º nível ($2^5$)."
    },
    {
      "id_questao": "2016_2_q20",
      "prova_referencia": "2016-2.pdf",
      "numero_questao": 20,
      "ano_prova": 2016,
      "area": [
        { "nome": "Estruturas de Dados", "subarea": "Árvores (BST)" },
        { "nome": "Operações Fundamentais", "subarea": "Busca" }
      ],
      "enunciado": "Considere uma árvore binária de busca cujos nós armazenam números inteiros variando de 1 a 100, na qual se quer buscar o número 54. Qual das seguintes sequências representa uma sequência de busca válida dentro desta árvore? ",
      "opcoes": [
        { "letra": "a", "texto": "5, 18, 34, 60, 40, 52, 54", "correta": true },
        { "letra": "b", "texto": "25, 27, 28, 26, 60, 50, 58, 54", "correta": false },
        { "letra": "c", "texto": "37, 70, 32, <não encontrou>", "correta": false },
        { "letra": "d", "texto": "40, 70, 43, 44, 73, 57, 54", "correta": false },
        { "letra": "e", "texto": "Nenhuma das alternativas anteriores", "correta": false }
      ],
      "explicacao_geral": "**Raciocínio:** A regra de busca em uma Árvore Binária de Busca (ABB) é: partindo da raiz, se o valor procurado for menor que o nó atual, desce-se para a subárvore esquerda; se for maior, desce-se para a subárvore direita. Isso deve ser válido para toda a sequência.\n\nVamos analisar cada opção buscando por `54`:\n\n- **(a) 5, 18, 34, 60, 40, 52, 54:**\n  - `5`: `54 > 5` (direita)\n  - `18`: `54 > 18` (direita)\n  - `34`: `54 > 34` (direita)\n  - `60`: `54 < 60` (esquerda)\n  - `40`: `54 > 40` (direita)\n  - `52`: `54 > 52` (direita)\n  - `54`: Encontrado.\n  - **Esta sequência é válida**, pois em cada passo a regra da ABB é respeitada. Todos os nós após `60` são menores que `60`, e todos após `40` (na sub-árvore direita) são maiores que `40`. \n\n- **(b) 25, 27, 28, 26, ...:**\n  - `28`: `54 > 28` (direita). O próximo nó deveria ser maior que 28, mas é `26`. **Inválido**.\n\n- **(d) 40, 70, 43, 44, 73, ...:**\n  - `70`: `54 < 70` (esquerda).\n  - `43`: `54 > 43` (direita).\n  - `44`: `54 > 44` (direita). O próximo nó deveria ser maior que 44, mas ainda menor que 70 (pois estamos na subárvore esquerda de 70). O próximo nó é `73`, que é maior que 70. **Inválido**.\n\n- **(c) 37, 70, 32, <não encontrou>:** Embora o caminho `37 -> 70 -> 32` seja válido para buscar um valor entre 32 e 70, a busca por 54 continuaria a partir de 32 (indo para a direita). A terminação abrupta torna a sequência incompleta para justificar a não localização, mas o mais importante é que a opção (a) é comprovadamente válida."
    }
  ]