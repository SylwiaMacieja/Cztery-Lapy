import React from "react";
import {Menu} from "../../components/Menu/Menu.jsx";
import {Hero} from "../../components/Hero/Hero.jsx";
import {ThreeColumns} from "../../components/ThreeColumns/ThreeColumns.jsx";
import {Steps} from "../../components/Steps/Steps.jsx";
import {About} from "../../components/About/About.jsx";
import {ForWho} from "../../components/ForWho/ForWho.jsx";
import {Form} from "../../components/Form/Form.jsx";
import {Footer} from "../../components/Footer/Footer.jsx";




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