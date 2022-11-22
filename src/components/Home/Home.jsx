import React from "react";
import {Header} from "../HomeHeader/Header";
import {Hero} from "../Hero/Hero";
import {ThreeColumns} from "../ThreeColumns/ThreeColumns";
import {Steps} from "../Steps/Steps";
import {About} from "../About/About";
import {ForWho} from "../ForWho/ForWho";
import {Form} from "../Form/Form.jsx";



export function Home () {
    return (
        <div>
            <Header />
            <Hero />
            <ThreeColumns />
            <Steps />
            <About />
            <ForWho />
            <Form />
        </div>
    )
}