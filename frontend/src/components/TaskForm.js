import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import "../styles/TaskForm.css";
import TaskList from "./TaskList";
function TaskForm(props) {
  const [task, setTask] = useState(props.tasksValue);
  const [dis, setDis] = useState(props.disValue);
  // const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedTime, setSelectedTime] = useState(null);

  const arr = [task, dis];

  const handleClick = () => {
    props.getState(arr);
  };

  return (
    <section>
      <div
        className="form my-4"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h2 className="backs">
          Create your own task and become <b>productive</b> ☺️
        </h2>
        <input
          defaultValue={props.tasksValue}
          onChange={(event) => setTask(event.target.value)}
          placeholder="Add task..."
          className="form-control"
          style={{ width: "70vw" }}
          required
        />
        <textarea
          defaultValue={props.disValue}
          rows="4"
          cols="50"
          onChange={(event) => setDis(event.target.value)}
          placeholder="Details, links or ..."
          className="form-control"
          style={{ width: "70vw", height: "10vh", margin: "12px auto" }}
        />
        <h6 style={{ position: "relative", right: "14.5rem" }}>
          {/* #Select a time and date....{" "} */}
        </h6>
        <div
          style={{
            width: "70vw",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          {/* <DatePicker
            className="form-control"
            selected={selectedDate}
            // onChange={(date) => setSelectedDate(date)}
            placeholderText="Select date"
            dateFormat="dd/MM/yyyy"
          /> */}
          {/* <input
            className="form-control"
            style={{ width: "8.2rem" }}
            type="time"
            onChange={(event) => setSelectedTime(event.target.value)}
          /> */}
        </div>
        <div className="wave-container">
          <button onClick={handleClick} type="submit" className="btn">
            <FontAwesomeIcon icon={faPlus} className="fa-plus" size="2x" />
            <div className="wave"></div>
          </button>
        </div>
      </div>
      <TaskList />
    </section>
  );
}

export default TaskForm;
