import React from 'react';
import {Footer} from "./Footer";
import {Header} from "./Header";
import Pages from "./Pages";


function Content() {
    return (
        <div className="container">
            <Header />
            <Pages />
            <Footer />
        </div>
    );
}

export default Content;
