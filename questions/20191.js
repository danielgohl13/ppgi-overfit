[
  {
    "id_questao": "2019_1_q1",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 1,
    "ano_prova": 2019,
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
    "enunciado": "Suponha que você tenha a seguinte tabela hash implementada utilizando endereçamento aberto com sondagem linear (linear probing). A função hash que você está usando é uma função modular, h(x) = x MOD 9.\n\n**Tabela:**\n| 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |\n|---|---|---|---|---|---|---|---|---|\n| 9 | 18|   | 12| 3 | 14| 4 | 21|   |\n\nQual das ordens abaixo pode ser a ordem em que os elementos foram adicionados à hash? Assuma que a hash nunca tenha sido redimensionada e que nenhum elemento tenha sido excluído ainda. [cite: 2027, 2028, 2029, 2030, 2031, 2032]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "9, 14, 4, 18, 21, 3, 12",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "12, 3, 14, 18, 4, 9, 21",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "12, 14, 3, 9, 4, 18, 21",
        "correta": true
      },
      {
        "letra": "d",
        "texto": "9, 12, 14, 3, 21, 18, 4",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "18, 9, 12, 3, 14, 4, 21",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** A questão requer a verificação de qual sequência de inserções, usando a função hash `h(x) = x % 9` e resolução de colisão por sondagem linear, resulta na tabela fornecida. A sondagem linear testa as posições `h(x)`, `(h(x)+1)%9`, `(h(x)+2)%9`, e assim por diante, até encontrar uma posição livre.\n\n**Análise da Opção Correta (c):**\n- **Insere 12:** `h(12) = 12 % 9 = 3`. Posição 3 está livre. Tabela: `[... , 12, ...]`\n- **Insere 14:** `h(14) = 14 % 9 = 5`. Posição 5 está livre. Tabela: `[... , 12, , 14, ...]`\n- **Insere 3:** `h(3) = 3 % 9 = 3`. Colisão com 12. Tenta a posição `(3+1)%9 = 4`. Posição 4 está livre. Tabela: `[... , 12, 3, 14, ...]`\n- **Insere 9:** `h(9) = 9 % 9 = 0`. Posição 0 está livre. Tabela: `[9, ... , 12, 3, 14, ...]`\n- **Insere 4:** `h(4) = 4 % 9 = 4`. Colisão com 3. Tenta a posição `(4+1)%9 = 5`. Colisão com 14. Tenta a posição `(4+2)%9 = 6`. Posição 6 está livre. Tabela: `[9, ... , 12, 3, 14, 4, ...]`\n- **Insere 18:** `h(18) = 18 % 9 = 0`. Colisão com 9. Tenta a posição `(0+1)%9 = 1`. Posição 1 está livre. Tabela: `[9, 18, ... , 12, 3, 14, 4, ...]`\n- **Insere 21:** `h(21) = 21 % 9 = 3`. Colisão com 12. Tentativas: 4 (ocupada), 5 (ocupada), 6 (ocupada). Tenta a posição `(3+4)%9 = 7`. Posição 7 está livre. Tabela: `[9, 18, , 12, 3, 14, 4, 21, ]`\n\nEssa sequência resulta exatamente na tabela do enunciado.\n\n- **(a, b, d, e) Incorreto:** Outras sequências falham porque a inserção de um elemento em algum ponto levaria a uma configuração diferente da apresentada no enunciado, seja por colocar um número em uma posição diferente ou por contradizer a ocupação de uma célula."
  },
  {
    "id_questao": "2019_1_q2",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 2,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Árvores"
      },
      {
        "nome": "Árvores",
        "subarea": "AVL"
      }
    ],
    "enunciado": "Dado os seguintes elementos (10, 20, 15, 25, 30, 16, 18, 19), qual desenho representa uma árvore AVL, inicialmente vazia, que é preenchida com esses elementos, na ordem apresentada, e que tem as devidas rotações efetuadas? [cite: 2038]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Árvore (1)",
        "correta": true
      },
      {
        "letra": "b",
        "texto": "Árvore (2)",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "Árvore (3)",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Árvore (4)",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "Nenhuma das árvores desenhadas representa uma AVL",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** A construção de uma árvore AVL envolve a inserção de elementos como em uma árvore de busca binária, seguida da verificação do fator de balanceamento (FB) de cada nó. Se um nó fica com FB +2 ou -2, rotações são aplicadas para restaurar o balanceamento.\n\n**Passo a Passo da Construção:**\n1.  **Insere 10, 20:** A árvore fica `10 -> 20`. Balanceada.\n2.  **Insere 15:** O nó 10 fica desbalanceado (FB=-2). O caso é Direita-Esquerda (RL), exigindo uma rotação dupla: primeiro uma rotação à direita no nó 20, e depois uma rotação à esquerda no nó 10. A árvore resultante é `15` como raiz, com `10` à esquerda e `20` à direita.\n3.  **Insere 25, 30:** O nó 20 fica desbalanceado (FB=-2). O caso é Direita-Direita (RR), exigindo uma rotação simples à esquerda em 20. A sub-árvore direita da raiz 15 passa a ter `25` como raiz, com `20` à esquerda e `30` à direita.\n4.  **Insere 16:** A inserção de 16 desbalanceia o nó 25 (FB=+2) e, subsequentemente, o nó 15 (FB=-2). Uma série de rotações é necessária.\n    - Primeiro, uma rotação à direita no nó 25 (caso LL), fazendo `20` subir.\n    - Isso desbalanceia a raiz `15` (caso RR), que requer uma rotação à esquerda, fazendo `20` se tornar a nova raiz da árvore.\n    - A árvore fica com raiz `20`, filhos `15` e `25`. `10` e `16` são filhos de `15`, e `30` é filho de `25`.\n5.  **Insere 18:** Fica balanceada.\n6.  **Insere 19:** O nó 16 fica desbalanceado (FB=-2). O caso é Direita-Direita (RR), exigindo uma rotação simples à esquerda em 16. O nó `18` sobe.\n\nA configuração final corresponde exatamente à **Árvore (1)**."
  },
  {
    "id_questao": "2019_1_q3",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 3,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      }
    ],
    "enunciado": "Qual a alternativa que completa corretamente a seguinte frase: Um algoritmo que possui número de operações ________ em função de uma entrada de tamanho n é linear. [cite: 2087]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "$n^{3}+9$",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "$3n^{2}+3n+2$",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "6",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "$2n+1$",
        "correta": true
      },
      {
        "letra": "e",
        "texto": "$n^{2}+1$",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Um algoritmo com complexidade de tempo linear é aquele cujo tempo de execução cresce, no máximo, em proporção direta ao tamanho da entrada `n`. Em termos de notação Big O, isso é representado como $O(n)$.\n\n**Análise das Opções:**\n- **(a) $n^{3}+9$**: É uma função cúbica, $O(n^3)$.\n- **(b) $3n^{2}+3n+2$**: É uma função quadrática, $O(n^2)$.\n- **(c) 6**: É uma função constante, $O(1)$.\n- **(d) $2n+1$**: É uma função de primeiro grau. O termo dominante é `n`, portanto, sua complexidade é linear, $O(n)$.\n- **(e) $n^{2}+1$**: É uma função quadrática, $O(n^2)$.\n\nLogo, a única função que representa um crescimento linear é $2n+1$."
  },
  {
    "id_questao": "2019_1_q4",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 4,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Algoritmos de Ordenação",
        "subarea": null
      },
      {
        "nome": "Operações Fundamentais",
        "subarea": "Busca"
      }
    ],
    "enunciado": "Considere um vetor com 25 elementos (posição 0 até a posição 24) que representam os números primos entre 1 a 100, em ordem crescente (Ex: [2, 3, 5, 7, 11, 13, ..., 89, 97]). [cite_start]Empregando pesquisa binária, quantos itens do vetor precisam ser examinados antes de se concluir que o número 52 não está no vetor e, portanto, não é primo? [cite: 2093, 2094]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "12",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "7",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "5",
        "correta": true
      },
      {
        "letra": "d",
        "texto": "1",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "4",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** A busca binária em um vetor ordenado de tamanho `N` (25 elementos, índices 0 a 24) reduz o espaço de busca pela metade a cada comparação. Queremos encontrar o número de comparações para determinar que 52 não existe no vetor.\n\n**Passo a Passo da Busca por 52:**\n- **Vetor:** Primos de 1 a 100 (2, 3, 5, ..., 97)\n- **Tamanho:** 25 (índices 0 a 24)\n\n1.  **Comparação 1:**\n    - `inicio = 0`, `fim = 24`. `meio = (0 + 24) / 2 = 12`.\n    - `vetor[12]` é o 13º primo, que é 41.\n    - `52 > 41`, então a busca continua na metade direita: `inicio = meio + 1 = 13`.\n\n2.  **Comparação 2:**\n    - `inicio = 13`, `fim = 24`. `meio = (13 + 24) / 2 = 18`.\n    - `vetor[18]` é o 19º primo, que é 67.\n    - `52 < 67`, então a busca continua na metade esquerda: `fim = meio - 1 = 17`.\n\n3.  **Comparação 3:**\n    - `inicio = 13`, `fim = 17`. `meio = (13 + 17) / 2 = 15`.\n    - `vetor[15]` é o 16º primo, que é 53.\n    - `52 < 53`, então a busca continua na metade esquerda: `fim = meio - 1 = 14`.\n\n4.  **Comparação 4:**\n    - `inicio = 13`, `fim = 14`. `meio = (13 + 14) / 2 = 13`.\n    - `vetor[13]` é o 14º primo, que é 43.\n    - `52 > 43`, então a busca continua na metade direita: `inicio = meio + 1 = 14`.\n\n5.  **Comparação 5:**\n    - `inicio = 14`, `fim = 14`. `meio = (14 + 14) / 2 = 14`.\n    - `vetor[14]` é o 15º primo, que é 47.\n    - `52 > 47`, então `inicio = meio + 1 = 15`.\n\n- **Fim da busca:** Agora `inicio = 15` e `fim = 14`. A condição `inicio <= fim` se torna falsa, e o loop termina. O elemento não foi encontrado.\n\nForam necessárias **5 comparações**."
  },
  {
    "id_questao": "2019_1_q5",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 5,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Listas Encadeadas"
      },
      {
        "nome": "Recursão",
        "subarea": "Técnicas recursivas e análise"
      }
    ],
    "enunciado": "Considere o código da função abaixo:\n```c\nvoid fun1(struct node* head)\n{\n  if(head == NULL)\n    return;\n  fun1(head->next);\n  printf(\"%d \", head->data);\n}\n```\nO que essa função faz, dada uma lista encadeada de valores inteiros como entrada? [cite: 2100, 2101, 2102, 2103, 2104, 2105, 2106, 2107, 2108]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Imprime todos os nós da lista encadeada, começando com primeiro o nó da lista",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "Imprime todos os nós da lista encadeada, começando com o último nó da lista",
        "correta": true
      },
      {
        "letra": "c",
        "texto": "Imprime apenas os nós de posições pares da lista encadeada",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Imprime apenas os nós de posições impares da lista encadeada",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "Nenhuma das alternativas anteriores",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Esta é uma função recursiva. A chave para entendê-la é a ordem das operações dentro da função.\n\n1.  **Chamada Recursiva:** A linha `fun1(head->next);` é executada ANTES da linha `printf(\"%d \", head->data);`.\n2.  **Mecanismo:** Isso significa que a função se chamará repetidamente, avançando para o próximo nó (`head->next`) até atingir o final da lista (`head == NULL`).\n3.  **Impressão:** A impressão (`printf`) de um nó só ocorre DEPOIS que a chamada recursiva para o restante da lista retornou. A primeira chamada a retornar será a do último elemento. Em seguida, a do penúltimo, e assim por diante, até a chamada inicial (para o primeiro nó) imprimir seu valor por último.\n\n**Conclusão:** A função percorre a lista até o fim e só então começa a imprimir os valores na ordem inversa, da cauda para a cabeça. Portanto, ela imprime a lista começando pelo último nó."
  },
  {
    "id_questao": "2019_1_q6",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 6,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Hash Tables"
      },
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      }
    ],
    "enunciado": "Marque a alternativa CORRETA. [cite_start]Sobre um hash com encadeamento e com tabela de tamanho 100, pode-se dizer que: [cite: 2113]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Para casos em que se insere um número n muito grande de chaves, o tempo no caso médio de busca será $O(1)$",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "Para casos em que se insere um número n muito grande de chaves, o tempo de busca no pior caso será $O(1)$",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "Para casos em que se insere um número n muito grande de chaves, o tempo no caso médio de busca será $O(n)$",
        "correta": true
      },
      {
        "letra": "d",
        "texto": "Para casos em que se insere um número n muito grande de chaves, o tempo de busca no pior caso será $O(log n)$",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "Nenhuma das alternativas anteriores",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** A questão analisa a complexidade de busca em uma tabela hash com encadeamento de tamanho fixo (100) quando o número de chaves `n` é muito grande.\n\n- **Tamanho Fixo vs. `n` Grande:** Com um tamanho de tabela fixo em 100, à medida que `n` cresce, o número de colisões aumenta drasticamente. Como a resolução é por encadeamento, as listas encadeadas em cada posição da tabela se tornam muito longas.\n\n- **Pior Caso:** O pior caso ocorre quando todas as `n` chaves colidem na mesma posição da tabela, formando uma única lista encadeada de tamanho `n`. A busca, nesse cenário, se torna uma busca sequencial nessa lista, resultando em uma complexidade de $O(n)$.\n\n- **Caso Médio:** Quando `n` é muito maior que o tamanho da tabela `m` (aqui, `m=100`), o fator de carga `α = n/m` se torna muito grande. O tempo médio de busca é $O(1 + α)$. Como `α = n/100`, o tempo médio se torna $O(1 + n/100)$, que é dominado pelo termo `n`, resultando em uma complexidade de $O(n)$.\n\n**Análise das Opções:**\n- **(a) Incorreto:** O tempo médio só é $O(1)$ se o fator de carga `α` for mantido constante (ou seja, se a tabela fosse redimensionada). Com a tabela fixa e `n` grande, o tempo médio se degrada para $O(n)$.\n- **(b) Incorreto:** O pior caso é $O(n)$, não $O(1)$.\n- **(c) Correto:** Conforme explicado, com `n` muito grande e `m` fixo, o tempo médio de busca se torna $O(n)$.\n- **(d) Incorreto:** A complexidade $O(log n)$ é característica de estruturas de busca em árvore balanceada, não de uma lista encadeada resultante de colisões em hash."
  },
  {
    "id_questao": "2019_1_q7",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 7,
    "ano_prova": 2019,
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
    "enunciado": "A seguinte função em C usa uma lista simplesmente encadeada como argumento de entrada. [cite_start]Ela modifica a lista, movendo o último elemento para a frente da lista e retorna a lista modificada.\n```c\n  typedef struct node {\n    int value;\n    struct node *next;\n  } Node;\n\n  Node *move_to_front(Node *head) {\n    Node *p, *q;\n    if ((head == NULL || (head->next == NULL))\n      return head;\n    q = NULL; p = head;\n    while (p->next != NULL)\n    {\n      q = p;\n      p = p->next;\n    }\n    // Linha em branco para completar\n    return head;\n  }\n```\nCerta parte do código foi deixada em branco (linha tracejada). Escolha a alternativa CORRETA para substituir a linha em branco. [cite: 2129, 2130, 2131, 2132, 2133, 2134, 2135, 2136, 2137, 2138, 2139, 2140, 2141, 2142, 2143, 2144, 2145]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "q = NULL; p->next = head; head = p;",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "q->next = NULL; head = p; p->next = head;",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "head = p; p->next = q; q->next = NULL;",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "q->next = NULL; p->next = head; head = p;",
        "correta": true
      },
      {
        "letra": "e",
        "texto": "A função não precisa ser complementada.",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** O objetivo é mover o último nó para o início da lista. Ao final do loop `while`, o ponteiro `p` aponta para o último nó da lista, e o ponteiro `q` aponta para o penúltimo nó.\n\n**Lógica para Mover o Nó:**\n1.  **Desconectar o último nó:** O penúltimo nó (`q`) deve se tornar o novo último nó. Para isso, seu ponteiro `next` deve apontar para `NULL`. A instrução é: `q->next = NULL;`.\n2.  **Mover o antigo último nó para o início:** O antigo último nó (`p`) deve apontar para a antiga cabeça da lista (`head`). A instrução é: `p->next = head;`.\n3.  **Atualizar a cabeça da lista:** O ponteiro `head` da lista deve agora apontar para `p`, que é o novo primeiro elemento. A instrução é: `head = p;`.\n\n**Análise da Opção Correta (d):**\n- `q->next = NULL;` // O penúltimo nó agora é o último.\n- `p->next = head;` // O antigo último nó aponta para o antigo primeiro.\n- `head = p;` // A cabeça da lista é atualizada para o novo primeiro nó.\n\nEsta sequência de comandos executa a tarefa corretamente. O `return head;` no final da função retornará a nova cabeça da lista modificada.\n\n- **(a, b, c) Incorreto:** As outras opções realizam as operações na ordem errada ou atribuem ponteiros incorretamente, o que resultaria em uma lista corrompida (perdendo nós ou criando loops)."
  },
  {
    "id_questao": "2019_1_q8",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 8,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Algoritmos de Ordenação",
        "subarea": null
      },
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      }
    ],
    "enunciado": "Qual dos seguintes algoritmos apresenta tempo $O(n)$ quando ordenando um vetor com n elementos idênticos de texto? [cite: 2151, 2152]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Heapsort",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "Insertion sort",
        "correta": true
      },
      {
        "letra": "c",
        "texto": "Mergesort",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Quicksort",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "Nenhum dos algoritmos apresenta tempo $O(n)$ para essa entrada",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** A questão analisa o desempenho de diferentes algoritmos de ordenação no melhor caso, que para muitos deles ocorre quando o vetor já está ordenado ou contém elementos idênticos (que é um caso de vetor já ordenado).\n\n**Análise dos Algoritmos:**\n- **(b) Insertion Sort:** No Insertion Sort, para cada elemento, ele é comparado com os elementos anteriores até encontrar sua posição correta. Se todos os elementos são idênticos (ou já estão ordenados), o laço interno que faz as trocas nunca é executado ou executa apenas uma comparação. O algoritmo apenas percorre o vetor uma vez. Portanto, sua complexidade neste cenário (melhor caso) é $O(n)$.\n\n- **(a) Heapsort:** A complexidade do Heapsort é $O(n \\log n)$ em todos os casos (melhor, médio e pior), pois a estrutura do heap precisa ser mantida independentemente da ordem inicial dos dados.\n\n- **(c) Mergesort:** A complexidade do Mergesort é $O(n \\log n)$ em todos os casos, pois ele sempre divide o vetor em duas metades e depois as intercala, operações que não mudam sua complexidade baseada na ordem dos dados.\n\n- **(d) Quicksort:** Com elementos idênticos, a partição do Quicksort se torna ineficiente, pois não consegue dividir o vetor em subvetores de tamanhos equilibrados. Isso leva ao pior caso de complexidade, que é $O(n^2)$, e não $O(n)$."
  },
  {
    "id_questao": "2019_1_q9",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 9,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Árvores"
      },
      {
        "nome": "Árvores",
        "subarea": "Rubro-Negra"
      }
    ],
    "enunciado": "Qual das afirmações a seguir é VERDADEIRA sobre árvores rubro-negra (vermelho e preto)? [cite: 2158]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "O caminho do nó raiz até o nó folha mais distante não é maior que o dobro do número de nós do caminho da raiz para a folha mais próxima",
        "correta": true
      },
      {
        "letra": "b",
        "texto": "O caminho do nó raiz para um nó folha ou para um nó nulo deve conter o mesmo número de nós pretos e vermelhos.",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "A raiz pode ser vermelha",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Se um nó for vermelho, os nós filhos somente serão pretos. O inverso também acontece, ou seja, se um nó for preto, seus nós filhos somente serão vermelhos.",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "Nenhumas das afirmações é verdadeira",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** A questão avalia o conhecimento sobre as propriedades fundamentais de uma árvore Rubro-Negra.\n\n**Análise das Propriedades:**\n1.  **Propriedade da Raiz:** A raiz é sempre preta. (Isso torna a opção 'c' falsa).\n2.  **Propriedade Vermelha:** Se um nó é vermelho, seus filhos devem ser pretos. (Isso torna a segunda parte da opção 'd' falsa, pois o inverso não é verdadeiro; um nó preto pode ter filhos pretos ou vermelhos).\n3.  **Propriedade da Altura-Negra:** Todo caminho de um nó para qualquer uma de suas folhas descendentes contém o mesmo número de nós pretos. (Isso torna a opção 'b' falsa, pois a regra se aplica apenas aos nós pretos, não à soma de pretos e vermelhos).\n4.  **Balanceamento:** A propriedade da altura-negra e a propriedade vermelha garantem o balanceamento. O menor caminho possível de uma raiz a uma folha consiste apenas de nós pretos. O maior caminho possível alterna entre nós vermelhos e pretos. Por causa da regra de que um nó vermelho não pode ter filhos vermelhos, o caminho mais longo não pode ter mais que o dobro do comprimento do caminho mais curto. \n\n**Conclusão:**\n- **(a) Verdadeiro:** Esta é uma consequência direta das propriedades de balanceamento. Garante que a altura da árvore seja $O(\\log n)$.\n- **(b) Falso:** A regra é sobre o número de nós *pretos*, não a soma de pretos e vermelhos.\n- **(c) Falso:** A raiz é sempre preta.\n- **(d) Falso:** A primeira parte é verdadeira, mas o inverso é falso."
  },
  {
    "id_questao": "2019_1_q10",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 10,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Pilhas"
      },
      {
        "nome": "Recursão",
        "subarea": null
      }
    ],
    "enunciado": "Qual das seguintes estruturas de dados é mais usada para implementar recursão? [cite: 2173]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Heap binário",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "Hash table",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "Fila",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Árvore de busca",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "Pilha",
        "correta": true
      }
    ],
    "explicacao_geral": "**Raciocínio:** A recursão é um processo no qual uma função chama a si mesma. Para gerenciar essas chamadas de função aninhadas, o sistema precisa manter o controle do estado de cada chamada (variáveis locais, parâmetros e o endereço de retorno).\n\n- **Pilha de Chamadas (Call Stack):** A estrutura de dados usada internamente pela maioria das linguagens de programação para gerenciar chamadas de função é a **pilha**. Cada vez que uma função é chamada (incluindo uma chamada recursiva), um novo \"quadro\" (stack frame) contendo suas informações é empilhado. Quando a função retorna, seu quadro é desempilhado.\n\n- **LIFO (Last-In, First-Out):** A natureza LIFO da pilha é perfeita para a recursão, pois a última função chamada é a primeira que precisa ser concluída e retornar.\n\n- **Outras Estruturas:**\n  - **Fila (Queue):** Usa o princípio FIFO (First-In, First-Out), inadequado para o aninhamento de chamadas de função.\n  - **Heap, Hash Table, Árvore de Busca:** São estruturas para organizar dados, mas não para gerenciar a mecânica de execução de chamadas de função."
  },
  {
    "id_questao": "2019_1_q12",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 12,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Árvores"
      },
      {
        "nome": "Árvores",
        "subarea": "AVL"
      }
    ],
    "enunciado": "Quais das seguintes árvores abaixo respeita as regras básicas de balanceamento de árvores AVL? [cite: 2188, 2189, 2190, 2191, 2192, 2193, 2198, 2199, 2200, 2201, 2202, 2203, 2204, 2205, 2206, 2207, 2208, 2209, 2210, 2211, 2212, 2213, 2214]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Somente B",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "A, B e C",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "B e C",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "A e C",
        "correta": true
      },
      {
        "letra": "e",
        "texto": "Nenhuma das árvores é AVL",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** Uma árvore é AVL se, para cada um de seus nós, a diferença absoluta entre a altura da sub-árvore esquerda e a altura da sub-árvore direita (fator de balanceamento) for no máximo 1. Além disso, ela deve ser uma árvore de busca binária válida.\n\n- **Árvore (A):**\n  - É uma árvore de busca binária válida.\n  - **Nó 100:** Altura da sub-árvore esquerda (50) é 1. Altura da sub-árvore direita (200) é 1. FB = 1 - 1 = 0. **OK.**\n  - **Nós 50 e 200:** Têm filhos folhas. FB = 0 - 0 = 0. **OK.**\n  - **Nós 10 e 300:** São folhas. FB = 0. **OK.**\n  - **Conclusão: A é uma árvore AVL.**\n\n- **Árvore (B):**\n  - É uma árvore de busca binária válida.\n  - **Nó 10:** Tem um filho à esquerda (5), sua altura é 1. A sub-árvore direita é nula (altura -1). FB = 1 - (-1) = 2. **Desbalanceada.**\n  - **Conclusão: B NÃO é uma árvore AVL.**\n\n- **Árvore (C):**\n  - É uma árvore de busca binária válida.\n  - **Nó 100:** Altura da sub-árvore esquerda (50) é 3. Altura da sub-árvore direita (200) é 2. FB = 3 - 2 = 1. **OK.**\n  - **Nó 50:** Altura da sub-árvore esquerda (10) é 2. Altura da sub-árvore direita (60) é 0. FB = 2 - 0 = 2. **Desbalanceada.**\n  - **Revisão do cálculo de altura:** (Altura da folha = 0)\n    - h(5)=0, h(10)=1, h(60)=0, h(50)=2. FB(50) = h(10) - h(60) = 1-0=1. OK.\n    - h(180)=0, h(400)=0, h(300)=1, h(150)=0, h(200)=2. FB(200) = h(150) - h(300) = 0-1=-1. OK.\n    - h(100): h(esq)=h(50)=2, h(dir)=h(200)=2. FB(100) = 2-2 = 0. OK.\n    - **Revisando todos os nós:** Todos os nós têm FB de 0, 1 ou -1. **Conclusão: C é uma árvore AVL.**\n\nPortanto, as árvores A e C são AVL."
  },
  {
    "id_questao": "2019_1_q15",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 15,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Árvores"
      },
      {
        "nome": "Árvores",
        "subarea": "AVL"
      },
      {
        "nome": "Árvores",
        "subarea": "Rubro-Negra"
      }
    ],
    "enunciado": "Comparando árvores AVL e rubro-negras, qual das seguintes afirmações é VERDADEIRA: [cite: 2237]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "As árvores AVL tendem a ter altura menor em comparação com as árvores rubro-negras, mas podem causar mais rotações during operações de inserção e exclusão.",
        "correta": true
      },
      {
        "letra": "b",
        "texto": "As alturas das árvores AVL e rubro-negras são as mesmas, mas as árvores AVL podem causar mais rotações durante a inserção e exclusão.",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "As árvores rubro-negras tendem a ter altura menor em comparação com as árvores AVL, mas podem causar mais rotações during a inserção e exclusão.",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "As alturas das árvores AVL e rubro-negras são as mesmas, mas as árvores rubro-negras podem causar mais rotações durante a inserção e exclusão.",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "Todas as afirmações anteriores são falsas",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** A comparação entre árvores AVL e Rubro-Negras (RB) envolve um trade-off entre o quão estritamente balanceadas elas são e o custo das operações de manutenção (inserção/deleção).\n\n- **Balanceamento e Altura:** Árvores AVL possuem critérios de balanceamento mais rígidos (fator de balanceamento de `|h_esq - h_dir| <= 1`). Árvores RB são mais flexíveis. Essa rigidez extra faz com que as árvores AVL sejam, em geral, mais \"achatadas\" e tenham uma altura ligeiramente menor ou igual à de uma árvore RB com os mesmos dados. Buscas em AVL tendem a ser um pouco mais rápidas por isso.\n\n- **Rotações (Inserção/Deleção):** Para manter seu balanço estrito, as árvores AVL precisam realizar rotações com mais frequência. Uma única inserção/deleção em uma árvore AVL pode causar até $O(\\log n)$ rotações. Em uma árvore RB, as operações de rebalanceamento (rotações e recolorações) são mais eficientes, com um máximo de 2 a 3 rotações por inserção/deleção.\n\n**Conclusão:**\n- **(a) Verdadeiro:** Descreve corretamente o trade-off: AVL é mais estritamente balanceada (altura menor), resultando em buscas mais rápidas, mas ao custo de mais rotações para inserção e exclusão. As árvores RB são mais rápidas para modificações.\n- **(b, c, d) Falso:** Contradizem as características conhecidas de ambas as estruturas."
  },
  {
    "id_questao": "2019_1_q17",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 17,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      },
      {
        "nome": "Algoritmos de Ordenação",
        "subarea": "MergeSort"
      }
    ],
    "enunciado": "Suponha que, no pior caso, um algoritmo Merge Sort leve 30 segundos para ordenar uma entrada de tamanho 64. Qual das opções a seguir se aproxima mais do tamanho máximo de entrada de um problema que pode ser resolvido em 6 minutos? [cite: 2249]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "256",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "1024",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "512",
        "correta": true
      },
      {
        "letra": "d",
        "texto": "2048",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "4096",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** A complexidade do Merge Sort é $O(n \\log n)$. O tempo de execução T é proporcional a $n \\log n$, ou seja, $T = c \\cdot n \\log n$, onde `c` é uma constante.\n\n**1. Encontrar a constante `c`:**\n- Temos $T_1 = 30$ segundos para $n_1 = 64$.\n- $30 = c \\cdot 64 \\cdot \\log_2(64)$\n- Como $\\log_2(64) = 6$ (pois $2^6 = 64$):\n- $30 = c \\cdot 64 \\cdot 6$\n- $c = 30 / (64 \\cdot 6) = 30 / 384 = 5 / 64$.\n\n**2. Calcular o novo tamanho `n_2`:**\n- O novo tempo é $T_2 = 6$ minutos $= 6 \\cdot 60 = 360$ segundos.\n- $360 = c \\cdot n_2 \\cdot \\log_2(n_2)$\n- Substituindo `c`: $360 = (5/64) \\cdot n_2 \\cdot \\log_2(n_2)$\n- $n_2 \\cdot \\log_2(n_2) = 360 \\cdot 64 / 5 = 72 \\cdot 64 = 4608$.\n\n**3. Testar as opções para encontrar $n_2$ tal que $n_2 \\cdot \\log_2(n_2) \\approx 4608$:**\n- **(a) n = 256:** $256 \\cdot \\log_2(256) = 256 \\cdot 8 = 2048$ (muito baixo).\n- **(c) n = 512:** $512 \\cdot \\log_2(512) = 512 \\cdot 9 = 4608$ (**corresponde exatamente**).\n- **(b) n = 1024:** $1024 \\cdot \\log_2(1024) = 1024 \\cdot 10 = 10240$ (muito alto).\n\nO tamanho máximo de entrada que pode ser resolvido em 6 minutos é aproximadamente 512."
  },
  {
    "id_questao": "2019_1_q18",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 18,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Algoritmos de Ordenação",
        "subarea": "Insertion Sort"
      }
    ],
    "enunciado": "Considere que os seguintes elementos {5, 4, 3, 2, 1} foram inseridos nesta ordem em um vetor. Em seguida, você aplicou o algoritmo Insertion Sort nele. [cite_start]Qual é a sequência de passos feitos durante o uso do Insertion Sort neste vetor? [cite: 2255, 2256]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "4 5 3 2 1 / 3 4 5 2 1 / 2 3 4 5 1 / 1 2 3 4 5",
        "correta": true
      },
      {
        "letra": "b",
        "texto": "5 4 3 1 2 / 5 4 1 2 3 / 5 1 2 3 4 / 1 2 3 4 5",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "4 3 2 1 5 / 3 2 1 5 4 / 2 1 5 4 3 / 1 5 4 3 2",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "4 5 3 2 1 / 2 3 4 5 1 / 3 4 5 2 1 / 1 2 3 4 5",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "4 5 3 1 2 / 2 3 4 5 1 / 3 4 5 2 1 / 1 2 3 4 5",
        "correta": false
      }
    ],
    "explicacao_geral": "**Raciocínio:** O Insertion Sort percorre o vetor a partir do segundo elemento. Para cada elemento `i`, ele o compara com os elementos anteriores (`j = i-1, i-2, ...`) e desloca os elementos maiores para a direita para abrir espaço e inserir o elemento `i` em sua posição correta na parte já ordenada do vetor.\n\n**Vetor Inicial:** `[5, 4, 3, 2, 1]`\n\n- **Passo 1 (i=1, chave=4):**\n  - Compara 4 com 5. `4 < 5`, então 5 é deslocado para a direita.\n  - Insere 4 na posição 0.\n  - **Vetor:** `[4, 5, 3, 2, 1]`\n\n- **Passo 2 (i=2, chave=3):**\n  - Compara 3 com 5. `3 < 5`, desloca 5.\n  - Compara 3 com 4. `3 < 4`, desloca 4.\n  - Insere 3 na posição 0.\n  - **Vetor:** `[3, 4, 5, 2, 1]`\n\n- **Passo 3 (i=3, chave=2):**\n  - Compara 2 com 5, 4, 3. Desloca todos.\n  - Insere 2 na posição 0.\n  - **Vetor:** `[2, 3, 4, 5, 1]`\n\n- **Passo 4 (i=4, chave=1):**\n  - Compara 1 com 5, 4, 3, 2. Desloca todos.\n  - Insere 1 na posição 0.\n  - **Vetor:** `[1, 2, 3, 4, 5]`\n\nA sequência de estados do vetor após cada passo principal corresponde à alternativa (a)."
  },
  {
    "id_questao": "2019_1_q19",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 19,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Listas Encadeadas"
      },
      {
        "nome": "Análise de Complexidade",
        "subarea": "Notação Big O"
      }
    ],
    "enunciado": "Considere uma lista duplamente encadeada não ordenada (com ponteiros na início e final da lista). Qual das seguintes operações a seguir pode ser implementada no tempo O(1)? Marque a alternativa CORRETA.\nI. Inserção na frente da lista encadeada\nII. Inserção no final da lista encadeada\nIII. Exclusão do nó frontal da lista encadeada\nIV. [cite_start]Exclusão do último nó da lista encadeada\n[cite: 2269, 2270, 2271, 2272, 2273, 2274]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "I e II",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "I e III",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "I, II e III",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "I, II e IV",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "Todas as afirmativa estão corretas",
        "correta": true
      }
    ],
    "explicacao_geral": "**Raciocínio:** A questão analisa a complexidade de operações em uma lista duplamente encadeada que mantém ponteiros para o início (head) e o fim (tail).\n\n- **I. Inserção na frente:** Tendo o ponteiro `head`, a inserção na frente requer apenas a atualização de alguns ponteiros (o `next` do novo nó, o `prev` do antigo `head` e o próprio `head`). Isso é feito em tempo constante, $O(1)$.\n\n- **II. Inserção no final:** Tendo o ponteiro `tail`, a inserção no final é análoga à inserção na frente. Requer a atualização do `next` do antigo `tail`, do `prev` do novo nó e do próprio `tail`. Isso é feito em tempo constante, $O(1)$.\n\n- **III. Exclusão do nó frontal:** Com o ponteiro `head`, podemos acessar o primeiro nó e seu sucessor (`head->next`). A exclusão envolve atualizar o `head` para apontar para o sucessor e ajustar o ponteiro `prev` do novo `head`. Isso é feito em tempo constante, $O(1)$.\n\n- **IV. Exclusão do último nó:** Com o ponteiro `tail`, podemos acessar o último nó e seu antecessor (`tail->prev`). A exclusão envolve atualizar o `tail` para apontar para o antecessor e ajustar o ponteiro `next` do novo `tail`. Isso é feito em tempo constante, $O(1)$.\n\nComo todas as quatro operações podem ser realizadas em tempo constante, a alternativa correta é a (e)."
  },
  {
    "id_questao": "2019_1_q20",
    "prova_referencia": "2019-1.pdf",
    "numero_questao": 20,
    "ano_prova": 2019,
    "area": [
      {
        "nome": "Estruturas de Dados",
        "subarea": "Filas"
      },
      {
        "nome": "Estruturas de Dados",
        "subarea": "Arrays"
      }
    ],
    "enunciado": "Suponha que uma fila circular de elementos com capacidade $(n-1)$ seja implementada com um vetor de n elementos. Suponha que a operação de inserção e exclusão seja realizada usando REAR (último elemento da fila) e FRONT (primeiro elemento da fila) como variáveis de índice do vetor, respectivamente. Inicialmente, $REAR = FRONT = 0$. [cite_start]As condições para detectar a fila cheia и a fila vazia são: [cite: 2280, 2281, 2282]",
    "opcoes": [
      {
        "letra": "a",
        "texto": "Full: (REAR+1) mod n == FRONT, empty: (FRONT+1) mod n == REAR",
        "correta": false
      },
      {
        "letra": "b",
        "texto": "Full: REAR == FRONT, empty: (REAR+1) mod n == FRONT",
        "correta": false
      },
      {
        "letra": "c",
        "texto": "Full: (FRONT+1) mod n == REAR, empty: REAR == FRONT",
        "correta": false
      },
      {
        "letra": "d",
        "texto": "Full: REAR == FRONT, empty: (FRONT+1) mod n == REAR",
        "correta": false
      },
      {
        "letra": "e",
        "texto": "Full: (REAR+1) mod n == FRONT, empty: REAR == FRONT",
        "correta": true
      }
    ],
    "explicacao_geral": "**Raciocínio:** A implementação de uma fila circular em um vetor de tamanho `n` que armazena no máximo `n-1` elementos usa uma posição vazia para diferenciar o estado de fila cheia do estado de fila vazia.\n\n- **Inicialização e Estado Vazio:** A fila começa vazia. A condição para isso é quando os ponteiros de início (FRONT) и fim (REAR) estão na mesma posição. Inicialmente, `REAR = FRONT = 0`. Se, após várias operações, eles se encontrarem novamente, a fila está vazia. Portanto, **`empty: REAR == FRONT`**.\n\n- **Estado Cheio:** A fila é considerada cheia quando o ponteiro REAR está uma posição *atrás* do ponteiro FRONT (considerando a circularidade do vetor). Para inserir um novo elemento, o REAR é incrementado (com módulo `n`) e o valor é inserido. A condição de cheia verifica se a *próxima* posição do REAR seria a posição do FRONT. Isso é expresso como **`Full: (REAR + 1) % n == FRONT`**.\n\n**Análise das Opções:**\n- **(e) Correto:** Combina exatamente as duas condições deduzidas: `Full: (REAR+1) mod n == FRONT` e `empty: REAR == FRONT`.\n- **(a, b, c, d) Incorreto:** As outras opções confundem as condições de fila cheia e vazia ou usam lógicas incorretas para as comparações dos ponteiros."
  }
]