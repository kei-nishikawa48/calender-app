import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit"
import calendarSlice from "./calendar/calendarSlice"
import addScheduleSlice from "./addSchedule/addScheduleSlice"
import scheduleSlice from "./schedules/scheduleSlice"
import currentScheduleSlice from "./currentSchedule/currentScheduleSlice"

const middleware = getDefaultMiddleware({ serializableCheck: false });

const Reducer = combineReducers({
  calendar: calendarSlice.reducer,
  addSchedule:addScheduleSlice.reducer,
  schedule:scheduleSlice.reducer,
  currentSchedule:currentScheduleSlice.reducer
})

const store = configureStore({
  reducer:Reducer,
  middleware
})
export default store