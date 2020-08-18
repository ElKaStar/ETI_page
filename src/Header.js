import React from "react";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header ">
      <nav className="shadow navbar navbar-expand-lg navbar-light bg-white fixed-top">
        <div className="container-fluid">
          <div className="d-flex align-items-center">
            <a className="py-1 navbar-brand">
              <img
                src="https://www.imagephotoevents.com/img/s/v-10/p2314178220-2.jpg"
                alt="logo"
                className="rounded-circle"
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
              />
            </a>
            <form id="search" className="form-inline d-none d-sm-flex">
              <div className="input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3 ">
                <input
                  type="text"
                  id="search_search"
                  placeholder="Search"
                  aria-label="Search"
                  className="border-0 shadow-0 bg-gray-200 form-control-sm form-control"
                />
              </div>
            </form>
          </div>
          <button
            aria-label="Toggle navigation"
            type="button"
            className="navbar-toggler-right navbar-toggler"
          >
            <svg
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
              className="bi bi-text-indent-left"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M2 3.5a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5zm.646 2.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1 0 .708l-2 2a.5.5 0 0 1-.708-.708L4.293 8 2.646 6.354a.5.5 0 0 1 0-.708zM7 6.5a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 3a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 0 1h-6a.5.5 0 0 1-.5-.5zm-5 3a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11a.5.5 0 0 1-.5-.5z"
              />
            </svg>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="ml-auto navbar-nav">
              <li className="nav-item">
                <NavLink
                  to="/"
                  className="nav-link"
                >
                  Home
                </NavLink>
              </li>
              <div>
                <div className="dropdown">
                  <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                          data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Menu
                  </button>
                  <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#">Action</a>
                    <a className="dropdown-item" href="#">Another action</a>
                    <a className="dropdown-item" href="#">Something else here</a>
                  </div>
                </div>
              </div>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
