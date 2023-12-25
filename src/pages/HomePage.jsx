// rrd import
import { Link, useLoaderData } from "react-router-dom";
// react redux import
import { useSelector } from "react-redux";
// library import
import { toast } from "react-toastify";
// helper function import
import { fetchData, saveData } from "../helperFns";
// component import
import Intro from "../components/Intro";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

// loader function
export function homePageLoader() {
  const userName = fetchData("userName");
  return { userName };
}

// action function
export async function homePageAction({ request }) {
  const data = await request.formData();
  const { _action, ...formData } = Object.fromEntries(data);

  // New user submission
  if (_action === "newUser") {
    const { userName } = formData;
    try {
      // throw new Error();
      saveData("userName", userName);
      return toast.info(`Welcome, ${userName}.`);
    } catch (error) {
      throw new Error(
        "There was an error creating your account. Please try again."
      );
    }
  }
}

export default function HomePage() {
  const { userName } = useLoaderData();

  const todos = useSelector((state) => state.todos);
  const result = Object.groupBy(todos, ({ completed }) => completed);

  return (
    <>
      {userName ? (
        <div>
          {/* Home page heading */}
          <div className="home_heading">
            <h1 className="welcome_heading">
              Welcome back, <span className="accent">{userName}</span>
            </h1>
          </div>

          {/* Todo form */}
          <div className="addTodo_form_con">
            <details>
              <summary role="button">Add new todo</summary>
              <div>
                <TodoForm />
              </div>
            </details>
          </div>

          {/* Pending todo list */}
          {todos && todos.length === 0 ? (
            <div className="headings" style={{ textAlign: "center" }}>
              <h2>Yo!</h2>
              <p>Add some task in your todo list.</p>
            </div>
          ) : (
            <div className="home_todoList_con">
              <TodoList
                todos={result.false
                  ?.toSorted((a, b) => b.createdAt - a.createdAt)
                  .slice(0, 8)}
                listHeading="Currently pending todos"
                isOpen={true}
                viewAllTodoBtn={true}
              />

              {todos && todos.length > 8 && (
                <div className="viewAll_todo_btn">
                  <Link to="/todos" role="button">
                    View all Todos
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}
