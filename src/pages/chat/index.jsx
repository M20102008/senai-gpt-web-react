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
        <div className="container">

            <header className="left-painel">

                <div className="top">

                    <button className="btn-new-chat"> + New Chat </button>
                    <button className="btn-chat">
                        <img src={btn} alt="" />
                        AI Chat Tool Ethics </button>
                    <button className="btn-chat">
                        <img src={btnc} alt="" />
                        Al Chat Tool Impact Writing </button>
                    <button className="btn-chat">
                        <img src={btnchat} alt="" />
                        New chat </button>

                </div>

                <div className="bottom">

                    <button className="btn"> Clear Conversations </button>
                    <button className="btn"> Light mode </button>
                    <button className="btn"> My Account </button>
                    <button className="btn"> Updates & FAQ </button>
                    <button className="btn"> Log out </button>

                </div>

            </header>

            <main className="painel-central">

                <img className="logo" src={logo} alt="" />

                <div className="dicas-container">

                    <div className="dicas-item">

                        <h2>
                            <img src={exemplos} alt="Mensagem" />
                            Examples
                        </h2>

                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>

                    </div>

                    <div className="dicas-item">

                        <h2>
                            <img src={exempless} alt="estrela" />
                            Examples
                        </h2>

                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>

                    </div>

                    <div className="dicas-item">
                        <h2>
                            <img src={exemples} alt="" />
                            Examples
                        </h2>

                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>
                        <p>Explique como um computador quantico funciona.</p>

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