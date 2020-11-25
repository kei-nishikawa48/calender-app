import { createSlice } from "@reduxjs/toolkit"

const init ={
  items:[],
  isLoading:false
}

const scheduleSlice=createSlice({
  name:"schedule",
  initialState:init,
  reducers:{
    schedulesAddItem:(state,{payload})=> ({...state,isLoading:false,items:[...state.items,payload]}),
    schedulesSetLoading:(state)=>({...state,isLoading:true}),
    schedulesFetchItem:(state,{payload})=>({...state,isLoading:false,items:payload})
  }
})

export const { schedulesFetchItem, schedulesSetLoading ,schedulesAddItem} = scheduleSlice.actions
export default scheduleSlice