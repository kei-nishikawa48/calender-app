import {combineReducers,configureStore} from "@reduxjs/toolkit"
import calendarSlice from "./calendar/calendarSlice"
import addScheduleSlice from "./addSchedule/addScheduleSlice"

const Reducer=combineReducers({
  calendar: calendarSlice.reducer,
  addSchedule:addScheduleSlice.reducer
})

const store =configureStore({
  reducer:Reducer
})
export default store