import { createSlice } from "@reduxjs/toolkit"
const init = {
  item: null,
  isDialogOpen: false
};

const currentScheduleSlice=createSlice({
  name:"currentSchedule",
  initialState:init,
  reducers:{
    currentScheduleSetItem:(state,action)=>({...state, item:action.payload}),
    currentScheduleOpenDialog:(state)=>({...state,isDialogOpen:true}),
    currentScheduleCloseDialog:(state)=>({...state,isDialogOpen:false})
  }
})

export default currentScheduleSlice