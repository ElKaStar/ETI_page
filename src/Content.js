import React from 'react';
import {Footer} from "./Footer";
import {Header} from "./Header";
import Pages from "./Pages";
import {Anime} from "./amine";
import './App.css'


function Content() {
    return (
        <div className="container" style={{zIndex: 10}}>
            <Anime>
            <Header />
            <Pages />
            <Footer />
        </Anime>
        </div>
    );
}

export default Content;
