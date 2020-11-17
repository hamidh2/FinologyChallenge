import React from "react";
import People from "./people";
import Partners from "./partners/index.js";
import ContactUs from "./contact-us/index.js";
import Content from "./content/index.js";

const Main = () => {
    return (
        <main className="container">
            <Content />
            <People />
            <Partners />
            <ContactUs />
        </main>);
}

export default Main;