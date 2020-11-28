import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  DialogActions,
  Grid,
  Typography
} from "@material-ui/core";
import {
  Close, LocationOnOutlined, 
  NotesOutlined,
  DeleteOutlineOutlined
} from "@material-ui/icons";
import currentScheduleSlice from "../../redux/currentSchedule/currentScheduleSlice"
import { useSelector, useDispatch } from "react-redux"
import { asyncSchedulesDeleteItem } from "../../redux/schedules/effects";

import styles from "./style.css";

const spacer = (top, bottom) => ({
  margin: `${top}px 0 ${bottom}px 0`
});

const CurrentScheduleDialog = () => {
  const schedule = useSelector(state => state.currentSchedule)
  const schedules = useSelector(state => state.schedule)
  const item = schedule.item
  const isDialogOpen = schedule.isDialogOpen
  const dispatch = useDispatch()
  const closeDialog = () => {
    dispatch(currentScheduleSlice.actions.currentScheduleCloseDialog())
  }

  const deleteItem = () => {
    const id  = item.id
    dispatch(asyncSchedulesDeleteItem(id,schedules))
    dispatch(currentScheduleSlice.actions.currentScheduleCloseDialog())
  }
  return (
    <Dialog open={isDialogOpen} onClose={closeDialog} maxWidth="xs" fullWidth>
      <DialogActions>
        <div className={styles.closeButton}>
          <IconButton onClick={deleteItem} size="small">
            <DeleteOutlineOutlined />
          </IconButton>
          <IconButton onClick={closeDialog} size="small">
            <Close />
          </IconButton>
        </div>
      </DialogActions>

      <DialogContent>
        {item && (
          <>
            <div>
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 30)}
              >
                <Grid item>
                  <span className={styles.box}></span>
                </Grid>
                <Grid item xs={10}>
                  <Typography variant="h5" component="h2">
                    {item.title}
                  </Typography>
                  <Typography color="textSecondary">
                    {item.date.format("M月 D日")}
                  </Typography>
                </Grid>
              </Grid>
            </div>

            {item.location && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 4)}
              >
                <Grid item>
                  <LocationOnOutlined />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{item.location}</Typography>
                </Grid>
              </Grid>
            )}
            {item.description && (
              <Grid
                container
                spacing={1}
                alignItems="center"
                justify="space-between"
                style={spacer(0, 4)}
              >
                <Grid item>
                  <NotesOutlined />
                </Grid>
                <Grid item xs={10}>
                  <Typography>{item.description}</Typography>
                </Grid>
              </Grid>
            )}
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default CurrentScheduleDialog;