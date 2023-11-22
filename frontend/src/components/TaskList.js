import Axios from "axios";
import { useEffect, useState } from "react";
import TaskListRows from "./TaskListRows";
function TaskList() {
  const [arr, setArr] = useState([]);
  useEffect(() => {
    Axios.get("http://localhost:4000/taskRoute/")
      .then((res) => {
        if (res.status === 200) {
          setArr(res.data);
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, []);

  const ListItems = () =>{
    return arr.map((val, ind)=>{
      return <TaskListRows obj={val}/>
    })
  }

  return (
    <div className="container my-4">
      <table class="table table-bordered ">
        <thead>
          <tr>
            <th class="text-center">Task</th>
            <th class="text-center">Description</th>
            <th class="text-center" >Action</th>
          </tr>
        </thead>
        <tbody>
          {ListItems()}
        </tbody>
      </table>
    </div>
  );
}
export default TaskList;
