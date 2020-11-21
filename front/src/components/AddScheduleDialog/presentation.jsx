import React from "react";
import { Dialog, DialogContent } from "@material-ui/core";
import {useSelector,useDispatch} from "react-redux"
import addScheduleSlice from "../../redux/addSchedule/addScheduleSlice"


const AddScheduleDialog = () => {
  const dispatch = useDispatch()
  const isDialogOpen=useSelector(state=>state.addSchedule.isDialogOpen)
  const closeDialog = () => {
    dispatch(addScheduleSlice.actions.addScheduleCloseDialog())
  }
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog}  maxWidth="xs" fullWidth>
      <DialogContent>dialog</DialogContent>
    </Dialog>
  );
};

export default AddScheduleDialog;