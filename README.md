#SenaiGPT React
## NODE
1. Verificar se esta com a versao do `node v20` instalado.
2. 
3. `node --version` (no cmd, em qualquer pasta.
 
   ![image](https://github.com/user-attachments/assets/c3244bf6-8e82-46f7-87d1-9bf8c0e0f719)
   3.Execute o comando no cmd do repositorio: npm create vite@latest senai-gpt-web-react -- --template react:

Foi criada uma pasta dentro do repositório com o nome `senai-gpt-web-react`. Em seguida, foram utilizados três comandos principais:

1. `cd senai-gpt-web-react` – acessa a pasta criada.  
2. `npm install` – instala as dependências do projeto (pasta `node_modules`).  
3. `npm run dev` – inicia o servidor de desenvolvimento e fornece o link de acesso à aplicação.

Ainda dentro do mesmo repositório, utilizamos o comando `cd senai-gpt-web-react` novamente para acessar a pasta.  
Logo após, executamos `code .` para abrir o projeto no Visual Studio Code.  

Com o VS Code aberto, inserimos nosso projeto e trocamos o terminal padrão do PowerShell para o Git Bash.  
No terminal, rodamos novamente os comandos:

- `npm install`  
- `npm run dev`

Também utilizamos os sites HTTP Cats e HTTP Status Codes como referência para visualizar mensagens de erro.

---

### Estrutura do Projeto React

Foi trazido o código HTML original para dentro da estrutura do projeto React.  
Na pasta `src`, criamos:

- `pages/login`: dentro dela, criamos duas subpastas – `chat` e `login`.
  - Em `login`, adicionamos dois arquivos:
    - `index.jsx`: substituímos o conteúdo inicial que vinha por padrão do React para adaptá-lo ao nosso projeto.
    - `login.css`: copiamos o conteúdo do CSS do projeto original (`senai-gpt-web`) e apenas ajustamos os caminhos das imagens.

Criamos também uma nova pasta `imgs` dentro de `src`, onde colocamos as imagens do projeto original para serem usadas no React.

---

### Ajustes em `main.jsx` e `App.jsx`

No arquivo `main.jsx`, limpamos o conteúdo anterior e importamos o `global.css`.  
No `App.jsx`, definimos a função principal `App()` para exibir a tela de login.

---

### Configuração do `index.jsx`

- Todas as classes do HTML foram renomeadas para `className`, seguindo a convenção do React.
- Importamos o `login.css` e linkamos a imagem da logo do projeto.
- Criamos uma função chamada `Login`, junto com os estados (`useState`) para armazenar o email e a senha.
- Foi criada uma função assíncrona `onLoginClick`, que usa `async/await` para aguardar a resposta do servidor.
- Utilizamos `fetch` para fazer uma requisição POST ao endpoint de autenticação no servidor.
- Os dados (email e senha) foram convertidos em JSON com `JSON.stringify`.
- Usamos `localStorage` para guardar os dados localmente no navegador.
- O evento `onChange` foi implementado nos inputs para atualizar o valor dos estados com o que o usuário digita.

