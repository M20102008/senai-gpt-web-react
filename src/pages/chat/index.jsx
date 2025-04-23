import "./chat.css"
import btn from "../../assets/imgs/IconSet (1).svg";
import btnc from "../../assets/imgs/IconSet (1).svg";
import btnchat from "../../assets/imgs/IconSet (1).svg";
import logo from "../../assets/imgs/Chat.png";
import exemplos from "../../assets/imgs/IconSet (3).svg";
import exempless from "../../assets/imgs/Star.svg";
import exemples from "../../assets/imgs/ShieldWarning (1).svg";
import aviao from "../../assets/imgs/Vector (3).png";
import microfone from "../../assets/imgs/IconSet.png";
import botaoimagem from "../../assets/imgs/Vector (2).png";
function Chat() {
    return (
        <div className="container-2">

            <header className="left-painel-2">

                <div className="top-2">

                    <button className="btn-new-chat-2"> + New Chat </button>
                    <button className="btn-chat-2">
                        <img src={btn} alt="" />
                        AI Chat Tool Ethics </button>
                    <button className="btn-chat-2">
                        <img src={btnc} alt="" />
                        Al Chat Tool Impact Writing </button>
                    <button className="btn-chat-2">
                        <img src={btnchat} alt="" />
                        New chat </button>

                </div>

                <div className="bottom-2">

                    <button className="btn-bx"> Clear Conversations </button>
                    <button className="btn-bx"> Light mode </button>
                    <button className="btn-bx"> My Account </button>
                    <button className="btn-bx"> Updates & FAQ </button>
                    <button className="btn-bx"> Log out </button>

                </div>

            </header>

            <main className="painel-central-2">

                <img className="logo-2" src={logo} alt="" />

                <div className="dicas-container">

                    <div className="exemples">
                        <h3>
                            <img src={exemples} alt="" />
                            Examples
                        </h3>
                        <br />
                        <p>"Explain quantum computing in simple <br /> terms"</p>
                        <br />
                        <p>"Got any creative ideas for a 10-year <br /> old's birthday?"</p>
                        <br />
                        <p>"How do I make an HTTP request in <br /> JavaScript?"</p>
                        <br />
                    </div>

                    <div className="capacibilities">
                        <h3>
                            <img src={exempless} alt="" />
                            Capacibilities
                        </h3>
                        <br />
                        <p>Remembers what user said earlier in <br /> the conversation.</p>
                        <br />
                        <p>Allows user to provide follow-up <br /> corrections.</p>

                        <br />
                        <p>Trained to decline inappropriate <br /> requests.</p>
                        <br />
                    </div>

                    <div className="limitations">
                        <h3>
                            <img src={exemplos} alt="" />
                            Limitations
                        </h3>
                        <br />
                        <p>May occasionally generate incorrect <br /> information.</p>
                        <br />
                        <p>May occasionally produce harmful <br /> instructions or biased content.</p>
                        <br />
                        <p>Limited knowledge of world and <br /> events after 2021.</p>
                    </div>
                </div>

                <div className="input-text">
                    <input className="input" type="text" placeholder="Type message" />
                    <img className="aviao" src={aviao} alt="Enviar" />
                    <img className="microfone" src={microfone} alt="Microfone" />
                    <img className="botaoimagem" src={botaoimagem} alt="Enviar Imagem" />
                </div>

            </main>

        </div>
    );
}
export default Chat;