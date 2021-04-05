import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo } from "../rudux/actions/addTodo";

class Inputfield extends Component {
  state = {
    todo: "",
  };

  handleChange = (e) => {
    this.setState({ todo: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.todo)
    this.setState({ todo: "" })
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h1>To Do List</h1>
          <input
            type="text"
            name="todo"
            value={this.state.todo}
            placeholder="enter your todo list"
            onChange={this.handleChange}
          />
          <button>Add Todo</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  addTodo: todo => dispatch(addTodo(todo)),
});

export default connect(null, mapDispatchToProps)(Inputfield);
