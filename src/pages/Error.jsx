import { Link, useNavigate, useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <div className="container error_page">
      <div className="">
        <h1>Uh oh! We've got a problem.</h1>
        <p>{error.message || error.statusText}</p>
        <div className="error_page_btns">
          {/* <button className="btn" onClick={() => navigate(-1)}>
            <span>Go Back</span>
          </button> */}
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
