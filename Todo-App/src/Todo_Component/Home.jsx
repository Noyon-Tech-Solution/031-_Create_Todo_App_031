import React, { useState } from "react";
import Todos from "./Todos";
import NewTodo from "./NewTodo";

const previousTodos = ["Todo1", "Todo2", "Todo3"];

export default function Home() {
  const [todos, setTodos] = useState(previousTodos);

  const handleOnTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  return (
    <div className="home-div">
      <NewTodo onTodo={handleOnTodo} />
      <Todos todos={todos} />
    </div>
  );
}
