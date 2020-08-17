import React from 'react'

export const Info = () => {

    return (
        <section className="pt-6 pb-4">
            <div className="container">
                <h6 className="subtitle text-center text-primary mb-5">Our founders</h6>
                <div className="row">
                    <div className="mb-3 mb-lg-0 col-sm-4">
                        <div className="border-0 hover-animate bg-transparent card"><a className="position-relative"
                                                                                       href="#"><img
                            src="/content/img/avatar/agent-0.png" alt="Meredith Goodwin"
                            className="team-img card-img-top"/>
                            <div className="team-circle false"></div></a>
                            <div className="team-body text-center card-body"><h6 className="card-title">Meredith
                                Goodwin</h6><p
                                className="text-muted text-xs text-uppercase card-subtitle">CEO &amp; Founder</p></div>
                        </div>
                    </div>
                    <div className="mb-3 mb-lg-0 col-sm-4">
                        <div className="border-0 hover-animate bg-transparent card"><a className="position-relative"
                                                                                       href="#"><img
                            src="/content/img/avatar/agent-1.png" alt="Weeks Garrett" className="team-img card-img-top"/>
                            <div className="team-circle false"></div></a>
                            <div className="team-body text-center card-body"><h6 className="card-title">Weeks
                                Garrett</h6><p
                                className="text-muted text-xs text-uppercase card-subtitle">Co-founder</p></div>
                        </div>
                    </div>
                    <div className="mb-3 mb-lg-0 col-sm-4">
                        <div className="border-0 hover-animate bg-transparent card"><a className="position-relative"
                                                                                       href="#"><img
                            src="/content/img/avatar/agent-2.png" alt="Fisher Bauer" className="team-img card-img-top"/>
                            <div className="team-circle false"></div></a>
                            <div className="team-body text-center card-body"><h6 className="card-title">Fisher
                                Bauer</h6><p className="text-muted text-xs text-uppercase card-subtitle">CTO</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}