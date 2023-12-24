import { useSelector } from "react-redux";

export default function TodoList() {
  const todos = useSelector((state) => state.todos);
  const result = Object.groupBy(todos, ({ completed }) => completed);
  const pendingTodos = result.false?.toSorted(
    (a, b) => b.createdAt - a.createdAt
  );
  if (todos.length === 0) {
    return (
      <div className="headings" style={{ textAlign: "center" }}>
        <h2>Yo!</h2>
        <p>Add some task in your todo list.</p>
      </div>
    );
  } else {
    return (
      <>
        <div>
          <p>todo list</p>
        </div>
      </>
    );
  }
}
