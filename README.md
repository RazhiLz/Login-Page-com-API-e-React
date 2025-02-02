Cara, criar essa aplicação foi uma baita experiência! Desde a construção da API com Express até a integração do frontend com React, cada etapa teve seus desafios e aprendizados.

Como foi fazer a API?

Comecei criando a API usando Node.js com Express e o Prisma ORM para facilitar a interação com o banco de dados. Escolhi o Prisma porque ele simplifica muito a vida, evitando que eu tenha que escrever queries SQL gigantes. Com ele, criar, buscar, atualizar e deletar usuários ficou bem mais intuitivo.

A API tem todas as operações básicas de um CRUD:

Criar usuário (POST /usuarios)

Buscar usuários (GET /usuarios)

Atualizar um usuário (PUT /usuarios/:id)

Deletar um usuário (DELETE /usuarios/:id)

No começo, apanhei um pouco com as rotas assíncronas e a estrutura do Prisma, mas depois que entendi, tudo fluiu super bem. Ah, e claro, tive que configurar o CORS pra permitir que o frontend conseguisse se comunicar com o backend sem problemas.

Ligando o frontend com o backend

No frontend, fiz tudo com React e usei o Axios pra fazer as requisições HTTP. Eu configurei uma baseURL no Axios apontando para http://localhost:3000, então ficou super simples chamar a API.

A integração ficou assim:

GET (/usuarios) -> Busca os usuários e exibe na tela.

POST (/usuarios) -> Cadastra um novo usuário quando o formulário é preenchido.

DELETE (/usuarios/:id) -> Remove um usuário ao clicar no botão de lixeira.

Usei o useEffect pra carregar os dados assim que a página abre, e os inputs do formulário são manipulados através de useRef. Isso deixou o código mais organizado e fácil de entender.

Minha conclusão

Criar esse projeto foi muito massa! Juntar React, Express e Prisma deu um baita aprendizado sobre integração frontend-backend. No começo, algumas partes foram desafiadoras, mas depois de algumas tentativas (e erros!), tudo começou a se encaixar. (ESSE É O REPOSITORIO DOS ARQUIVOS DO BACK-END.)

Agora, tenho uma aplicação funcional onde posso cadastrar, visualizar e deletar usuários de forma dinâmica! Esse projeto me deu ainda mais vontade de aprender e aprimorar cada vez mais meu código. 🚀
