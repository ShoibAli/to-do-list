import Todoitem from "./Todoitem";
import Todoitem1 from "./Todoitem1";
import Todostore from "./Todostore";
import WelcomeMessage from "./WelcomeMessage";
import "./app.css";
import { useState } from "react";

function App() {
  const arritems = [
    {
      Todoname: "buy milk",
      duedate: 4 / 10 / 2023,
    },
    {
      Todoname: "Gotocollege",
      duedate: 4 / 10 / 2023,
    },
    {
      Todoname: "Just focus",
      duedate: 4 / 10 / 2023,
    },
  ];

  const [todoitem, setTodoitem] = useState([]);

  const handelTodoitem = (itemname, itemduedate) => {
    const new_arr = [...todoitem, { Todoname: itemname, duedate: itemduedate }];
    setTodoitem(new_arr);
  };

  const handelDeleteItem = (itemname) => {
    const newArr = todoitem.filter((item) => item.Todoname !== itemname);
    setTodoitem(newArr);
  };

  return (
    <center>
      <h1>ToDo List</h1>
      <Todoitem onNewitem={handelTodoitem} />
      {todoitem.length == 0 && <WelcomeMessage />}
      <Todostore todoitem={todoitem} onDeleteitem={handelDeleteItem} />
    </center>
  );
}

export default App;
