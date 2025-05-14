import type React from "react";
import { useNavigate } from "react-router-dom";

import  TextField  from "@mui/material/TextField";
import {useSelector,  useDispatch  } from "react-redux";
import { login } from "../store/userSlice";
import { useState } from "react";

import type { RootState, User } from "../store/store";
const Login: React.FC=()=>{

    const isLogin=useSelector<RootState>((state)=>state.usersRed.isLogin ) as boolean;
    const [newUser, setUser]=useState<User>({id:'',username:"",password:""});
    const dispatch=useDispatch();

    const navigate=useNavigate();


const handleSubmit=(e: React.ChangeEvent<HTMLInputElement>)=>{
    e.preventDefault();
    if (newUser){
    
                dispatch(login(newUser))
                if (isLogin)
                    navigate('/');
                }
          };
    

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setUser({ ...newUser, [name]: value });
        // onLogin();
        // navigate('/');
      };
   

    return  ( 
    <div className="auth-container ">
        <h2>Авторизация</h2>
        <form onSubmit={handleSubmit}>
            <div className="inputClass">
                <TextField   type="text" name='username'   id='username' label="Логин"  value={newUser.username}  variant="outlined" fullWidth  onChange={handleLogin} required/>
            </div>
        
            <div className="inputClass">
                <TextField  type="password"  name='password'  id='password' label="Пароль" value={newUser.password} fullWidth  onChange={handleLogin} required/>
            </div>
            <br />
            <button type="submit">Войти</button>
        </form>
        <p></p>
      </div>)
}
export default Login;