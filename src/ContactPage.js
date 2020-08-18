import React from 'react';
import {Header} from "./Header";
import {Contacts} from "./Contacts";
import {Footer} from "./Footer";


function ContactPage() {
    return (
        <div className="container">
            <main>
            <Header />
            <Contacts />
            <Footer />
            </main>
        </div>
    );
}

export default ContactPage;
