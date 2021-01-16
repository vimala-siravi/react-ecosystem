import React from "react";
import TodoListItem from "./TodoListItem";
import NewTodoForm from "./NewTodoForm";
import "./TodoList.css";
import { connect } from "react-redux";
import { removeTodo } from "./actions";

const TodoList = ({ todos = [], onRemovePressed }) => {
  return (
    <div className="list-wrapper">
      <NewTodoForm />
      {todos.map((todo) => {
        return <TodoListItem todo={todo} onRemovePressed={onRemovePressed} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => ({
  todos: state.todos
});

const mapDispatchToProps = (dispatch) => ({
  onRemovePressed: (text) => dispatch(removeTodo(text))
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
