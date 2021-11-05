function Todo(props) {
  const className = props.isCompleted ? "todo is-completed" : "to-do";
  return (
    <li>
      <span className={className} onClick={props.onClick}>
        {props.text}
      </span>
      &nbsp;&nbsp;&nbsp;
      <button type="button" onClick={props.onRemove}>
        Xoá
      </button>
    </li>
  );
}

export default Todo;
