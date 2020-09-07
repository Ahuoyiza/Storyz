import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <header className="">
        <nav className="navbar sticy-top navbar-expand-sm navbar-light bg-white">
          <Link to="/">
            <img src={logo} alt="" className="navbar-brand" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#collapsibleNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/explore">
                  Explore
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/library">
                  library
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
            <div>
              <ul className=" navbar-nav mr-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/write">
                    Write
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/home">
                    SIGN OUT
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    );
  }
}

export default Navbar;
