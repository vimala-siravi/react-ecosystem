import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";

const TodoList = ({ todos = [{ text: "Hello" }] }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => {
        return <TodoListItem todo={todo} />;
      })}
    </div>
  );
};

export default TodoList;
