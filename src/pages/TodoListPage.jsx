// react redux import
import { useSelector } from "react-redux";
//
import TodoList from "../components/TodoList";

export default function TodoListPage() {
  const todos = useSelector((state) => state.todos);
  const result = Object.groupBy(todos, ({ completed }) => completed);
  // console.log("result: ", result);

  return (
    <>
      <div className="todo_list_con">
        <h1>All todos</h1>
        <div className="pending_list_con">
          <TodoList
            todos={result.false?.toSorted((a, b) => b.createdAt - a.createdAt)}
            listHeading="Currently pending todos"
            isOpen={true}
          />
        </div>
        <div className="completed_list_con">
          <TodoList
            todos={result.true?.toSorted((a, b) => b.createdAt - a.createdAt)}
            listHeading="Completed todos"
            isOpen={true}
          />
        </div>
      </div>
    </>
  );
}
