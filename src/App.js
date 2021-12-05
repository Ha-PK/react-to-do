import { useState } from "react";
import Todo from "./Todo";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([
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
  ]);
  const [input, setInput] = useState("");

  function handleClick(i) {
    const newTodos = todos.slice();
    newTodos[i].isCompleted = !todos[i].isCompleted;

    setTodos(newTodos);
  }

  function handleInput(e) {
    setInput(e.target.value);
  }

  function addTodo(e) {
    e.preventDefault();

    if (input === "") return;

    setTodos([
      ...todos,
      {
        text: input,
        isCompleted: false,
      },
    ]);
    setInput("");
  }

  function handleRemove(i) {
    setTodos([...todos.slice(0, i), ...todos.slice(i + 1)]);
  }

  function renderTodo(todo, i) {
    return (
      <Todo
        key={i}
        text={todo.text}
        isCompleted={todo.isCompleted}
        onClick={() => handleClick(i)}
        onRemove={() => handleRemove(i)}
      />
    );
  }

  return (
    <div>
      <form action="" method="POST" onSubmit={(e) => addTodo(e)}>
        <input
          type="text"
          placeholder="Add to-do.."
          onChange={(e) => handleInput(e)}
          value={input}
        />
        <button type="submit">Add To-do</button>
      </form>

      <ul>{todos.map((todo, i) => renderTodo(todo, i))}</ul>
    </div>
  );
}

export default App;
