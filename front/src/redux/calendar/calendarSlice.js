import {createSlice} from "@reduxjs/toolkit"
import dayjs from "dayjs";
import {formatMonth} from "../../service/calendar"

const day = dayjs();

const init = formatMonth(day)

const calendarSlice=createSlice({
  name:"calendar",
  initialState:init,
  reducers:{
    calendarSetMonth:(state,action)=>action.payload
  }
})
export default calendarSlice