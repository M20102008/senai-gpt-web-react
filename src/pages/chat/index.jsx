import "./chat.css"
function Chat() {
return (
    <div class="container">

        <header class="left-painel">

            <div class="top">

                <button class="btn-new-chat"> + New Chat </button>
                <button class="btn-chat">
                    <img src="../assets/imgs/IconSet (1).svg" alt=""/>
                    AI Chat Tool Ethics </button>
                <button class="btn-chat">
                    <img src="../assets/imgs/IconSet (1).svg" alt=""/>
                    Al Chat Tool Impact Writing </button>
                <button class="btn-chat">
                    <img src="../assets/imgs/IconSet (1).svg" alt=""/>
                    New chat </button>

            </div>

            <div class="bottom">

                <button class="btn"> Clear Conversations </button>
                <button class="btn"> Light mode </button>
                <button class="btn"> My Account </button>
                <button class="btn"> Updates & FAQ </button>
                <button class="btn"> Log out </button>

            </div>

        </header>

        <main class="painel-central">

           <img class="logo" src="../assets/imgs/Chat.png" alt=""/>

            <div class="dicas-container">

                <div class="dicas-item">

                    <h2>
                        <img src="../assets/imgs/IconSet (3).svg" alt="Mensagem"/>
                        Examples
                    </h2>

                    <p>Explique como um computador quantico funciona.</p>
                    <p>Explique como um computador quantico funciona.</p>
                    <p>Explique como um computador quantico funciona.</p>

                </div>

                <div class="dicas-item">

                    <h2>
                        <img src="../assets/imgs/Star.svg" alt="estrela"/>
                        Examples
                    </h2>

                    <p>Explique como um computador quantico funciona.</p>
                    <p>Explique como um computador quantico funciona.</p>
                    <p>Explique como um computador quantico funciona.</p>

                </div>

                <div class="dicas-item">
                    <h2>
                        <img src="../assets/imgs/ShieldWarning (1).svg" alt=""/>
                        Examples
                    </h2>

                    <p>Explique como um computador quantico funciona.</p>
                    <p>Explique como um computador quantico funciona.</p>
                    <p>Explique como um computador quantico funciona.</p>

                </div>

            </div>

            <div class="input-text">
                <input class="input" type="text" placeholder="Type message"/>

                <img class="aviao" src="../assets/imgs/Vector (3).png" alt="Enviar"/>
                <img class="microfone" src="../assets/imgs/IconSet.png" alt="Microfone"/>
                <img class="botaoimagem" src="../assets/imgs/Vector (2).png" alt="Enviar Imagem"/>

            </div>

        </main>

    </div>
 );
}
export default Chat;