// react redux import
import { useSelector } from "react-redux";
//
import TodoList from "../components/TodoList";

export default function TodoListPage() {
  const todos = useSelector((state) => state.todos);
  const completed = Object.groupBy(todos, ({ completed }) => completed);
  const pinned = Object.groupBy(todos, ({ pinned }) => pinned);

  return (
    <>
      <div className="todo_list_con">
        <h1>All todos</h1>
        {/* Pinned todo list */}
        <div className="pinned_list_con">
          <TodoList
            todos={pinned.true?.toSorted((a, b) => b.createdAt - a.createdAt)}
            listHeading="Pinned Todos"
            isOpen={true}
          />
        </div>

        {/* Active todo list */}
        <div className="pending_list_con">
          <TodoList
            todos={completed.false?.toSorted(
              (a, b) => b.createdAt - a.createdAt
            )}
            listHeading="Active Todos"
            isOpen={true}
          />
        </div>
        
        {/* Completed todo list */}
        <div className="completed_list_con">
          <TodoList
            todos={completed.true?.toSorted(
              (a, b) => b.createdAt - a.createdAt
            )}
            listHeading="Completed Todos"
            isOpen={true}
          />
        </div>
      </div>
    </>
  );
}
