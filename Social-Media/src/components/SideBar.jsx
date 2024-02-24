import { Link } from "react-router-dom";
function SideBar({}) {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 h-[40rem] w-60 bg-dark"
      // style={{ width: "280px", height: "35rem" }}
    >
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            console.log("Your Post clicked");
          }}
        >
          <Link to="/" className={`nav-link  text-white`} aria-current="page">
            <svg className="bi pe-none me-2" width="5" height="5">
              <use xlinkHref="#home"></use>
            </svg>
            Your Posts
          </Link>
        </li>
        <li
          onClick={() => {
            console.log("Make a Post clicked");
          }}
        >
          <Link to="/create-post" className={`nav-link  text-white`}>
            <svg className="bi pe-none me-2" width="5" height="5">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Make a Post
          </Link>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default SideBar;
