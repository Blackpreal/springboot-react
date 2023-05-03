import { useState } from "react";
import "../css/Login.css";
import { useNavigate } from "react-router";

function LoginPage() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  
  function throwRegister(e){
e.preventDefault()
navigate("/Register")
  }

  function login() {
    fetch("http://localhost:8080/sk/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        mailID: userName,
        password: password,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data === true) {
          navigate("/");
        } else if (data === false) {
          navigate("/login");
        }
      })
      .catch((error) => console.error(error));
  }

  return (
    <div className="root-login">
      <div className="l-pane">
        <span>Login</span>
        <span>Username</span>
        <input
          type="text"
          name="username"
          id="username"
          onChange={(e) => setUserName(e.target.value)}
          value={userName}
        />
        <span>Password</span>
        <input
          type="text"
          name="password"
          id="password"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />
        <button type="submit" onClick={login}>
          login
        </button>
        <a onClick={throwRegister}>click here to register</a>
      </div>
    </div>
  );
}

export default LoginPage;
