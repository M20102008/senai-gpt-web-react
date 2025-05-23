import "./login.css";
import logo from "../../assets/imgs/Chat.png";
import { useState } from "react";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async () => {

    let response = await fetch("https://senai-gpt-api.up.railway.app/login", {

      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify({
        email: email,
        password: password
      })

    });

    console.log(response);

    if (response.ok == true) {

      let json = await response.json();
      localStorage.setItem("meuToken", json.accessToken);
    }
    window.location.href = "/chat"
  }

  return (
    <>
      <header></header>

      <main className="page-container">
        <div className="robo-image"></div>

        <div className="login-container">
          <img
            className="logo"
            src={logo}
            alt="SenaiGPT logo"
          />

          <h1 id="meutitulo" className="titulo">
            Login
          </h1>

          <input className="inpt" value={email} onChange={event => setEmail(event.target.value)} type="email" placeholder="Insira o e-mail" />
          <input
            className="inpt" value={password} onChange={event => setPassword(event.target.value)}
            type="password"
            placeholder="Insira a senha"
          />

          <button className="btn" onClick={() => onLoginClick()}>Entrar</button>
          <a className="form-hint" href="/new-user">Clique aqui para fazer o cadastrado</a>
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default Login;
