import React from "react";
import {NavLink} from "react-router-dom";

export function LoginStep1 () {

    const handleCheckbox = event => {
        console.log(event.target.value)
    }
    return (
        <div className='LoginStep'>
        {/*    <div className='LoginStep1__info'> Wybierz rzeczy</div>*/}
        {/*    <div className='LoginStep__arrow'></div>*/}
        {/*    <div className='LoginStep2__info'> Wybierz schronisko</div>*/}
        {/*    <div className='LoginStep__arrow'></div>*/}
        {/*    <div className='LoginStep3__info'> Zamów kuriera</div>*/}
        {/*</div>*/}

            <div className="LoginStep__list">
            <h1 className="LoginStep__list__heading">1. Wybierz rzeczy, które chcesz przekazać</h1>

                <div>
                <input className="LoginStep__list__checkbox" onChange={handleCheckbox} type='checkbox' name='stuff' value='food'/>
                    <label className="LoginStep__list__item" > Karma </label>
                </div>

                <div>
                    <input className="LoginStep__list__checkbox" onChange={handleCheckbox} type='checkbox' name='stuff' value='blanket'/>
                    <label className="LoginStep__list__item" > Koce </label>
                </div>

                <div>
                    <input  className="LoginStep__list__checkbox" onChange={handleCheckbox} type='checkbox' name='stuff' value='toys'/>
                    <label className="LoginStep__list__item" > Zabawki </label>
                </div>
                <div>
                    <input className="LoginStep__list__checkbox" onChange={handleCheckbox} type='checkbox' name='stuff' value='accessories'/>
                    <label className="LoginStep__list__item" > Akcesoria </label>
                </div>

            {/*<NavLink className="LoginStep__list__btn" to='/step2'> Dalej</NavLink>*/}
            </div>
        </div>
    )
}