import React from "react"
import { IconButton, Toolbar, Typography, withStyles ,Tooltip} from "@material-ui/core";
import ArrowBackIos from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIos from "@material-ui/icons/ArrowForwardIos";
import DehazeIcon from "@material-ui/icons/Dehaze";
import {useDispatch,useSelector} from "react-redux"
import calendarSlice from "../../redux/calendar/calendarSlice";
import { formatMonth, getMonth, getNextMonth, getPreviousMonth} from "../../service/calendar";
import {asyncSchedulesFetchItem} from "../../redux/schedules/effects"
import { DatePicker } from "@material-ui/pickers";
const StyledToolbar = withStyles({
  root: { padding: "0" }
})(Toolbar);

const StyledTypography = withStyles({
  root: { margin: "0 30px 0 10px" }
})(Typography);

const StyledDatePicker = withStyles({
  root: { marginLeft: 30 }
})(DatePicker);

const Navigation = () => {
  const calendar=useSelector(state=>state.calendar)
  const month =getMonth(calendar)
  const dispatch =useDispatch()
  const fetchSchedule = month => {
    dispatch(asyncSchedulesFetchItem(month));
  }
  const setMonth=(dayObj)=>{
    const month = formatMonth(dayObj)
    dispatch(calendarSlice.actions.calendarSetMonth(month))
    fetchSchedule(month)
  }
  const setNextMonth=()=>{
    const nextMonth=getNextMonth(calendar)
    setMonth(nextMonth)
  }
  const setPreviousMonth=()=>{
    const previousMonth=getPreviousMonth(calendar)
    setMonth(previousMonth)
  }
  return (
    <StyledToolbar>
      <IconButton>
        <DehazeIcon />
      </IconButton>
      <img src="/images/calendar_icon.png" width="40" height="40" />
      <StyledTypography color="textSecondary" variant="h5" component="h1">
        カレンダー
      </StyledTypography>
      <Tooltip title="前の月" placement="bottom">
        <IconButton size="small" onClick={setPreviousMonth}>
          <ArrowBackIos />
        </IconButton>
      </Tooltip>
      <Tooltip title="次の月" placement="bottom">
        <IconButton size="small" onClick={setNextMonth}>
          <ArrowForwardIos />
        </IconButton>
      </Tooltip>
      <StyledDatePicker
        value={month}
        onChange={setMonth}
        variant="inline"
        format="YYYY年 M月"
        animateYearScrolling
        disableToolbar
      />
    </StyledToolbar>
  );
};

export default Navigation