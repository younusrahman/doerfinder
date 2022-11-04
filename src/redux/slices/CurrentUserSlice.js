import {createSlice } from '@reduxjs/toolkit';


const initialState = {
  Status: false,
  User:{}
};



export const CurrentUser = createSlice({
  name: 'CurrentUser',
  initialState,
  reducers: {
    ChangeUserStatus: (state, {payload}) => {
        state.Status = payload;
    },
    AddUser:(state, {payload})=>{
        if(state.Status){
            state.User = payload
        }
        else{
            console.log("User status is false")
        }
         
    }

  }
 
 
});

export const { ChangeModalStatus, AddUser } = CurrentUser.actions;


export default CurrentUser.reducer;
