import React from "react";
import { UserList } from "../Components/UserList";
import type { RootState  } from "../store/store";
import {useSelector    } from "react-redux";

const HomePage:React.FC=()=>{
    const isLogin=useSelector<RootState>((state)=>state.usersRed.isLogin ) as boolean;

    return (
        <div>
        <div>
            <p>This is home page!</p>
        </div>
        {/* check isAuthenticated */}
        {isLogin && <UserList/> }
        
        </div>
    )
}
export default HomePage;