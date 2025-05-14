import { configureStore } from '@reduxjs/toolkit';
import userReducer from "./userSlice";
const storeConfig = configureStore({
    reducer: {
        usersRed:userReducer,
    
    }
});

interface IUser {
    id:string;
    username:string;
    password:string;
}
export type User=IUser;
export type RootState = ReturnType<typeof storeConfig.getState>
export default storeConfig;