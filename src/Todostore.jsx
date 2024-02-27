import Todoitem1 from "./Todoitem1";

export default function Todostore({ todoitem, onDeleteitem }) {
  return (
    <div className="container">
      {todoitem.map((item) => (
        <Todoitem1
          key={item.Todoname}
          Todoname={item.Todoname}
          Tododate={item.duedate}
          onDeleteitem={onDeleteitem}
        />
      ))}
    </div>
  );
}
