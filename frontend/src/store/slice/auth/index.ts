import { createSlice } from "@reduxjs/toolkit";
import { setCookie, removeCookie } from "typescript-cookie";

export interface InitialStateType {
    token: string;
    role: string;
};

const initialState: InitialStateType = {
    token: "",
    role: ""
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        saveUserInfo: (state: InitialStateType, action) => {
            console.log("Reducer called with action:", action); // Log the action
            const { token, role } = action.payload;
            state.token = token;
            state.role = role;
            setCookie("token", token, { path: '/' });
            setCookie("role", role, { path: '/' });
        },
        removeUserInfo: (state: InitialStateType) => {
            state.token = "";
            state.role = "";
            removeCookie("token");
            removeCookie("role");
        },
    },
});

export const token = (state: InitialStateType) => state.token;
export const role = (state: InitialStateType) => state.role;
export const { saveUserInfo, removeUserInfo } = authSlice.actions;
export default authSlice.reducer;
