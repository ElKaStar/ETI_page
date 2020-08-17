import React from 'react'

export const Contacts = () => {

    return (
        <main>
            <section className="hero py-6 py-lg-7 text-white dark-overlay"><img
                src="/content/img/photo/photo-1522143049013-2519756a52d4.jpg" className="bg-image"
                alt="How can we help you today?"/>
                <div className="overlay-content container">
                    <nav className="" aria-label="breadcrumb">
                        <ol className="breadcrumb text-white justify-content-center no-border mb-0">
                            <li className="breadcrumb-item"><a href="/">Home</a></li>
                            <li className="active breadcrumb-item" aria-current="page">Contact</li>
                        </ol>
                    </nav>
                    <h1 className="hero-heading">How can we help you today?</h1></div></section>
            <section className="py-6">
                <div className="container">
                    <div className="row">
                        <div className="text-center text-md-left mb-4 mb-md-0 col-md-4">
                            <h3 className="h5">Adress</h3><p className="text-muted">13/25 New Avenue<br/>New Heaven, 45Y
                            73J<br/><span>England, <strong>Great Britain</strong></span></p></div>
                        <div className="text-center text-md-left mb-4 mb-md-0 col-md-4">
                            <h3 className="h5">Call center</h3><p className="text-muted">Sed do eiusmod tempor
                            incididunt ut labore et dolore magna aliqua.</p><p className="text-muted"><strong>+33 555
                            444 333</strong></p></div>
                        <div className="text-center text-md-left mb-4 mb-md-0 col-md-4">
                            <h3 className="h5">Electronic support</h3><p className="text-muted">Please feel free to
                            write an email to us or to use our electronic ticketing system.</p>
                            <ul className="list-unstyled text-muted">
                                <li>info@sell.com</li>
                                <li>support@sell.com</li>
                            </ul>
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
                                <div><p className="text-muted">Effects present letters inquiry no an removed or friends.
                                    Desire behind latter me though in. Supposing shameless am he engrossed up additions.
                                    My possible peculiar together to. Desire so better am cannot he up before points.
                                    Remember mistaken opinions it pleasure of debating. Court front maids forty if aware
                                    their at. Chicken use are pressed removed. </p><p className="text-muted">Able an
                                    hope of body. Any nay shyness article matters own removal nothing his forming. Gay
                                    own additions education satisfied the perpetual. If he cause manor happy. Without
                                    farther she exposed saw man led. Along on happy could cease green oh. </p></div>

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