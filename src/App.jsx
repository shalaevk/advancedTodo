import { useState } from "react";
import "./App.css";

import { Filter } from "./todoComponents/Filter";
import { Todos } from "./todoComponents/Todos";
import { AddTask } from "./todoComponents/AddTask";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="text-6xl text-center">Todo List</h1>
      <AddTask />
      <Filter />
      <div className="w-3/4 m-auto mt-8">
        <Todos />
        <Todos />
        <Todos />
        <Todos />
      </div>
    </>
  );
}

export default App;
