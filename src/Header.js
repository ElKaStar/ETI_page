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
              <li className="dropdown nav-item">
                <a
                  aria-haspopup="true"
                  href="#"
                  className="dropdown-toggle nav-link"
                  aria-expanded="false"
                >
                  Home
                </a>
                <div
                  tabIndex="-1"
                  role="menu"
                  aria-hidden="true"
                  className="  dropdown-menu"
                >
                  <a
                    href="/"
                    tabIndex="0"
                    role="menuitem"
                    className="dropdown-item"
                  >
                    Rooms
                  </a>
                  <a
                    href="/index-2"
                    tabIndex="0"
                    role="menuitem"
                    className="dropdown-item"
                  >
                    Restaurant
                  </a>
                  <a
                    href="/index-3"
                    tabIndex="0"
                    role="menuitem"
                    className="dropdown-item"
                  >
                    Travel
                  </a>
                  <a
                    href="/index-4"
                    tabIndex="0"
                    role="menuitem"
                    className="dropdown-item"
                  >
                    Real estate
                    <span className="ml-1 mt-n1 badge badge-info-light">
                      New
                    </span>
                  </a>
                </div>
              </li>
              <li className="position-static dropdown nav-item">
                <a
                  aria-haspopup="true"
                  href="#"
                  className="active dropdown-toggle nav-link"
                  aria-expanded="false"
                >
                  Template
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
                          <h6 className="text-uppercase">Homepage</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a
                                href="/"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Rooms
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/index-2"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Restaurants
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/index-3"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Travel
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/index-4"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Real estate
                                <span className="ml-1 mt-n1 badge badge-info-light">
                                  New
                                </span>
                              </a>
                            </li>
                          </ul>
                          <h6 className="text-uppercase">Restaurants</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a
                                href="/category"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Category - Map on the top
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/category-2"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Category - Map on the right
                              </a>
                            </li>
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
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">Rooms</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a
                                href="/category-rooms"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Category - Map on the top
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/category-2-rooms"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Category - Map on the right
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/category-3-rooms"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Category - no map
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/detail-rooms"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Room detail
                              </a>
                            </li>
                          </ul>
                          <h6 className="text-uppercase">Blog</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a
                                href="/blog"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Blog
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/blog/autumn-fashion-tips-and-tricks"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Post
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">Pages</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a
                                href="/compare"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Comparison
                                <span className="ml-1 mt-n1 badge badge-info-light">
                                  New
                                </span>
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/team"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link active dropdown-item"
                              >
                                Team
                                <span className="ml-1 mt-n1 badge badge-info-light">
                                  New
                                </span>
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/contact"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Contact
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/pricing"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Pricing
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/text"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Text page
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/faq"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                F.A.Q.s
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/coming-soon"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Coming soon
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/404"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                404 page
                                <span className="ml-1 mt-n1 badge badge-info-light">
                                  New
                                </span>
                              </a>
                            </li>
                          </ul>
                          <h6 className="text-uppercase">Host</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a
                                href="/user-add-0"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Add new listing - 6 pages
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/user-list"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Bookings - list view
                              </a>
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-3">
                          <h6 className="text-uppercase">User</h6>
                          <ul className="megamenu-list list-unstyled">
                            <li className="megamenu-list-item">
                              <a
                                href="/user-profile"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Profile
                                <span className="ml-1 mt-n1 badge badge-info-light">
                                  New
                                </span>
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/user-account"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Account
                                <span className="ml-1 mt-n1 badge badge-info-light">
                                  New
                                </span>
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/user-personal"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Personal info - forms
                                <span className="ml-1 mt-n1 badge badge-info-light">
                                  New
                                </span>
                              </a>
                            </li>
                            <li className="megamenu-list-item">
                              <a
                                href="/user-security"
                                tabIndex="0"
                                role="menuitem"
                                className="megamenu-list-link dropdown-item"
                              >
                                Password &amp; security - forms
                                <span className="ml-1 mt-n1 badge badge-info-light">
                                  New
                                </span>
                              </a>
                            </li>
                            
                          </ul>
                        </div>
                      </div>
                      <div className="megamenu-services d-none d-lg-flex pl-lg-5 row">
                        <div className="d-flex col-lg-6 col-xl-3">
                          <div className="megamenu-services-item">
                            <div>
                              <h6 className="text-uppercase">Best rentals</h6>
                              <p className="mb-0 text-muted text-sm">
                                Find the perfect place
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex col-lg-6 col-xl-3">
                          <div className="megamenu-services-item">
                            <div>
                              <h6 className="text-uppercase">Earn points</h6>
                              <p className="mb-0 text-muted text-sm">
                                And get great rewards
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex col-lg-6 col-xl-3">
                          <div className="megamenu-services-item">
                            <div>
                              <h6 className="text-uppercase">
                                020-800-456-747
                              </h6>
                              <p className="mb-0 text-muted text-sm">
                                24/7 Available Support
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="d-flex col-lg-6 col-xl-3">
                          <div className="megamenu-services-item">
                            <div>
                              <h6 className="text-uppercase">Secure Payment</h6>
                              <p className="mb-0 text-muted text-sm">
                                Secure Payment
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="d-none d-lg-block col-lg-3">
                      <img
                        src="/content/img/photo/photo-1521170665346-3f21e2291d8b.jpg"
                        alt=""
                        className="bg-image"
                      />
                    </div>
                  </div>
                </div>
              </li>
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
