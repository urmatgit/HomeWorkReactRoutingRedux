import type React from "react";
import { useNavigate } from "react-router-dom";
import  TextField  from "@mui/material/TextField";
import { useDispatch  } from "react-redux";
import { addUser } from "../store/userSlice";
import { useState } from "react";
import {Guid} from 'guid-typescript';
import type { User } from "../store/store";

 


const Registration:React.FC=()=>{
    const [newUser, setUser]=useState<User>({id:'',username:"",password:""});
    const dispatch=useDispatch();

    const navigate=useNavigate();
    const handleRegister = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { username, value } = e.target;
        setUser({ ...newUser, [username]: value });

       
      };
      const handleSubmit=(e: React.ChangeEvent<HTMLInputElement>)=>{
        e.preventDefault();
        //get GUID
        newUser.id=Guid.create().toString();
        console.log(newUser.id);
        console.log(newUser.username);
        console.log(newUser.password);
        if (newUser){

            dispatch(addUser(newUser))
            
            navigate('/');
            }
      };

    return ( <div className="auth-container" >
        <h2>Регистрация</h2>
        <form onSubmit={handleSubmit}>
        <div className="inputClass"> 
          <TextField id='username' name='username' type="text" label="Логин" fullWidth value={newUser.username}  onChange={handleRegister} required/>
        </div>
        <div className="inputClass">
            <TextField id="password" name="password" type="password" label="Пароль" fullWidth  value={newUser.password} onChange={handleRegister} required/>
        </div>
        {/* <div className="inputClass">
            <TextField type="password" label="повторить пароль" fullWidth />
        </div> */}
        <br />
        <button type="submit" >Создать</button>
        </form>
      </div>)
}
export default Registration;