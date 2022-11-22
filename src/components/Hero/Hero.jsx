import React from "react";
import {NavLink} from "react-router-dom";


export function Hero () {
    return (
        <div className='Hero'>
            <div className='Hero__info'>
                <h1 className='Hero__heading'>I Ty możesz zrobić coś dobrego!</h1>
                <p className='Hero__description'>Przekaż karmę lub środki pieniężne na wybrane schronisko</p>
            </div>
                <div className="Hero__container">
                    <NavLink className="Hero__btn" to="/providedogfood">Przekaż karmę</NavLink>
                    <NavLink className="Hero__btn"to="/organize">Zorganizuj zbiórkę</NavLink>
                </div>
        </div>
    )
}