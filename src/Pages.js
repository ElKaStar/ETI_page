import React from 'react';
import {Info} from "./Info";
import {Blog} from "./Blog";
import {Panel} from "./Panel";
import {Contacts} from "./Contacts";


function Pages() {
    return (
        <div className="container">
            <Panel />
            <Blog />
            <Info />
            <Contacts />
        </div>
    );
}

export default Pages;
