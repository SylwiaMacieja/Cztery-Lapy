import React from "react";
import {NavLink} from "react-router-dom";


export function Hero () {
    return (
        <div className='Hero'>
                <p className='Hero__info'>I Ty możesz zrobić coś dobrego!</p>
                <p className='Hero__info'>Przekaż karmę lub środki pieniężne na wybrane schronisko</p>
                <div className="Hero__container">
                    <NavLink className="Hero__btn" to="/providedogfood">Przekaż karmę</NavLink>
                    <NavLink className="Hero__btn"to="/organize">Zorganizuj zbiórkę</NavLink>
                </div>
        </div>
    )
}