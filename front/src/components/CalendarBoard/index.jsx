import React from "react";
import {
  GridList,
  Typography 
} from "@material-ui/core";
import * as styles from "./style.css";
import CalendarElement from "../CalendarElement/index"
import { useDispatch, useSelector } from "react-redux"
import {createCalendar} from "../../service/calendar"
import addScheduleSlice from "../../redux/addSchedule/addScheduleSlice"
import { setSchedules } from "../../service/schedule";
const days = ["日", "月", "火", "水", "木", "金", "土"];



const CalendarBoard = () => {
  const dispatch = useDispatch()
  
  const month = useSelector(state => state.calendar)
  const schedules=useSelector(state=>state.schedule.items)
  const calendar=setSchedules(createCalendar(month),schedules)
  const openAddScheduleDialog = (d) => {
    dispatch(addScheduleSlice.actions.addScheduleOpenDialog())
    dispatch(addScheduleSlice.actions.addScheduleSetValue({date:d}))
  }

  return (
    <div className={styles.container}>
      <GridList className={styles.grid} cols={7} spacing={0} cellHeight="auto">
        {days.map(d => (
          <li key={d}>
            <Typography
              className={styles.days}
              color="textSecondary"
              align="center"
              variant="caption"
              component="div"
            >
              {d}
            </Typography>
          </li>

        ))}
        {calendar.map(({date,schedules}) => 
          (
          <li key={date.toISOString()} onClick={()=>openAddScheduleDialog(date)} >
            <CalendarElement day={date} month={month} schedules={schedules}/>
          </li>
        ))}
      </GridList>
    </div>
  );
};
export default CalendarBoard;