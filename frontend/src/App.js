
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import { HashRouter,Routes, Route } from 'react-router-dom';
import CreateTask from './components/CreateTask';
import TaskList from './components/TaskList';
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs';
import EditTask from './components/EditTask';


// import Home from "./components/Home/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

// import { auth } from "./firebase";



function App() {
  return (
    <section class="backs"> 
      <HashRouter>
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/create-task" element={<CreateTask/>}/>
        <Route path="/task-list" element={<TaskList/>}/>
        <Route path="/about-us" element={<AboutUs/>}/>
        <Route path="/contact-us" element={<ContactUs/>}/>
        <Route path="/edit-task/:id" element={<EditTask/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
   
    </HashRouter></section>
   
  );
}

export default App;
