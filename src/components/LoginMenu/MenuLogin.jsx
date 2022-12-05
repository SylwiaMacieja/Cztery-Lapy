import React from "react";
import {NavLink} from "react-router-dom";

export function MenuLogin () {
    return (
        <div className="MenuLogin">
            {/*<div className="MenuLogin__info">sylwia.macieja@gmail.com</div>*/}
            <div ><NavLink className="MenuLogin__btn" to='/'> Wróć do strony głównej </NavLink></div>
        </div>
    )
}