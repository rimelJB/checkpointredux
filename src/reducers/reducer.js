import { v4 as uuidv4 } from "uuid";
const initialState = {
  tasks: [
    { id: uuidv4(), name: "First Task", done: false },
    { id: uuidv4(), name: "Second Task", done: false },
    { id: uuidv4(), name: "Third Task", done: false },
    { id: uuidv4(), name: "Forth Task", done: false },
    { id: uuidv4(), name: "Fifth Task", done: false },
    { id: uuidv4(), name: "6th Task", done: false },
    { id: uuidv4(), name: "7th Task", done: false },
    { id: uuidv4(), name: "8th Task", done: false },
    { id: uuidv4(), name: "9th Task", done: false }
  ],
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "add":
      return {
        tasks: [...state.tasks, { id: uuidv4(), name: payload, done: false }],
      };
    case "del":
      return { tasks: [...state.tasks].filter((task) => task.id !== payload) };
    case "taskState":
      return {
        tasks: [...state.tasks].map((task) =>
          task.id === payload ? { ...task, done: !task.done } : task
        ),
      };
    default:
      return state;
  }
};

export default reducer;
