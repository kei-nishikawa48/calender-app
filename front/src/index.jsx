import React from "react";
import ReactDOM from "react-dom";
import CalendarBoard from "./components/CalendarBoard";
import dayjs from "dayjs";
import "dayjs/locale/ja";
import { Provider } from "react-redux";
import store from "./redux/store"
import Navigation from "./components/Navigation/presentation"
import DayjsUtils from "@date-io/dayjs";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import AddScheduleDialog from "./components/AddScheduleDialog/presentation"
dayjs.locale("ja");


const App = () =>(
   <Provider store={store}>
    <MuiPickersUtilsProvider utils={DayjsUtils}>
    <Navigation />
    <CalendarBoard />
    <AddScheduleDialog />
    </MuiPickersUtilsProvider>
  </Provider>
)


ReactDOM.render(<App />, document.getElementById("root"));
