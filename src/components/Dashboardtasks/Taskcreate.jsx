import React, { useState } from 'react';

import './Taskcreate.css';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import { Nav } from 'react-bootstrap';
// import TaskCreation from './Dashboardtasks/Taskcreate';
//import TaskProgress from './Dashboardtasks/Taskprogress';
function TaskCreation() {

  const [taskName, setTaskName] = useState('');
  const [taskDate, setTaskDate] = useState('');
  const [assignee, setAssignee] = useState('');
  const [priority, setPriority] = useState('');

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskDateChange = (event) => {
    setTaskDate(event.target.value);
  };

  const handleAssigneeChange = (event) => {
    setAssignee(event.target.value);
  };

  const handlePriorityChange = (event) => {
    setPriority(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // You can perform further actions with the task details here,
    // such as sending them to an API or storing them in your state.

    // For now, let's display the task details in the console.
    console.log('Task Name:', taskName);
    console.log('Task Date:', taskDate);
    console.log('Assignee:', assignee);
    console.log('Priority:', priority);
  };

  return (
    <div>
        <nav className="dashboard">
      <h1>Task Dashboard</h1>
      <ul className="nav-links">
        <li>
          <Link to="/taskcreation">Create Task</Link>
        </li>
        <li>
          <Link to="/taskprogress">Track Progress</Link>
        </li>
      </ul>
    </nav>
    <div className="task-card">
      <h2>Create a New Task</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Task Name:</label>
          <input
            type="text"
            value={taskName}
            onChange={handleTaskNameChange}
            required
          />
        </div>
        <div>
          <label>Date:</label>
          <input
            type="date"
            value={taskDate}
            onChange={handleTaskDateChange}
            required
          />
        </div>
        <div>
          <label>Assign To:</label>
          <input
            type="text"
            value={assignee}
            onChange={handleAssigneeChange}
            required
          />
        </div>
        <div>
          <label>Priority:</label>
          <select value={priority} onChange={handlePriorityChange} required>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button type="submit">Create Task</button>
      </form>
    </div>
    </div>
  );
}

export default TaskCreation;
