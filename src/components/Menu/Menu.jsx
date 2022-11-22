import React from "react";
import {NavLink} from "react-router-dom";
// import {ScrollLink} from "react-scroll";

export function Menu() {
    return (
<div className="Menu__container">
    <div className="Menu__container__left">
        <div className="Menu__hamburger"></div>


        <ul className="Menu__left">
            <li><NavLink className="Menu__left__item" to="/start">Start</NavLink></li>
            <li><NavLink className="Menu__left__item" to="/about">O nas</NavLink></li>
            <li><NavLink className="Menu__left__item" to="/fundations">Schroniska</NavLink></li>
            <li><NavLink className="Menu__left__item" to="/contact">Kontakt</NavLink></li>
        </ul>
    </div>
        <div className="Menu__logo">LogoLogo jsaihdjh</div>
    <div className="Menu__container__right">
        <ul className="Menu__right">
            <li><NavLink className="Menu__right__item" to="/login">Zaloguj</NavLink></li>
            <li><NavLink className="Menu__right__item" to="/register">Załóż konto</NavLink></li>
        </ul>
    </div>
</div>

    );
}