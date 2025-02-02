# 🚀 Como foi criar a API do projeto?

Criar essa aplicação foi uma baita experiência! Desde a construção da **API com Express** até a integração com o **front-end** em **React**, cada etapa teve seus desafios e aprendizados. Vou te contar como tudo rolou no Back-end!

## 🔧 **A Construção da API**

A primeira coisa foi começar a **API**. Para isso, escolhi **Node.js** com **Express** e o **Prisma ORM** para facilitar a interação com o banco de dados. A escolha do **Prisma** foi estratégica porque ele simplifica muito a vida, evitando que eu precisasse escrever aquelas queries SQL gigantescas. Usando o Prisma, ficou super intuitivo criar, buscar, atualizar e deletar usuários. 

Com a API pronta, consegui implementar as operações básicas de um **CRUD**:

- **Criar usuário (POST /usuarios)**: Envia dados para cadastrar um novo usuário.
- **Buscar usuários (GET /usuarios)**: Recupera todos os usuários cadastrados.
- **Atualizar um usuário (PUT /usuarios/:id)**: Atualiza os dados de um usuário específico.
- **Deletar um usuário (DELETE /usuarios/:id)**: Remove um usuário pela ID.

No começo, confesso que apanhei um pouco com as **rotas assíncronas** e a estrutura do **Prisma**, mas depois de entender o básico, tudo fluiu bem. 🌊

Ah, uma coisa importante foi configurar o **CORS**, porque sem ele o front-end não ia conseguir se comunicar com o back-end. A partir daí, a comunicação ficou tranquila! 😅

## 🔗 **Ligando o Front-End com o Back-End**

A integração entre o **front-end** e o **back-end** foi feita de forma bem simples e fluida. No **React**, usei o **Axios** para fazer as requisições HTTP. Configurei a **baseURL** no Axios para apontar para `http://localhost:3000`, e com isso ficou muito fácil chamar os endpoints da API.

A interação entre o front-end e o back-end ficou assim:

- **GET (/usuarios)**: Recupera os usuários cadastrados e exibe na tela.
- **POST (/usuarios)**: Envia os dados para cadastrar um novo usuário.
- **DELETE (/usuarios/:id)**: Remove um usuário da lista ao clicar no botão de lixeira 🗑️.

Usei o **useEffect** para carregar os dados automaticamente assim que a página carrega, e os inputs do formulário são manipulados através do **useRef**. Essa abordagem deixou o código mais limpo e fácil de entender. 🧹

## 📌 **Minha Conclusão**

No final das contas, foi uma experiência incrível! Juntar **React**, **Express** e **Prisma** me proporcionou um aprendizado gigante sobre como integrar o **front-end** e o **back-end** de forma eficiente. 💡

No começo, algumas partes foram bem desafiadoras (como configurar o CORS e entender a estrutura do Prisma), mas depois de algumas tentativas (e alguns erros 🤷‍♂️), tudo começou a se encaixar.

Agora, tenho uma **aplicação funcional** que me permite cadastrar, visualizar e deletar usuários de maneira **dinâmica**. Esse projeto me deu ainda mais vontade de aprender e melhorar a qualidade do meu código cada vez mais. 🏆


Espero que esse projeto ajude tanto você quanto me ajudou a aprender mais sobre integração de sistemas! 🚀

