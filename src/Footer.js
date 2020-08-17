import React from 'react'

export const Footer = () => {


    return (
        <div className="py-4 font-weight-light bg-gray-800 text-gray-300">
            <div className="container">
                <div className="align-items-center row">
                    <div className="text-center text-md-left col-md-6"><p className="text-sm mb-md-0">© 2020, Your
                        company. All rights reserved.</p></div>
                    <div className="col-md-6">
                        <ul className="list-inline mb-0 mt-2 mt-md-0 text-center text-md-right">
                            <li className="list-inline-item"><img src="/content/svg/visa.svg" alt="..."
                                                                  className="w-2rem"/></li>
                            <li className="list-inline-item"><img src="/content/svg/mastercard.svg" alt="..."
                                                                  className="w-2rem"/></li>
                            <li className="list-inline-item"><img src="/content/svg/paypal.svg" alt="..."
                                                                  className="w-2rem"/></li>
                            <li className="list-inline-item"><img src="/content/svg/western-union.svg" alt="..."
                                                                  className="w-2rem"/></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}