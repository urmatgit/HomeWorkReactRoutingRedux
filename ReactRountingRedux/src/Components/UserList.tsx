import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { removeUser } from "../store/userSlice";
import type { RootState, User } from "../store/store";
export const UserList=()=>{
    const users=useSelector<RootState>((state)=>state.usersRed.users ) as User[];
    
    
    const dispatch=useDispatch();
    const handleRemoveUser=(id)=>{
        dispatch(removeUser(id));
    }
    return (
        <div>
            {"  "}
            <h1>User List</h1>
            <table border={1}>
                <tr>
            
                <th>id</th>
                <th>name</th>
                <th>action</th>
            
            </tr>
            {
                
                users.map((user)=>(
                    <tr>
                        <td key={user.id}>{user.id}</td>
                        <td>{user.username}</td>
                        <td><button onClick={()=>handleRemoveUser(user.id)}>Delete User</button></td>
                   </tr>
                ))
            }
        </table>
        </div>
    );
}