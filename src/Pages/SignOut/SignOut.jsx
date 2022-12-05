import React from "react";
import {NavLink} from "react-router-dom";

export function SignOut () {
    return (
        <div className='SignOut'>
            <h1 className='SignOut__title'>Pomyślnie wylogowano</h1>
            <NavLink className='SignOut__btn' to='/'> wróć do sprony głównej</NavLink>
        </div>
    )
}