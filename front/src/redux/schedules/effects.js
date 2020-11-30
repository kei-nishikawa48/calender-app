import { schedulesSetLoading, schedulesFetchItem, schedulesAddItem, schedulesDeleteItem, schedulesAsyncFailure} from "./scheduleSlice";
import { get, post, deleteRequest } from "../../service/api";
import { formatSchedule } from "../../service/schedule";



export const asyncSchedulesFetchItem = ({ month, year }) => async dispatch => {
  dispatch(schedulesSetLoading());
  try{
    // const result = await get(`schedules`);
    const result = await get(`schedules?month=${month}&year=${year}`);
    const formatedSchedule = result.map(r => formatSchedule(r));
    dispatch(schedulesFetchItem(formatedSchedule));
  }
  catch(er){
    console.error(er)
    dispatch(schedulesAsyncFailure(er.message));
  }
};

export const asyncSchedulesAddItem = schedule => async dispatch => {
  // loading: true にする
  dispatch(schedulesSetLoading());
  try{
    const body = { ...schedule, date: schedule.date.toISOString() };
    const result = await post("schedules", body);
  
    const newSchedule = formatSchedule(result);
    dispatch(schedulesAddItem(newSchedule));
  }
  catch(er){
    console.error(er)
    dispatch(schedulesAsyncFailure(er.message));
  }
};


export const asyncSchedulesDeleteItem = (id,nowState) => async (dispatch) => {
  dispatch(schedulesSetLoading());
  try{
    const currentSchedules = nowState.items;
    await deleteRequest(`schedules/${id}`);
  
    // 成功したらローカルのstateを削除
    const newSchedules = currentSchedules.filter(s => s.id !== id);
    dispatch(schedulesDeleteItem(newSchedules));
  }
  catch(er){
    console.error(er)
    dispatch(schedulesAsyncFailure(er.message));
  }
};