import React from "react";
import {NavLink} from "react-router-dom";


export function Hero () {
    return (
        <div className='Hero' id='hero'>
                <h1 className='Hero__heading'>I Ty możesz <br/>pomóc</h1>
                <p className='Hero__description'>Przekaż karmę lub środki pieniężne na wybrane schronisko</p>

            <NavLink className="Hero__btn" to="/providedogfood">Przekaż karmę</NavLink>

        </div>
    )
}