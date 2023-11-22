import Axios from 'axios'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom'


 function TaskListRows(props) {
  const {_id,tasks, dis} = props.obj;
  const handleClick =()=>{
Axios.delete("http://localhost:4000/taskRoute/delete-task/"+_id)
.then((res)=>{
  if(res.status === 200){
    alert("Record deleted successfully");
    window.location.reload();
  }
  else{
    Promise.reject()
  }
})
.catch((err)=>alert(err))
  }
  return (
    <tr>
      <td>{tasks}</td>
      <td>{dis}</td>
      <td>
        <button class="btn">
          <Link class="text-decoration-none text-dark"  to={"/edit-task/"+_id}> <FontAwesomeIcon icon={faPenToSquare} /></Link>
         </button>
        <button onClick={handleClick} class="btn"><FontAwesomeIcon icon={faTrash} /></button>
      </td>
    </tr>
  )
}
export default TaskListRows;