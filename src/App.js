
import './App.css';
import './MyComponents/Header.js';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import TodoItem from "./MyComponents/Todo";
import AddTodo from './MyComponents/AddTodo';
import { useState } from 'react';
import React from 'react';
function App() {
  const onDelete = (todo) => {
    // console.log("I am in delete func",todo);
    setTasks(tasks.filter((e) => { return e !== todo })
    );
  }
  const addTodo = (title,desc) =>
  {
    console.log("Adding to todo",title,desc);
    let sno=1;
    if(tasks.length>0)
    sno = tasks[tasks.length-1].sno+1;
    const mytodo= {
      sno: sno,
      taskName:title,
      taskDesc:desc,
      todo_date: date.toDateString()
    }
    setTasks([...tasks,mytodo]);
  }
  const date= new Date();
  //Stores the todo tasks, 3 default values
  const [tasks, setTasks] = useState(
    [
      {
        sno: 1,
        taskName: "Go to Market",
        taskDesc: "To get milk",
        todo_date: date.toDateString()
      },
      {
        sno: 2,
        taskName: "Go to Mall",
        taskDesc: "To get phone",
        todo_date: date.toDateString()
      },
      {
        sno: 3,
        taskName: "Go to Shop",
        taskDesc: "To get grocery",
        todo_date: date.toDateString()
      }
    ]
  );
  return (
    <>
      <div className="container-center">
      <Header />
      <AddTodo addTodo={addTodo}/>
      <TodoItem tasks={tasks} onDelete={onDelete} />
      <Footer />
      </div>

    </>
  );
}

export default App;
