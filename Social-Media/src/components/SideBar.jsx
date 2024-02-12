function SideBar({ selectedTab, setSelectedTab }) {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark"
      style={{ width: "280px", height: "35rem" }}
    >
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li
          className="nav-item"
          onClick={() => {
            setSelectedTab("Home");
          }}
        >
          <a
            href="#"
            className={`nav-link ${
              selectedTab === "Home" && "active"
            } text-white`}
            aria-current="page"
          >
            <svg className="bi pe-none me-2" width="5" height="5">
              <use xlinkHref="#home"></use>
            </svg>
            Home
          </a>
        </li>
        <li
          onClick={() => {
            setSelectedTab("Post");
          }}
        >
          <a
            href="#"
            className={`nav-link ${
              selectedTab === "Post" && "active"
            } text-white`}
          >
            <svg className="bi pe-none me-2" width="5" height="5">
              <use xlinkHref="#speedometer2"></use>
            </svg>
            Post
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
}

export default SideBar;
