import React from "react";
import { Typography } from "@material-ui/core";
import * as styles from "./style.css";
import dayjs from "dayjs";
import { isSameMonth, isFirstDay, isSameDay ,getMonth} from "../../service/calendar"


const CalendarElement = ({ day ,month}) => {
  const currentMonth = getMonth(month);
  const format = isFirstDay(day) ? "M月D日" : "D";
  const today = dayjs();
  const isCurrentMonth = isSameMonth(day, currentMonth);
  const textColor = isCurrentMonth ? "textPrimary" : "textSecondary";
  const isToday = isSameDay(day, today);
  return (
    <div className={styles.element}>
      <Typography
        className={styles.date}
        color={textColor}
        align="center"
        variant="caption"
        component="div"
        >
        <span className={isToday ? styles.today : ""}>
          {day.format(format)}
        </span>
      </Typography>
    </div>
  );
};


export default CalendarElement;