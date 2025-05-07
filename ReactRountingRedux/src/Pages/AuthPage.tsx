import React, { useState } from "react";
import Login from "../Components/Login";
import Registration from "../Components/Registration";

const AuthPage:React.FC=()=>{
    const [isAuthenticated, setIsAuthenticated] = useState<bool>(false);
    const [isRegister, setIsRegister] = useState<bool>(false);
  const handleLogin = () => {
    setIsAuthenticated(true);
  };
  const handlerRegister=()=>{
    //register user logic
  }
  const handerClickRegister=(isregister:bool)=>{
    setIsRegister(isregister);
  }


  if  (isAuthenticated)
    return (<div> private part</div>)
  else if (isRegister)
    return (<Registration onRegister={handlerRegister}></Registration>)
  else 
    return (
        <div >
                 <Login onLogin={handleLogin}></Login> 
                 <div className="registerText">
                 <span> Нет аккаунта? </span>
                 <button onClick={()=> handerClickRegister(!isRegister)} >
                    Зарегистрируйтесь
                    </button>
                    </div>

            
        </div>
    )
}
export default AuthPage;