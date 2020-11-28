import { schedulesSetLoading, schedulesFetchItem, schedulesAddItem, schedulesDeleteItem} from "./scheduleSlice";
import { get, post, deleteRequest } from "../../service/api";
import { formatSchedule } from "../../service/schedule";



export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading());

  const result = await get(`schedules?month=${month}&year=${year}`);

  const formatedSchedule = result.map(r => formatSchedule(r));

  dispatch(schedulesFetchItem(formatedSchedule));
};

export const asyncSchedulesAddItem = schedule => async dispatch => {
  // loading: true にする
  dispatch(schedulesSetLoading());

  const body = { ...schedule, date: schedule.date.toISOString() };
  const result = await post("schedules", body);

  const newSchedule = formatSchedule(result);
  dispatch(schedulesAddItem(newSchedule));
};

export const asyncSchedulesDeleteItem = (id,nowState) => async (dispatch) => {
  dispatch(schedulesSetLoading());

  const currentSchedules = nowState.items;
  await deleteRequest(`schedules/${id}`);

  // 成功したらローカルのstateを削除
  const newSchedules = currentSchedules.filter(s => s.id !== id);
  dispatch(schedulesDeleteItem(newSchedules));
};