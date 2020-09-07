import React, { Component } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo/logoHome.svg";
import "../stylesheets/Navbar.css";

export class Navbar extends Component {
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
          {
            //<form className="form-inline" action="/action_page.php">
            // <input
            //   className="form-control mr-sm-2"
            //  type="text"
            //    placeholder="Search"
            // />
            // <button className="btn btn-success" type="submit">
            //   Search
            //</form></form>  </button>
            // </form>
          }
          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
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
                  <Link className="nav-link" to="/signup">
                    SIGN UP
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    SIGN IN
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
