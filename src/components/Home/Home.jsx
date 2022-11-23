import React from "react";
import {Menu} from "../Menu/Menu";
import {Hero} from "../Hero/Hero";
import {ThreeColumns} from "../ThreeColumns/ThreeColumns";
import {Steps} from "../Steps/Steps";
import {About} from "../About/About";
import {ForWho} from "../ForWho/ForWho";
import {Form} from "../Form/Form.jsx";
import {Footer} from "../Footer/Footer";




export function Home () {
    return (
        <div id='home'>
            <Menu />
            <Hero />
            <Steps />
            <ThreeColumns />
            <About />
            <ForWho />
            <Form />
            <Footer />
        </div>
    )
}