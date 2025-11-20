import React from "react";
import AddTodo from "../ui/AddTodo";
import TodoList from "../ui/TodoList";

const Todo = () => {
  return (
    <div className="mt-12 px-[100px]">
      <AddTodo />
      <TodoList />
    </div>
  );
};

export default Todo;
