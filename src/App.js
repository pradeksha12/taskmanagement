import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
// import Loginpg from "./components/Loginpg";
// import Register from "./components/Register";
import TaskAssign from "./components/Dashboardtasks/TaskAssign";
import TaskCreation from "./components/Dashboardtasks/Taskcreate";
import TaskPriority from "./components/Dashboardtasks/Taskpriority";
import TaskProgress from "./components/Dashboardtasks/Taskprogress";
import CalendarView from "./components/Dashboardtasks/Taskcalendar";
import Dashboard from "./components/Dashboard"; 
import Mainlogin from "./components/Mainlogin";
import Adminlogin from"./components/Login/Adminlogin";
import Emplogin from "./components/Login/Emplogin";
import Adminregister from "./components/Login/Adminregister";
import Empregister from "./components/Login/Empregister";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/login" element={<Loginpg />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/register" element={<Register />} /> */}
          <Route path="/taskassign" element={<TaskAssign />} />
          <Route path="/taskcreation" element={<TaskCreation />} />
          <Route path="/taskpriority" element={<TaskPriority />} />
          <Route path="/taskprogress" element={<TaskProgress />}/> 
          <Route path="/mainlogin" element={<Mainlogin/>}/>
          <Route path="/adminlogin" element={<Adminlogin/>}/>
          <Route path="/emplogin" element={<Emplogin/>}/>
          <Route path="/adminregister" element={<Adminregister/>}/>
          <Route path="/empregister" element={<Empregister/>}/>
          <Route path="/calendarview" element={<CalendarView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
