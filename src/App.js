import AddItems from "./components/AddItems";
import ListItems from "./components/ListItems";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 style={{ marginLeft: "40%", color: "White", fontFamily: "Cursive" }}>
        My To Do List
      </h1>
      <ListItems />
      <br />
      <AddItems />
      <br />
    </div>
  );
}

export default App;
