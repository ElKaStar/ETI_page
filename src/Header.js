import React from 'react'
import {NavLink} from "react-router-dom";

export const Header = () => {


    return (
        <header className="header ">
            <nav className="shadow navbar navbar-expand-lg navbar-light bg-white fixed-top">
                <div className="container-fluid">
                    <div className="d-flex align-items-center"><a className="py-1 navbar-brand" href="/"><img
                        alt="Directory logo"/></a>
                        <form id="search" className="form-inline d-none d-sm-flex">
                            <div
                                className="input-label-absolute input-label-absolute-left input-reset input-expand ml-lg-2 ml-xl-3 ">
                                <label htmlFor="search_search" className="label-absolute"><i
                                    className="fa fa-search"/><span
                                    className="sr-only">What are you looking for?</span></label><input type="text"
                                                                                                       id="search_search"
                                                                                                       placeholder="Search"
                                                                                                       aria-label="Search"
                                                                                                       className="border-0 shadow-0 bg-gray-200 form-control-sm form-control"/>
                                <button type="reset" className="btn btn-sm btn-reset"><i className="fas fa-times"></i>
                                </button>
                                </div>
                        </form>
                    </div>
                    <button aria-label="Toggle navigation" type="button"
                            className="navbar-toggler-right navbar-toggler"><i className="fa fa-bars"></i></button>
                    <div className="collapse navbar-collapse">
                        <form id="searchcollapsed" className="form-inline mt-4 mb-2 d-sm-none">
                            <div className="input-label-absolute input-label-absolute-left input-reset w-100 "><label
                                htmlFor="searchcollapsed_search" className="label-absolute"><i
                                className="fa fa-search"></i><span className="sr-only">What are you looking for?</span></label><input
                                type="text" id="searchcollapsed_search" placeholder="Search" aria-label="Search"
                                className="border-0 shadow-0 bg-gray-200 form-control-sm form-control"/>
                                <button type="reset" className="btn-reset btn btn-deoco btn-sm"><i
                                    className="fas fa-times"></i></button></div>
                        </form>
                        <ul className="ml-auto navbar-nav">
                            <li className="dropdown nav-item"><a aria-haspopup="true" href="#"
                                                                 className="dropdown-toggle nav-link"
                                                                 aria-expanded="false">Home</a>
                                <div tabIndex="-1" role="menu" aria-hidden="true" className="  dropdown-menu"><a
                                    href="/" tabIndex="0" role="menuitem" className="dropdown-item">Rooms</a><a
                                    href="/index-2" tabIndex="0" role="menuitem"
                                    className="dropdown-item">Restaurant</a><a href="/index-3" tabIndex="0"
                                                                               role="menuitem"
                                                                               className="dropdown-item">Travel</a><a
                                    href="/index-4" tabIndex="0" role="menuitem" className="dropdown-item">Real
                                    estate<span className="ml-1 mt-n1 badge badge-info-light">New</span></a></div>
                            </li>
                            <li className="position-static dropdown nav-item"><a aria-haspopup="true" href="#"
                                                                                 className="active dropdown-toggle nav-link"
                                                                                 aria-expanded="false">Template</a>
                                <div tabIndex="-1" role="menu" aria-hidden="true"
                                     className=" megamenu py-lg-0 dropdown-menu">
                                    <div className="row">
                                        <div className="col-lg-9">
                                            <div className="p-3 pr-lg-0 pl-lg-5 pt-lg-5 row">
                                                <div className="col-lg-3"><h6 className="text-uppercase">Homepage</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a href="/" tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Rooms</a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/index-2"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Restaurants</a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/index-3"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Travel</a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/index-4"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Real
                                                            estate<span
                                                                className="ml-1 mt-n1 badge badge-info-light">New</span></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="text-uppercase">Restaurants</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a href="/category"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Category
                                                            - Map on the top</a></li>
                                                        <li className="megamenu-list-item"><a href="/category-2"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Category
                                                            - Map on the right</a></li>
                                                        <li className="megamenu-list-item"><a href="/category-3"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Category
                                                            - no map</a></li>
                                                        <li className="megamenu-list-item"><a href="/detail"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Restaurant
                                                            detail</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3"><h6 className="text-uppercase">Rooms</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a href="/category-rooms"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Category
                                                            - Map on the top</a></li>
                                                        <li className="megamenu-list-item"><a href="/category-2-rooms"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Category
                                                            - Map on the right</a></li>
                                                        <li className="megamenu-list-item"><a href="/category-3-rooms"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Category
                                                            - no map</a></li>
                                                        <li className="megamenu-list-item"><a href="/detail-rooms"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Room
                                                            detail</a></li>
                                                    </ul>
                                                    <h6 className="text-uppercase">Blog</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a href="/blog" tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Blog</a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a
                                                            href="/blog/autumn-fashion-tips-and-tricks" tabIndex="0"
                                                            role="menuitem"
                                                            className="megamenu-list-link dropdown-item">Post</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3"><h6 className="text-uppercase">Pages</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a href="/compare"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Comparison<span
                                                            className="ml-1 mt-n1 badge badge-info-light">New</span></a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/team" tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link active dropdown-item">Team<span
                                                            className="ml-1 mt-n1 badge badge-info-light">New</span></a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/contact"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Contact</a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/pricing"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Pricing</a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/text" tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Text
                                                            page</a></li>
                                                        <li className="megamenu-list-item"><a href="/faq" tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">F.A.Q.s</a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/coming-soon"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Coming
                                                            soon</a></li>
                                                        <li className="megamenu-list-item"><a href="/404" tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">404
                                                            page<span
                                                                className="ml-1 mt-n1 badge badge-info-light">New</span></a>
                                                        </li>
                                                    </ul>
                                                    <h6 className="text-uppercase">Host</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a href="/user-add-0"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Add
                                                            new listing - 6 pages</a></li>
                                                        <li className="megamenu-list-item"><a href="/user-list"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Bookings
                                                            - list view</a></li>
                                                    </ul>
                                                </div>
                                                <div className="col-lg-3"><h6 className="text-uppercase">User</h6>
                                                    <ul className="megamenu-list list-unstyled">
                                                        <li className="megamenu-list-item"><a href="/user-profile"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Profile<span
                                                            className="ml-1 mt-n1 badge badge-info-light">New</span></a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/user-account"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Account<span
                                                            className="ml-1 mt-n1 badge badge-info-light">New</span></a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/user-personal"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Personal
                                                            info - forms<span
                                                                className="ml-1 mt-n1 badge badge-info-light">New</span></a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/user-security"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Password &amp; security
                                                            - forms<span
                                                                className="ml-1 mt-n1 badge badge-info-light">New</span></a>
                                                        </li>
                                                        <li className="megamenu-list-item"><a href="/login" tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Sign
                                                            in</a></li>
                                                        <li className="megamenu-list-item"><a href="/signup"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Sign
                                                            up</a></li>
                                                        <li className="megamenu-list-item"><a href="/user-booking-1"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Booking
                                                            process - 4 pages</a></li>
                                                        <li className="megamenu-list-item"><a href="/user-grid"
                                                                                              tabIndex="0"
                                                                                              role="menuitem"
                                                                                              className="megamenu-list-link dropdown-item">Bookings
                                                            - grid view</a></li>
                                                        <li className="megamenu-list-item"><a
                                                            href="/user-booking-detail" tabIndex="0" role="menuitem"
                                                            className="megamenu-list-link dropdown-item">Booking
                                                            detail</a></li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="megamenu-services d-none d-lg-flex pl-lg-5 row">
                                                <div className="d-flex col-lg-6 col-xl-3">
                                                    <div className="megamenu-services-item">
                                                        <div><h6 className="text-uppercase">Best rentals</h6><p
                                                            className="mb-0 text-muted text-sm">Find the perfect
                                                            place</p></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex col-lg-6 col-xl-3">
                                                    <div className="megamenu-services-item">
                                                        <div><h6 className="text-uppercase">Earn points</h6><p
                                                            className="mb-0 text-muted text-sm">And get great
                                                            rewards</p></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex col-lg-6 col-xl-3">
                                                    <div className="megamenu-services-item">
                                                        <div><h6 className="text-uppercase">020-800-456-747</h6><p
                                                            className="mb-0 text-muted text-sm">24/7 Available
                                                            Support</p></div>
                                                    </div>
                                                </div>
                                                <div className="d-flex col-lg-6 col-xl-3">
                                                    <div className="megamenu-services-item">
                                                        <div><h6 className="text-uppercase">Secure Payment</h6><p
                                                            className="mb-0 text-muted text-sm">Secure Payment</p></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-none d-lg-block col-lg-3"><img
                                            src="/content/img/photo/photo-1521170665346-3f21e2291d8b.jpg" alt=""
                                            className="bg-image"/></div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item"><a href="/contact" className="nav-link">Contact</a></li>
                            <li className="dropdown nav-item"><a aria-haspopup="true" href="#"
                                                                 className="dropdown-toggle nav-link"
                                                                 aria-expanded="false">Docs</a>
                                <div tabIndex="-1" role="menu" aria-hidden="true" className="  dropdown-menu"><h6
                                    className="dropdown-header font-weight-normal">Documentation</h6><a
                                    href="/docs/docs-introduction" tabIndex="0" role="menuitem"
                                    className="dropdown-item">Introduction</a><a href="/docs/docs-directory-structure"
                                                                                 tabIndex="0" role="menuitem"
                                                                                 className="dropdown-item">Directory
                                    structure</a><a href="/docs/docs-next" tabIndex="0" role="menuitem"
                                                    className="dropdown-item">Next.js</a><a
                                    href="/docs/docs-customizing-css" tabIndex="0" role="menuitem"
                                    className="dropdown-item">Customizing CSS</a><a href="/docs/docs-credits"
                                                                                    tabIndex="0" role="menuitem"
                                                                                    className="dropdown-item">Credits</a><a
                                    href="/docs/docs-changelog" tabIndex="0" role="menuitem"
                                    className="dropdown-item">Changelog</a><h6
                                    className="dropdown-header font-weight-normal">Components</h6><a
                                    href="/docs/components-bootstrap" tabIndex="0" role="menuitem"
                                    className="dropdown-item">Bootstrap</a><a href="/docs/components-directory"
                                                                              tabIndex="0" role="menuitem"
                                                                              className="dropdown-item">Theme</a></div>
                            </li>
                            <li className="nav-item"><a href="/login" className="nav-link">Sign in</a></li>
                            <li className="nav-item"><a href="/signup" className="nav-link">Sign up</a></li>
                            <li className="mt-3 mt-lg-0 ml-lg-3 d-lg-none d-xl-inline-block nav-item"><a
                                className="btn btn-primary" href="/user-add-0">Add a listing</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    )


}
