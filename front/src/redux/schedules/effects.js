import {schedulesFetchItem,schedulesSetLoading} from "./scheduleSlice";
import { get } from "../../service/api";
import { formatSchedule } from "../../service/schedule";


export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading());

  const result = await get(`schedules?month=${month}&year=${year}`);
  console.log(result)
  const formatedSchedule = result.map(r => formatSchedule(r));

  dispatch(schedulesFetchItem(formatedSchedule));
};