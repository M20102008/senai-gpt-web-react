import "./chat.css"
import btn from "../../assets/imgs/IconSet (1).svg";
import bntwhite from "../../assets/imgs/btnwhite.svg";

//import btnc from "../../assets/imgs/IconSet (1).svg";
//import btnchat from "../../assets/imgs/IconSet (1).svg";
import logo from "../../assets/imgs/Chat.png";
import logowhite from "../../assets/imgs/Chatwhite.svg";
import exemplos from "../../assets/imgs/IconSet (3).svg";
import exempless from "../../assets/imgs/Star.svg";
import exemples from "../../assets/imgs/ShieldWarning (1).svg";
import aviao from "../../assets/imgs/Vector (3).png";
import microfone from "../../assets/imgs/IconSet.png";
import botaoimagem from "../../assets/imgs/Vector (2).png";
import { useEffect, useState } from "react";

function Chat() {

    const [chats, setChats] = useState([]);
    const [chatSelecionado, setChatSelecionado] = useState(null);

    const [userMessage, setUserMessage] = useState("");

    const [isLeftPanelOpen, setIsLeftPanelOpen] = useState(false);

    const [darkmode, setdarkmode] = useState(false);

    useEffect(() => {

        // Executada toda vez que a tela abre.
        getChats();


    }, []);

    const getChats = async () => {
        // Arrow Function
        let response = await fetch("https://senai-gpt-api.up.railway.app/chats", {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            }
        });

        console.log(response);

        if (response.ok == true) {

            let json = await response.json(); // Pegue as informações dos chats.

            setChats(json);

        } else {

            if (response.status == 401) {

                alert("Token inválido. Faça login novamente.");
                localStorage.clear();
                window.location.href = "/login";

            }

        }

    }

    const onLogOutClick = () => {

        localStorage.clear();
        window.location.href = "/login";

    }

    const clickChat = (chat) => {

        setChatSelecionado(chat);
        setIsLeftPanelOpen(false);

    }

    const chatGPT = async (message) => {

        return ["Mensagem fixa"];

        // Configurações do endpoint e chave da API
        const endpoint = "https://ai-testenpl826117277026.openai.azure.com/";
        const apiKey = "DCYQGY3kPmZXr0lh7xeCSEOQ5oiy1aMlN1GeEQd5G5cXjuLWorWOJQQJ99BCACYeBjFXJ3w3AAAAACOGol8N";
        const deploymentId = "gpt-4"; // Nome do deployment no Azure OpenAI
        const apiVersion = "2024-05-01-preview"; // Verifique a versão na documentação

        // URL para a chamada da API
        const url = `${endpoint}/openai/deployments/${deploymentId}/chat/completions?api-version=${apiVersion}`;

        // Configurações do corpo da requisição
        const data = {
            messages: [{ role: "user", content: message }],
            max_tokens: 50
        };

        // Cabeçalhos da requisição
        const headers = {
            "Content-Type": "application/json",
            "api-key": apiKey
        };

        // Faz a requisição com fetch
        const response = await fetch(url, {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        });

        if (response.ok) {
            const result = await response.json();
            const botMessage = result.choices[0].message.content;
            return botMessage;
        }

    }

    const enviarMensagem = async (message) => {

        console.log("Mensagem", message);

        let userId = localStorage.getItem("meuId");

        let novaMensagemUsuario = {

            text: message,
            id: crypto.randomUUID(),
            userId: userId
        };


        let novoChatSelecionado = { ...chatSelecionado };
        novoChatSelecionado.messages.push(novaMensagemUsuario);
        setChatSelecionado(novoChatSelecionado);

        let respostaGPT = await chatGPT(message);

        let novaMensagemGPT = {

            text: respostaGPT,
            id: crypto.randomUUID(),
            userId: "chatbot"
        };

        novoChatSelecionado = { ...chatSelecionado };
        novoChatSelecionado.messages.push(novaMensagemGPT);
        setChatSelecionado(novoChatSelecionado);

        console.log("resposta", respostaGPT);

    }

    const novoChat = async () => {
        let nomeChat = prompt("Digite o nome do novo chat:");
        if (!nomeChat) {
            alert("Nome inválido.");
            return;
        }

        let userId = localStorage.getItem("meuId");
        let novoChatObj = {
            id: crypto.randomUUID(),
            chatTitle: nomeChat,
            messages: [],
            userId
        };

        setChatSelecionado(novoChatObj);
        setUserMessage("");

        let response = await fetch("https://senai-gpt-api.up.railway.app/chats", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem("meuToken")
            },
            body: JSON.stringify(novoChatObj)
        });

        if (response.ok) {
            await getChats();
            return novoChatObj;
        } else {
            console.log("Erro ao criar o chat.");
        }
    }

    const toggledarkmode = () => {

        setdarkmode(!darkmode);

        if (darkmode == true) {

            document.body.classList.remove("dark-mode")

        }else{

            document.body.classList.add("dark-mode")
        }

        localStorage.setItem("dark-mode", !darkmode);
    
    }



    return (
        <>
            <div className="container">
                <button
                    className="btn-toggle-panel"
                    onClick={() => setIsLeftPanelOpen(!isLeftPanelOpen)}
                >
                    ☰
                </button>

                <header className={`left-panel ${isLeftPanelOpen ? "open" : ""}`}>

                    <div className="top">

                        {<button className="btn-new-chat" onClick={() => clickChat(novoChat)}>+ New chat</button>}

                        {chats.map(chat => (
                            <button className="btn-chat" onClick={() => clickChat(chat)}>
                                <img src={darkmode == true? bntwhite : btn} alt="ícone de chat." />
                                {chat.chatTitle}
                            </button>
                        ))}

                    </div>

                    <div className="bottom">

                        {/* <button className="btn-chat">Clear conversations</button> */}
                        <button className="btn-chat" onClick={() => toggledarkmode()}>Light mode</button>
                        {/* <button className="btn-chat">My account</button> */}
                        {/* <button className="btn-chat">Updates & FAQ</button> */}
                        <button className="btn-chat" onClick={() => onLogOutClick()}>Log out</button>

                    </div>

                </header>

                <main className="central-panel">

                    {chatSelecionado == null && (

                        <>

                            <div className="chat-logo">
                                <img src={darkmode == true? logowhite : logo} alt="Logo do SenaiGPT." />
                            </div>

                            <div className="dicas-container">

                                <div className="dicas-item">

                                    <h2>
                                        <img src={exemplos} alt="Example icon." />
                                        Examples
                                    </h2>

                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>

                                </div>

                                <div className="dicas-item">

                                    <h2>
                                        <img src={exempless} alt="Example icon." />
                                        Examples
                                    </h2>

                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>

                                </div>

                                <div className="dicas-item">

                                    <h2>
                                        <img src={exemples} alt="Example icon." />
                                        Examples
                                    </h2>

                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>
                                    <p>Explique como um computador quântico funciona.</p>

                                </div>

                            </div>

                        </>

                    )}

                    {chatSelecionado != null && (

                        <>

                            <div className="chat-container">

                                <div className="chat-header">

                                    <h2>{chatSelecionado.chatTitle}</h2>

                                </div>

                                <div className="chat-messages">

                                    {chatSelecionado.messages.map(message => (
                                        <p className={"message-item " + (message.userId == "chatbot" ? "chatbot" : "")}>{message.text}</p>
                                    ))}

                                </div>

                            </div>

                        </>

                    )}

                    <div className="input-container-1">

                        <img src={microfone} alt="Microphone." />
                        <img src={botaoimagem} alt="Image." />

                        <input
                            value={userMessage}
                            onChange={event => setUserMessage(event.target.value)} placeholder="Type a message."
                            type="text"
                        />

                        <img onClick={() => enviarMensagem(userMessage)} src={aviao} alt="Send." />

                    </div>

                </main>

            </div>
        </>
    )

};
export default Chat;