import type React from "react";
import { useNavigate } from "react-router-dom";

const Registration:React.FC<{onRegister:()=>void}>=({onRegister})=>{
    const navigate=useNavigate();
    const handleRegister = () => {
        onRegister();
        navigate('/');
      };

    return ( <div className="auth-container">
        <h2>Регистрация</h2>
        <div>
        <input type="text" placeholder="Логин" />
        </div>
        <div>
        <input type="password" placeholder="Пароль" />
        </div>
        <div>
        <input type="password" placeholder="повторить пароль" />
        </div>
        <br />
        <button onClick={handleRegister}>Войти</button>
      </div>)
}
export default Registration;