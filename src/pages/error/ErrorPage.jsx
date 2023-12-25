import { Link, useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="container error_page">
      <div className="">
        <h1>Uh oh! We've got a problem.</h1>
        <p>{error.message || error.statusText}</p>
        <div className="error_page_btns">
          <Link to=".." role="button" className="btn">
            <span>Go Back</span>
          </Link>
          <Link to="/" role="button" className="btn">
            <span>Go Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
