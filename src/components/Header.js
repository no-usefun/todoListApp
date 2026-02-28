import { NavLink } from "react-router-dom";
import { FaGithub, FaBriefcase, FaTasks } from "react-icons/fa";

export default function Header({ title = "Your title here" }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark glass-nav px-4">
      <div className="container-fluid">
        <NavLink
          className="navbar-brand d-flex align-items-center gap-2"
          to="/"
        >
          <FaTasks className="me-2" />
          {title}
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "")
                }
              >
                Home
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                to="/ContactMe"
                className={({ isActive }) =>
                  "nav-link " + (isActive ? "active" : "")
                }
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-divider"></li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-2"
                href="https://github.com/no-usefun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
                GitHub
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link d-flex align-items-center gap-2"
                href="https://github.com/no-usefun"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaBriefcase />
                Portfolio
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
