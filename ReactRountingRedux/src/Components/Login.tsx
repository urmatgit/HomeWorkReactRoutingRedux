import type React from "react";
import { useNavigate } from "react-router-dom";

const Login: React.FC<{onLogin:()=>void}>=({onLogin})=>{
    const navigate=useNavigate();
    const handleLogin = () => {
        onLogin();
        navigate('/');
      };

    return ( <div className="auth-container">
        <h2>Авторизация</h2>
        <div>
        <input type="text" placeholder="Логин" />
        </div>
        <div><p></p> </div>
        <div>
        <input type="password" placeholder="Пароль" />
        </div>
        <br />
        <button onClick={handleLogin}>Войти</button>
      </div>)
}
export default Login;