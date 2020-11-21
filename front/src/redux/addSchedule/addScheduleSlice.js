import {createSlice} from "@reduxjs/toolkit"
import dayjs from "dayjs";
const init = {
  form: {
    title: "",
    description: "",
    date: dayjs(),
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