import React from "react";
import { useSelector, useDispatch } from "react-redux";

const ListItems = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.reducer.tasks);
  return (
    <div>
      {tasks.map((task) => {
        return (
          <div
            key={task.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              backgroundColor: "#760797bb",
              maxWidth: "50%",
              padding: "10px",
              margin: "10px",
              borderRadius: "8px",
              marginLeft: "25%",
            }}
          >
            <input
              type="checkbox"
              onClick={() => dispatch({ type: "taskState", payload: task.id })}
            />
            <h5 style={{ color: "white" }}> {task.name} </h5>
            <button
              style={{
                backgroundColor: "#0ddbaec0",
                borderRadius: "8px",
                color: "white",
                fontWeight:"bold"
              }}
              onClick={() => dispatch({ type: "del", payload: task.id })}
            >
              Delete
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ListItems;
