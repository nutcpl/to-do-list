import React from "react";
import { connect } from "react-redux";
import { delTodo } from "../rudux/actions/addTodo";
import "../stylesheets/todo.css"

function Todo({ todo, idx, delTodo }) {
  return (
    <div className="container" style={{display:'flex', flexDirection:'row', justifyContent:'space-between', border:'5px solid blue'}}>
      <div>{todo}</div>
      <div 
      style={{cursor:"pointer"}} 
      onClick={() => delTodo(idx)}> 
      x 
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
    delTodo: key => dispatch(delTodo(key))
})

export default connect(null, mapDispatchToProps)(Todo);
