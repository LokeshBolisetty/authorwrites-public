import React from "react";

//Stateless Functional Component
const NavBar = (props) => {
  return (
    /*<nav className="navbar navbar-light bg-light">
      <span className="navbar-brand mb-0 h1">
        Navbars{"  "}
        <span className="badge badge-pill badge-secondary">
          {props.totalCounters}
        </span>
      </span>
    </nav>*/
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a
        className="navbar-brand"
        href="https://lokeshbolisetty.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lokesh Bolisetty
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#1">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              href="https://lokeshbolisetty.github.io"
              target="_blank"
              rel="noopener noreferrer"
            >
              Author
            </a>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </div>
    </nav>
  );
};

/*
class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">
          Navbars{"  "}
          <span className="badge badge-pill badge-secondary">
            {this.props.totalCounters}
          </span>
        </span>
      </nav>
    );
  }
}
*/

export default NavBar;
