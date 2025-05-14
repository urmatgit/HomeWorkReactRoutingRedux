import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:[{id: "1",username:"test",password:"1"},{id: "2",username:"test2",password:"2"}],
    isLogin:false,
};

const userSlice=createSlice({
    name: "users",
    initialState,
    reducers:{
        addUser: (state,action)=>{
            state.users.push(action.payload)
        },
        removeUser: (state,action)=>{
                state.users=state.users.filter((user)=>user.id!==action.payload);
        },
        login:(state,action) =>{
            const userPayload=action.payload ;
            const exsitUser=state.users.filter((user)=>user.username==userPayload.username && user.password==userPayload.password);
            console.log(exsitUser);
            
            state.isLogin=exsitUser.length>0;
        },
        logout:(state)=>{
            if (state.isLogin)
                state.isLogin=false;
        }
    }
});
export const {addUser,removeUser,login,logout}=userSlice.actions;
export default userSlice.reducer;