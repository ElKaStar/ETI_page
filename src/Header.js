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
                <button type="reset" className="btn btn-sm btn-reset">
                  <i className="fas fa-times"></i>
                </button>
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
                  aria-haspopup="true"
                  to='/'
                  className="nav-link"
                  aria-expanded="false"
                >
                  Home
                </NavLink>
              </li>
              <li className="position-static dropdown nav-item">
                <a
                  aria-haspopup="true"
                  href="#"
                  className="active dropdown-toggle nav-link"
                  aria-expanded="false"
                >
                  Projects
                </a>
                <div
                  tabIndex="-1"
                  role="menu"
                  aria-hidden="true"
                  className=" megamenu py-lg-0 dropdown-menu"
                >
                  <div className="row">
                    <div className="col-lg-9">
                      <div className="p-3 pr-lg-0 pl-lg-5 pt-lg-5 row">
                        <div className="col-lg-3">

                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a
                                href="/category-3"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Category - no map
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/detail"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Restaurant detail
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <NavLink to="/contacts" className="nav-link">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/relax" className="nav-link">
                  Relax
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};
