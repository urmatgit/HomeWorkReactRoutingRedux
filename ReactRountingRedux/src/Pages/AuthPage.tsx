import React, { useState } from "react";
import Login from "../Components/Login";
import Registration from "../Components/Registration";
import type { RootState  } from "../store/store";
import {useSelector,useDispatch    } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { logout } from "../store/userSlice";

const AuthPage:React.FC=()=>{
    const {par1} =useParams<{par1: string}>();
    
    const dispatch=useDispatch();
    const [isRegister, setIsRegister] = useState<boolean>(false);
    const isLogin=useSelector<RootState>((state)=>state.usersRed.isLogin ) as boolean;

    const navigate=useNavigate();

    if (par1==="logout"){
        dispatch(logout(isLogin));
        return navigate("/");
    }

  
  
  const handerClickRegister=()=>{
    setIsRegister(true);
  }


  if  (isLogin || isRegister)
    
    return (<Registration ></Registration>)
  else 
    return (
        <div >
                 <  Login ></Login> 
                 
                 <div >
                 <span> Нет аккаунта? </span>
                 <button onClick={()=> handerClickRegister()} >
                    Зарегистрируйтесь
                    </button>
                    </div>

            
        </div>
    )
}
export default AuthPage;