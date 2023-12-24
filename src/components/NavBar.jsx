// rrd import
import { Form, Link } from "react-router-dom";
// icons import
import { SignOut } from "@phosphor-icons/react";

export default function NavBar({ userName }) {
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
          {userName && (
            <li>
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
                <button type="submit" className="btn logout_btn" title="Delete user button">
                  <span>Delete User</span>
                  <SignOut size={24} weight="fill" />
                </button>
              </Form>
            </li>
          )}

          {/* <li>
                <details role="list" dir="rtl" className="dropdown_link">
                  <summary aria-haspopup="listbox" role="link">
                    <DotsThreeOutlineVertical size={25} weight="fill" />
                  </summary>
                  <ul role="listbox">
                    <li>
                      <a href="#" className="btn logout_btn">
                        <span>Log Out</span>
                      </a>
                    </li>
                    <li>
                      <a>Another action</a>
                    </li>
                  </ul>
                </details>
              </li> */}
        </ul>
      </nav>
    </>
  );
}
