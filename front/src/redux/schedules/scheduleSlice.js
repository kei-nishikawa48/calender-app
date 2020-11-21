import { createSlice } from "@reduxjs/toolkit"

const init ={
  items:[],
  isLoading:false
}

const scheduleSlice=createSlice({
  name:"schedule",
  initialState:init,
  reducers:{
    scheduleAddItem:(state,action)=> ({...state,items:[{...state.items,...action.payload,id:state.items.length+1}]})
  }
})

export default scheduleSlice