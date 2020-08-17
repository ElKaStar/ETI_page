import React from 'react';
import {Menu} from "./Menu";
import {Info} from "./Info";
import {Blog} from "./Blog";
import {Panel} from "./Panel";
import {Contacts} from "./Contacts";


function Pages() {
    return (
        <div className="container">
            <Panel />
            <Info />
            <Blog />
            <Contacts />
        </div>
    );
}

export default Pages;
