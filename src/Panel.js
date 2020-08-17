import React from 'react'

export const Panel = () => {

    return (

        <main>
            <section className="py-5">
                <div className="container">
                    <div className="row">
                        <div className="mr-lg-auto col-lg-3">
                            <div className="border-0 shadow mb-6 mb-lg-0 card">
                                <div className="bg-gray-100 py-4 border-0 text-center card-header"><a href="#"
                                                                                                      className="d-inline-block">
                                    <img
                                    src="/content/img/avatar/avatar-10.jpg" alt=""
                                    className="d-block avatar avatar-xxl p-2 mb-2"/></a><h5>Jack London</h5><p
                                    className="text-muted text-sm mb-0">Los Angeles, CA</p></div>
                                <div className="p-4 card-body">
                                    <div className="align-items-center mb-3 media">
                                        <div className="icon-rounded icon-rounded-sm bg-primary-light mr-2">
                                            <svg className="svg-icon text-primary svg-icon-md">
                                                <use href="/content/svg/orion-svg-sprite.svg#diploma-1"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="align-items-center mb-3 media">
                                        <div className="icon-rounded icon-rounded-sm bg-primary-light mr-2">
                                            <svg className="svg-icon text-primary svg-icon-md">
                                                <use href="/content/svg/orion-svg-sprite.svg#checkmark-1"></use>
                                            </svg>
                                        </div>
                                    </div>
                                    <hr/><h6>Jack provided</h6>
                                        <ul className="text-muted card-text">
                                            <li>Government ID</li>
                                            <li>Email address</li>
                                            <li>Phone number</li>
                                        </ul>
                                </div>
                            </div>
                        </div>
                        <div className="pl-lg-5 col-lg-9"><h1 className="hero-heading mb-0">Hello, I'm Jack!</h1>
                            <div className="text-block"><p><span
                                className="badge badge-secondary-light">Joined in 2011</span></p>
                                <div><p className="text-muted">Samsa was a travelling salesman - and above it there hung
                                    a picture that he had recently cut out of an illustrated magazine and housed in a
                                    nice, gilded frame. </p><p className="text-muted">He must have tried it a hundred
                                    times, shut his eyes so that he wouldn't have to look at the floundering legs, and
                                    only stopped when he began to feel a mild, dull pain there that he had never felt
                                    before. </p></div>
                            </div>
                            <div className="text-block"><h4 className="mb-5">Jack's Listings</h4>
                                <div className="row">
                                    <div className="mb-30px hover-animate col-sm-6 col-lg-4">
                                        <div className="h-100 border-0 shadow card">
                                            <div className="card-img-top overflow-hidden gradient-overlay">
                                                <img
                                                src="/content/img/photo/photo-1484154218962-a197022b5858.jpg"
                                                alt="Modern, Well-Appointed Room" className="img-fluid"/><a
                                                className="tile-link" href="detail-rooms"></a>
                                                <div className="card-img-overlay-bottom z-index-20">
                                                    <div className="text-white text-sm align-items-center media">
                                                        <img
                                                        src="/content/img/avatar/avatar-0.jpg" alt="Pamela"
                                                        className="avatar avatar-border-white mr-2"/>
                                                        <div className="media-body">Pamela</div></div>
                                                </div>
                                                <div className="card-img-overlay-top text-right"><a
                                                    className="card-fav-icon position-relative z-index-40" href="#">
                                                    <svg className="svg-icon text-white">
                                                        <use
                                                            href="/content/svg/orion-svg-sprite.svg#heart-1"></use>
                                                    </svg>
                                                </a></div></div>
                                            <div className="d-flex align-items-center card-body">
                                                <div className="w-100"><h6 className="card-title"><a
                                                    className="text-decoration-none text-dark" href="detail-rooms">Modern,
                                                    Well-Appointed Room</a></h6>
                                                    <div className="d-flex mb-3 card-subtitle"><p
                                                        className="flex-grow-1 mb-0 text-muted text-sm">Private room</p>
                                                        <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                            <i className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i></p></div>
                                                    <p className="text-muted card-text"><span
                                                        className="h4 text-primary">$80</span>&nbsp;per night</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-30px hover-animate col-sm-6 col-lg-4">
                                        <div className="h-100 border-0 shadow card">
                                            <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                src="/content/img/photo/photo-1426122402199-be02db90eb90.jpg"
                                                alt="Cute Quirky Garden apt, NYC adjacent" className="img-fluid"/><a
                                                className="tile-link" href="detail-rooms"></a>
                                                <div className="card-img-overlay-bottom z-index-20">
                                                    <div className="text-white text-sm align-items-center media"><img
                                                        src="/content/img/avatar/avatar-7.jpg" alt="John"
                                                        className="avatar avatar-border-white mr-2"/>
                                                        <div className="media-body">John</div></div>
                                                </div>
                                                <div className="card-img-overlay-top text-right"><a
                                                    className="card-fav-icon position-relative z-index-40" href="#">
                                                    <svg className="svg-icon text-white">
                                                        <use
                                                            href="/content/svg/orion-svg-sprite.svg#heart-1"></use>
                                                    </svg>
                                                </a></div></div>
                                            <div className="d-flex align-items-center card-body">
                                                <div className="w-100"><h6 className="card-title"><a
                                                    className="text-decoration-none text-dark" href="detail-rooms">Cute
                                                    Quirky Garden apt, NYC adjacent</a></h6>
                                                    <div className="d-flex mb-3 card-subtitle"><p
                                                        className="flex-grow-1 mb-0 text-muted text-sm">Entire
                                                        apartment</p><p
                                                        className="flex-shrink-1 mb-0 card-stars text-xs text-right"><i
                                                        className="fa  fa-star text-warning"></i><i
                                                        className="fa  fa-star text-warning"></i><i
                                                        className="fa  fa-star text-warning"></i><i
                                                        className="fa  fa-star text-warning"></i><i
                                                        className="fa fa-star  text-gray-300"></i></p></div>
                                                    <p className="text-muted card-text"><span
                                                        className="h4 text-primary">$121</span>&nbsp;per night</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-30px hover-animate col-sm-6 col-lg-4">
                                        <div className="h-100 border-0 shadow card">
                                            <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                src="/content/img/photo/photo-1512917774080-9991f1c4c750.jpg"
                                                alt="Modern Apt - Vibrant Neighborhood!" className="img-fluid"/><a
                                                className="tile-link" href="detail-rooms"></a>
                                                <div className="card-img-overlay-bottom z-index-20">
                                                    <div className="text-white text-sm align-items-center media"><img
                                                        src="/content/img/avatar/avatar-8.jpg" alt="Julie"
                                                        className="avatar avatar-border-white mr-2"/>
                                                        <div className="media-body">Julie</div></div>
                                                </div>
                                                <div className="card-img-overlay-top text-right"><a
                                                    className="card-fav-icon position-relative z-index-40" href="#">
                                                    <svg className="svg-icon text-white">
                                                        <use
                                                            href="/content/svg/orion-svg-sprite.svg#heart-1"></use>
                                                    </svg>
                                                </a></div></div>
                                            <div className="d-flex align-items-center card-body">
                                                <div className="w-100"><h6 className="card-title"><a
                                                    className="text-decoration-none text-dark" href="detail-rooms">Modern
                                                    Apt - Vibrant Neighborhood!</a></h6>
                                                    <div className="d-flex mb-3 card-subtitle"><p
                                                        className="flex-grow-1 mb-0 text-muted text-sm">Entire
                                                        apartment</p><p
                                                        className="flex-shrink-1 mb-0 card-stars text-xs text-right"><i
                                                        className="fa  fa-star text-warning"></i><i
                                                        className="fa  fa-star text-warning"></i><i
                                                        className="fa  fa-star text-warning"></i><i
                                                        className="fa fa-star  text-gray-300"></i><i
                                                        className="fa fa-star  text-gray-300"></i></p></div>
                                                    <p className="text-muted card-text"><span
                                                        className="h4 text-primary">$75</span>&nbsp;per night</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-30px hover-animate col-sm-6 col-lg-4">
                                        <div className="h-100 border-0 shadow card">
                                            <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                src="/content/img/photo/photo-1494526585095-c41746248156.jpg"
                                                alt="Sunny Private Studio-Apartment" className="img-fluid"/><a
                                                className="tile-link" href="detail-rooms"></a>
                                                <div className="card-img-overlay-bottom z-index-20">
                                                    <div className="text-white text-sm align-items-center media"><img
                                                        src="/content/img/avatar/avatar-9.jpg" alt="Barbora"
                                                        className="avatar avatar-border-white mr-2"/>
                                                        <div className="media-body">Barbora</div></div>
                                                </div>
                                                <div className="card-img-overlay-top text-right"><a
                                                    className="card-fav-icon position-relative z-index-40" href="#">
                                                    <svg className="svg-icon text-white">
                                                        <use
                                                            href="/content/svg/orion-svg-sprite.svg#heart-1"></use>
                                                    </svg>
                                                </a></div></div>
                                            <div className="d-flex align-items-center card-body">
                                                <div className="w-100"><h6 className="card-title"><a
                                                    className="text-decoration-none text-dark" href="detail-rooms">Sunny
                                                    Private Studio-Apartment</a></h6>
                                                    <div className="d-flex mb-3 card-subtitle"><p
                                                        className="flex-grow-1 mb-0 text-muted text-sm">Shared room</p>
                                                        <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                            <i className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa fa-star  text-gray-300"></i></p></div>
                                                    <p className="text-muted card-text"><span
                                                        className="h4 text-primary">$93</span>&nbsp;per night</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-30px hover-animate col-sm-6 col-lg-4">
                                        <div className="h-100 border-0 shadow card">
                                            <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                src="/content/img/photo/photo-1522771739844-6a9f6d5f14af.jpg"
                                                alt="Mid-Century Modern Garden Paradise" className="img-fluid"/><a
                                                className="tile-link" href="detail-rooms"></a>
                                                <div className="card-img-overlay-bottom z-index-20">
                                                    <div className="text-white text-sm align-items-center media"><img
                                                        src="/content/img/avatar/avatar-10.jpg" alt="Jack"
                                                        className="avatar avatar-border-white mr-2"/>
                                                        <div className="media-body">Jack</div></div>
                                                </div>
                                                <div className="card-img-overlay-top text-right"><a
                                                    className="card-fav-icon position-relative z-index-40" href="#">
                                                    <svg className="svg-icon text-white">
                                                        <use
                                                            href="/content/svg/orion-svg-sprite.svg#heart-1"></use>
                                                    </svg>
                                                </a></div></div>
                                            <div className="d-flex align-items-center card-body">
                                                <div className="w-100"><h6 className="card-title"><a
                                                    className="text-decoration-none text-dark" href="detail-rooms">Mid-Century
                                                    Modern Garden Paradise</a></h6>
                                                    <div className="d-flex mb-3 card-subtitle"><p
                                                        className="flex-grow-1 mb-0 text-muted text-sm">Entire house</p>
                                                        <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                            <i className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i></p></div>
                                                    <p className="text-muted card-text"><span
                                                        className="h4 text-primary">$115</span>&nbsp;per night</p></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mb-30px hover-animate col-sm-6 col-lg-4">
                                        <div className="h-100 border-0 shadow card">
                                            <div className="card-img-top overflow-hidden gradient-overlay"><img
                                                src="/content/img/photo/photo-1488805990569-3c9e1d76d51c.jpg"
                                                alt="Brooklyn Life, Easy to Manhattan" className="img-fluid"/><a
                                                className="tile-link" href="detail-rooms"></a>
                                                <div className="card-img-overlay-bottom z-index-20">
                                                    <div className="text-white text-sm align-items-center media"><img
                                                        src="/content/img/avatar/avatar-11.jpg" alt="Stuart"
                                                        className="avatar avatar-border-white mr-2"/>
                                                        <div className="media-body">Stuart</div></div>
                                                </div>
                                                <div className="card-img-overlay-top text-right"><a
                                                    className="card-fav-icon position-relative z-index-40" href="#">
                                                    <svg className="svg-icon text-white">
                                                        <use
                                                            href="/content/svg/orion-svg-sprite.svg#heart-1"></use>
                                                    </svg>
                                                </a></div></div>
                                            <div className="d-flex align-items-center card-body">
                                                <div className="w-100"><h6 className="card-title"><a
                                                    className="text-decoration-none text-dark" href="detail-rooms">Brooklyn
                                                    Life, Easy to Manhattan</a></h6>
                                                    <div className="d-flex mb-3 card-subtitle"><p
                                                        className="flex-grow-1 mb-0 text-muted text-sm">Private room</p>
                                                        <p className="flex-shrink-1 mb-0 card-stars text-xs text-right">
                                                            <i className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa  fa-star text-warning"></i><i
                                                            className="fa fa-star  text-gray-300"></i></p></div>
                                                    <p className="text-muted card-text"><span
                                                        className="h4 text-primary">$123</span>&nbsp;per night</p></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-block">
                                <div className="text-block"><p className="subtitle text-sm text-primary">Reviews</p><h5
                                    className="mb-4">Listing Reviews</h5>
                                    <div className="d-block d-sm-flex review media">
                                        <div className="text-md-center mr-4 mr-xl-5"><img
                                            src="/content/img/avatar/avatar-8.jpg" alt="Padmé Amidala"
                                            className="d-block avatar avatar-xl p-2 mb-2"/><span
                                            className="text-uppercase text-muted text-sm">Dec 2018</span></div>
                                        <div className="media-body"><h6 className="mt-2 mb-1">Padmé Amidala</h6>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i></div>
                                            <p className="text-muted text-sm">One morning, when Gregor Samsa woke from
                                                troubled dreams, he found himself transformed in his bed into a horrible
                                                vermin. He lay on his armour-like back, and if he lifted his head a
                                                little he could see his brown belly, slightly domed and divided by
                                                arches into stiff sections</p></div>
                                    </div>
                                    <div className="d-block d-sm-flex review media">
                                        <div className="text-md-center mr-4 mr-xl-5"><img
                                            src="/content/img/avatar/avatar-2.jpg" alt="Luke Skywalker"
                                            className="d-block avatar avatar-xl p-2 mb-2"/><span
                                            className="text-uppercase text-muted text-sm">Dec 2018</span></div>
                                        <div className="media-body"><h6 className="mt-2 mb-1">Luke Skywalker</h6>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-star fa-xs text-gray-300"></i></div>
                                            <p className="text-muted text-sm">The bedding was hardly able to cover it
                                                and seemed ready to slide off any moment. His many legs, pitifully thin
                                                compared with the size of the rest of him, waved about helplessly as he
                                                looked. 'What's happened to me?' he thought. It wasn't a dream.</p>
                                        </div>
                                    </div>
                                    <div className="d-block d-sm-flex review media">
                                        <div className="text-md-center mr-4 mr-xl-5"><img
                                            src="/content/img/avatar/avatar-3.jpg" alt="Princess Leia"
                                            className="d-block avatar avatar-xl p-2 mb-2"/><span
                                            className="text-uppercase text-muted text-sm">Dec 2018</span></div>
                                        <div className="media-body"><h6 className="mt-2 mb-1">Princess Leia</h6>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-star fa-xs text-gray-300"></i><i
                                                className="fa fa-star fa-xs text-gray-300"></i></div>
                                            <p className="text-muted text-sm">His room, a proper human room although a
                                                little too small, lay peacefully between its four familiar walls. A
                                                collection of textile samples lay spread out on the table.</p></div>
                                    </div>
                                    <div className="d-block d-sm-flex review media">
                                        <div className="text-md-center mr-4 mr-xl-5"><img
                                            src="/content/img/avatar/avatar-4.jpg" alt="Jabba Hut"
                                            className="d-block avatar avatar-xl p-2 mb-2"/><span
                                            className="text-uppercase text-muted text-sm">Dec 2018</span></div>
                                        <div className="media-body"><h6 className="mt-2 mb-1">Jabba Hut</h6>
                                            <div className="mb-2"><i className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i><i
                                                className="fa fa-xs fa-star text-primary"></i></div>
                                            <p className="text-muted text-sm">Samsa was a travelling salesman - and
                                                above it there hung a picture that he had recently cut out of an
                                                illustrated magazine and housed in a nice, gilded frame.</p></div>
                                    </div>
                                </div>
                                <div className="py-5">
                                    <button type="button" className="btn btn-outline-primary">Leave a review</button>
                                    <div id="leaveReview" className="mt-4 collapse"><h5 className="mb-4">Leave a
                                        review</h5>
                                        <form className="form">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-group"><label htmlFor="name"
                                                                                       className="form-label">Your name
                                                        *</label><input name="name" id="name"
                                                                        placeholder="Enter your name" required=""
                                                                        type="text" className="form-control"/></div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-group"><label htmlFor="rating"
                                                                                       className="form-label">Your name
                                                        *</label><select name="rating" id="rating"
                                                                         className="custom-select focus-shadow-0">
                                                        <option value="5">★★★★★ (5/5)</option>
                                                        <option value="4">★★★★☆ (4/5)</option>
                                                        <option value="3">★★★☆☆ (3/5)</option>
                                                        <option value="2">★★☆☆☆ (2/5)</option>
                                                        <option value="1">★☆☆☆☆ (1/5)</option>
                                                    </select></div>
                                                </div>
                                            </div>
                                            <div className="form-group"><label htmlFor="email" className="form-label">Your
                                                name *</label><input name="email" id="email"
                                                                     placeholder="Enter your  email" required=""
                                                                     type="email" className="form-control"/></div>
                                            <div className="form-group"><label htmlFor="review" className="form-label">Review
                                                text *</label><textarea rows="4" name="review" id="review"
                                                                        placeholder="Enter your  email" required=""
                                                                        className="form-control"></textarea></div>
                                            <button type="submit" className="btn btn-primary">Post review</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    )

}