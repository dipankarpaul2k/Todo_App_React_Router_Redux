// rrd import
import { Outlet, useLoaderData } from "react-router-dom";
// component import
import NavBar from "../components/NavBar";
import { fetchData } from "../helperFns";

export function MainLayoutLoader() {
  const userName = fetchData("userName");
  return { userName };
}

export default function MainLayout() {
  const { userName } = useLoaderData();

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
