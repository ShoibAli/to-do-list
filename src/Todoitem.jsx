import { useRef } from "react";
import { IoMdAddCircle } from "react-icons/io";

export default function Todoitem({ onNewitem }) {
  const todonameElement = useRef("");
  const duedateElement = useRef("");

  const handlebutton = (event) => {
    event.preventDefault();
    const todoname = todonameElement.current.value;
    const duedate = duedateElement.current.value;
    todonameElement.current.value = "";
    duedateElement.current.value = "";
    onNewitem(todoname, duedate);
  };

  return (
    <>
      <form className="container" onSubmit={handlebutton}>
        <div className="row">
          <div className="col-6">
            <input
              type="text"
              ref={todonameElement}
              placeholder="enter todo here"
            />
          </div>
          <div className="col-4">
            <input
              className="input-group input-group-lg"
              type="datetime-local"
              ref={duedateElement}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-success new-btn">
              <IoMdAddCircle />
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
