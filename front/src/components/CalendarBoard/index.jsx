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
const days = ["日", "月", "火", "水", "木", "金", "土"];



const CalendarBoard = () => {
  const dispatch = useDispatch()
  
  const month = useSelector(state => state.calendar)
  const calendar=createCalendar(month)
  const openAddScheduleDialog = () => {
    dispatch(addScheduleSlice.actions.addScheduleOpenDialog())
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
        {calendar.map(c => (
          <li key={c.toISOString()} onClick={openAddScheduleDialog} >
            <CalendarElement day={c} month={month} />
          </li>
        ))}
      </GridList>
    </div>
  );
};
export default CalendarBoard;