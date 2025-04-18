import "./login.css";
import logo from "../../assets/imgs/Chat.png";
import { useState } from "react";


function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLoginClick = async ()=> {

    let response = await fetch("https://senai-gpt-api.azurewebsites.net/login", {

      headers: {
        "Content-Type": "application/json"
      },
      method: "POST",
      body: JSON.stringify( {
        email: email,
        password:password
      })

    });

    console.log(response)

    if (response.ok == true) {

      alert("login realizado com sucesso!")

      console.log(response);

      let json = await response.json();

      let token = json.accessToken;

      console.log("Token: " + token);

      localStorage.setItem("meutoken", token);

      window.location.href = "/chat";

    } else {

      if (response.status == 401) {

        alert("Credenciais incorretas. Tente novamente")

      } else{

        alert("Erro inesperado aconteceu, caso percista contate os adiministradores")

      }

    }

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
        </div>
      </main>

      <footer></footer>
    </>
  );
}

export default Login;
