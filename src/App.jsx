// rrd import
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// layout import
import MainLayout from "./layouts/MainLayout";
// pages import
import Home, { homeAction, homeLoader } from "./pages/Home";
import Error404 from "./pages/Error404";
import Error from "./pages/Error";
// actions import
import logoutAction from "./actions/logoutAction";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
        errorElement: <Error/>,
        loader: homeLoader,
        action: homeAction,
        id: "home",
      },
      {
        path: "logout",
        action: logoutAction,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
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
