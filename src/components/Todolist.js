import React from "react";
import "../stylesheets/todolist.css"
import { connect } from "react-redux";
import Todo from "./Todo";

function Todolist({ todos }) {
  return (
    <div>
      <div className="container" style={{display:'flex', flexDirection:'column'}}>
        {todos.map((todo, index) => (
          <Todo key={index} todo={todo} idx={index} />
        ))}
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  todos: state.todos,
});

export default connect(mapStateToProps)(Todolist);
