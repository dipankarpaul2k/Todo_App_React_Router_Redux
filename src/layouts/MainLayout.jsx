// rrd import
import { Outlet, useRouteLoaderData } from "react-router-dom";
// component import
import NavBar from "../components/NavBar";

export default function MainLayout() {
  const { userName } = useRouteLoaderData("home");
  

  return (
    <>
      <div className="container main_layout_container">
        <header className="header">
          <NavBar userName={userName} />
        </header>
        <div className="main_content">
          <Outlet />
        </div>
        <footer className="footer">
          <p>&copy; Made by Dipankar Paul.</p>
          <p>React | React-Router-Dom | Redux-Toolkit</p>
        </footer>
      </div>
    </>
  );
}
