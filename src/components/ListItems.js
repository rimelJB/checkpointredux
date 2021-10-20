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
            <label>
              <input
                className="check"
                type="checkbox"
                onClick={() =>
                  dispatch({ type: "taskState", payload: task.id })
                   }
              />
            </label>

            <h5 style={{ color: "white" }}> {task.name} </h5>
            <button
              style={{
                backgroundColor: "black",
                borderRadius: "8px",
                border: "solid 1px white",
                color: "white",
                width: "80px",
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
