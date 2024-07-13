import { createSlice } from '@reduxjs/toolkit';


const tokenSlice = createSlice({
    name: "userResponse",
    initialState: {
      token: '',
      isAdmin:{}
       

    },
    reducers: {
        setToken: (state, action) => {
            state.token = action.payload;
        },
        setUser: (state, action) => {
           
            state.isAdmin=action.payload
        },
    
    }
});

export const {setToken,setUser } =  tokenSlice.actions;

export default  tokenSlice.reducer;