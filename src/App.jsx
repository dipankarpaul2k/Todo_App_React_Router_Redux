// rrd import
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// actions import
import logoutAction from "./actions/logoutAction";
// layout import
import MainLayout, { MainLayoutLoader } from "./layouts/MainLayout";
// pages import
import HomePage, { homePageAction, homePageLoader } from "./pages/HomePage";
import NotFoundPage from "./pages/error/NotFoundPage";
import ErrorPage from "./pages/error/ErrorPage";
import TodoListPage from "./pages/TodoListPage";
import TodoItemPage from "./pages/TodoItemPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: MainLayoutLoader,
    children: [
      {
        index: true,
        element: <HomePage />,
        errorElement: <ErrorPage />,
        loader: homePageLoader,
        action: homePageAction,
        id: "home",
      },
      {
        path: "logout",
        action: logoutAction,
      },
      {
        path: "todos",
        children: [
          {
            index: true,
            element: <TodoListPage />,
            errorElement: <ErrorPage />,
          },
          {
            path: ":id",
            element: <TodoItemPage />,
            errorElement: <ErrorPage />,
          },
        ],
      },
    ],
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
