import React from "react";
import Todo from "./Todo";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {
          text: "Đi chợ",
          isCompleted: true,
        },
        {
          text: "Nấu cơm",
          isCompleted: true,
        },
        {
          text: "Rửa bát",
          isCompleted: false,
        },
        {
          text: "Giặt đồ",
          isCompleted: false,
        },
      ],
      input: "",
    };
  }

  handleClick(i) {
    const todos = this.state.todos.slice();
    todos[i].isCompleted = !todos[i].isCompleted;

    this.setState({
      todos: todos,
    });
  }

  handleInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  addTodo(e) {
    e.preventDefault();
    const todos = this.state.todos.slice();
    const text = this.state.input;

    if (text === "") return;

    this.setState({
      todos: [
        ...todos,
        {
          text: text,
          isCompleted: false,
        },
      ],
      input: "",
    });
  }

  handleRemove(i) {
    const todos = [
      ...this.state.todos.slice(0, i),
      ...this.state.todos.slice(i + 1),
    ];

    this.setState({
      todos: todos,
    });
  }

  renderTodo(todo, i) {
    return (
      <Todo
        key={i}
        text={todo.text}
        isCompleted={todo.isCompleted}
        onClick={() => this.handleClick(i)}
        onRemove={() => this.handleRemove(i)}
      />
    );
  }

  render() {
    return (
      <div>
        <form action="" method="POST" onSubmit={(e) => this.addTodo(e)}>
          <input
            type="text"
            placeholder="Add to-do.."
            onChange={(e) => this.handleInput(e)}
            value={this.state.input}
          />
          <button type="submit">Add To-do</button>
        </form>
        <ul>{this.state.todos.map((todo, i) => this.renderTodo(todo, i))}</ul>
      </div>
    );
  }
}

export default App;
