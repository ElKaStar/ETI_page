import React from 'react'
import './App.css'

export const Contacts = () => {

    return (
        <main>
            <section className="hero py-6 py-lg-7 text-white dark-overlay">
                <div className="overlay-content container">
                    <nav className="" aria-label="breadcrumb">
                        <ol className="breadcrumb text-white justify-content-center no-border mb-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="active breadcrumb-item" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                    <h1 className="hero-heading">How can we help you today?</h1></div></section>
            <section className="py-3">
                <div className="container">
                    <div className="row">
                        <div className="text-center text-md-left mb-2 mb-md-0 col-md-4">
                            <h3 className="h5 text-center">Telegram</h3>
                          <p className="text-muted text-center mb-0"><strong>@telega</strong></p>
                          <div className="special-ripple">
                            <a href="tg://resolve?domain=devklondike" className="request-loader">
                              <div>
                                <img style={{width: "30px"}} src="https://icon-library.com/images/telegram-icon-png/telegram-icon-png-28.jpg"/>
                              </div>
                            </a>
                        </div>
                      </div>
                       <div className="text-center text-md-left mb-2 mb-md-0 col-md-4">
                            <h3 className="h5 text-center">Instagram</h3>
                          <p className="text-muted text-center mb-0"><strong>elena.tikhonova</strong></p>
                          <div className="special-ripple">
                            <a href="tg://resolve?domain=devklondike" className="request-loader">
                              <div>
                                <img style={{width: "30px"}} src="https://mainatom.com/wp-content/uploads/2019/11/instagram.png"/>
                              </div>
                            </a>
                        </div>
                        </div>
                        <div className="text-center text-md-left mb-2 mb-md-0 col-md-4">
                            <h3 className="h5 text-center">Email</h3>
                          <p className="text-muted text-center mb-0"><strong>elena.tikhonova.apps@gmail.com</strong></p>
                          <div className="special-ripple">
                            <a href="tg://resolve?domain=devklondike" className="request-loader">
                              <div>
                                <img style={{width: "30px"}} src="https://cdn.iconscout.com/icon/free/png-512/apple-mail-493152.png"/>
                              </div>
                            </a>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-6 bg-gray-100">
                <div className="container"><h2 className="h4 mb-5">Contact form</h2>
                    <div className="row">
                        <div className="mb-5 mb-md-0 col-md-7">
                            <form className="">
                                <div className="controls">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group"><label htmlFor="name" className="form-label">Your
                                                firstname *</label><input name="name" id="name"
                                                                          placeholder="Enter your firstname" required=""
                                                                          type="text" className="form-control"/></div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group"><label htmlFor="surname" className="form-label">Your
                                                firstname *</label><input name="surname" id="surname"
                                                                          placeholder="Enter your lasttname" required=""
                                                                          type="text" className="form-control"/></div>
                                        </div>
                                    </div>
                                    <div className="form-group"><label htmlFor="email" className="form-label">Your email
                                        *</label><input name="email" id="email" placeholder="Enter your email"
                                                        required="" type="email" className="form-control"/></div>
                                    <div className="form-group"><label htmlFor="message" className="form-label">Your
                                        message for us *</label><textarea rows="4" name="message" id="message"
                                                                          placeholder="Enter your message" required=""
                                                                          className="form-control"></textarea></div>
                                    <button type="submit" className="btn btn-outline-primary">Send message</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-5">
                            <div className="pl-lg-4">
                                <div>
                                  <p className="text-muted">
                                    If you have any questions or would like to discuss further opportunities, 
                                    please don't hesitate to get in touch.  </p>
                                  </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div className="map-wrapper-300">
            </div>
        </main>
    )
}