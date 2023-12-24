// rrd import
import { useLoaderData } from "react-router-dom";
// library import
import { toast } from "react-toastify";
// helper function import
import { fetchData, saveData } from "../helperFns";
// component import
import Intro from "../components/Intro";
import TodoForm from "../components/TodoForm";

// loader function
export function homeLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export async function homeAction({ request }) {
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

export default function Home() {
  const { userName } = useLoaderData();

  return (
    <>
      {userName ? (
        <div>
          <h1 className="welcome_heading">
            Welcome back, <span className="accent">{userName}</span>
          </h1>
          <details>
            <summary role="button">Add new todo</summary>
            <div>
              <TodoForm />
            </div>
          </details>
        </div>
      ) : (
        <Intro />
      )}
    </>
  );
}
