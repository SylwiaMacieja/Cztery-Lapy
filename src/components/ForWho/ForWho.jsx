import React from "react";
import {NavLink} from "react-router-dom";

export function ForWho () {
    return (
        <section className="ForWho">
            <p className='ForWho__title'> Komu pomagamy</p>
            <div className='ForWho__container'>
                <div className='ForWho__img1'>
                    <NavLink className="ForWho__button1" to="/schronisko"> Schronisko 1</NavLink>
                </div>
                <div className='ForWho__img2'>
                    <NavLink className="ForWho__button2" to="/schronisko"> Schronisko 2</NavLink>
                </div>
                <div className='ForWho__img3'>
                    <NavLink className="ForWho__button3" to="/schronisko">Schronisko 3</NavLink>
                </div>
                <div className='ForWho__img4'>
                    <NavLink className="ForWho__button4" to="/schronisko">Schronisko 4</NavLink>
                </div>
            </div>
        </section>
    );
}