import { MdDelete } from "react-icons/md";

export default function Todoitem1({ Todoname, Tododate, onDeleteitem }) {
  return (
    <>
      <div className="newitems">
        <div className="row new-row">
          <div className="col-6">{Todoname}</div>
          <div className="col-4">{Tododate}</div>
          <div className="col-2">
            <button
              type="button"
              className="btn btn-danger new-btn"
              onClick={() => onDeleteitem(Todoname)}
            >
              <MdDelete />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
