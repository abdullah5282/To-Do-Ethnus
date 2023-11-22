import { useParams } from "react-router-dom";
import TaskForm from "./TaskForm";
import { useEffect, useState } from "react";
import Axios from "axios";

function EditTask() {
  const { id } = useParams();
  const [initialValue, setInitialValue] = useState({ tasks: "", dis: "" });
  const [newData, setNewData] = useState()
  useEffect(() => {
    Axios.get("http://localhost:4000/taskRoute/update-task/" + id)
      .then((res) => {
        if (res.status === 200) {
          const { tasks, dis } = res.data;
          setInitialValue({ tasks, dis });
        } else {
          Promise.reject();
        }
      })
      .catch((err) => alert(err));
  }, [id]);

  const getState = (childData) =>{
    setNewData(childData)
  }

  const handleSubmit = ()=>{
    const data = {tasks: newData[0],dis:newData[1]}
    Axios.put("http://localhost:4000/taskRoute/update-task/"+id,data)
    .then((res)=>{
      if(res.status === 200){
        alert("Record update successfully")
        window.location.reload();
      }
      else{
        Promise.reject()
      }
    })
    .catch((err)=>alert(err))
  }


  return (
    <form onSubmit={handleSubmit}>
      <TaskForm 
      getState = {getState}
      tasksValue={initialValue.tasks} disValue={initialValue.dis} />
    </form>
  );
}

export default EditTask;




