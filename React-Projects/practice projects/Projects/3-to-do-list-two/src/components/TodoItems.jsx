import TodoItem from "./TodoItem";
const TodoItems = ({todoItemsList}) => {
  return <div className="items-container">
  {todoItemsList.map((item) => (
    <TodoItem todoName={item.name} todoDate={item.dueDate}></TodoItem>
    ))}
  </div>
}

export default TodoItems;