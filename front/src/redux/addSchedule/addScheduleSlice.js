import {createSlice} from "@reduxjs/toolkit"
const init = {
  form: {
    title: "",
    description: "",
    date: "",
    location: ""
  },
  isDialogOpen: false
};

const addScheduleSlice=createSlice({
  name:"addSchedule",
  initialState:init,
  reducers:{
    addScheduleSetValue:(state,action)=>( {...state,form:{...state.form, ...action.payload}}),
    addScheduleOpenDialog:(state)=>({...state,isDialogOpen:true}),
    addScheduleCloseDialog:()=>init
  }
})

export default addScheduleSlice