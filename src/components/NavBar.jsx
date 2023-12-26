// rrd import
import { Form, Link } from "react-router-dom";
// icons import
import {
  CircleHalf,
  GithubLogo,
  LinkedinLogo,
  SignOut,
} from "@phosphor-icons/react";
import { useState } from "react";

export default function NavBar({ userName }) {
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    if (theme === "dark") {
      setTheme("light");
      document.querySelector("html").setAttribute("data-theme", "light");
    } else {
      setTheme("dark");
      document.querySelector("html").setAttribute("data-theme", "dark");
    }
  }
  return (
    <>
      <nav className="nav_bar">
        <ul className="nav_logo">
          <li>
            <Link to="/" aria-label="Go to home" title="Nav logo text">
              <strong>Taskade</strong>
            </Link>
          </li>
        </ul>
        <ul className="nav_links">
          {/* LinkedIn link */}
          <li>
            <Link
              to="https://www.linkedin.com/in/iamdipankarpaul/"
              target="_blank"
              title="LinkedIn link"
            >
              <LinkedinLogo size={20} weight="fill" />
            </Link>
          </li>
          {/* Github link */}
          <li>
            <Link
              to="https://github.com/dipankarpaul2k"
              target="_blank"
              title="Github link"
            >
              <GithubLogo size={20} weight="fill" />
            </Link>
          </li>
          {/* Theme toggler */}
          <li>
            <Link onClick={handleToggleTheme} title="Theme toggler">
              <CircleHalf size={20} weight="fill" />
            </Link>
          </li>
          {userName && (
            <li>
              {/* Log out form */}
              <Form
                className="logout_form"
                method="post"
                action="/logout"
                onSubmit={(e) => {
                  if (
                    !confirm(
                      "Once deleted, you will not be able to recover this data!"
                    )
                  ) {
                    e.preventDefault();
                  }
                }}
              >
                <button
                  type="submit"
                  className="btn logout_btn"
                  title="Delete user button"
                >
                  <span>Delete User</span>
                  <SignOut size={24} weight="fill" />
                </button>
              </Form>
            </li>
          )}
        </ul>
      </nav>
    </>
  );
}
