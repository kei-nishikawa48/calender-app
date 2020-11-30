import { createSlice } from "@reduxjs/toolkit"

const init ={
  items:[],
  isLoading:false,
  error:null
}

const scheduleSlice=createSlice({
  name:"schedule",
  initialState:init,
  reducers:{
    schedulesAddItem:(state,{payload})=> ({...state,isLoading:false,items:[...state.items,payload]}),
    schedulesSetLoading:(state)=>({...state,isLoading:true}),
    schedulesFetchItem:(state,{payload})=>({...state,isLoading:false,items:payload}),
    schedulesDeleteItem:(state,{payload})=>({...state,isLoading:false,items:payload}),
    schedulesResetError:(state)=>({...state,error:null}),
    schedulesAsyncFailure:(state,{payload})=>({...state,error:payload})
  }
})

export const { schedulesFetchItem, schedulesSetLoading, schedulesAddItem, schedulesDeleteItem, schedulesResetError, schedulesAsyncFailure} = scheduleSlice.actions
export default scheduleSlice