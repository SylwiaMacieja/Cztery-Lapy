import React, {useState} from "react";
import {NavLink} from "react-router-dom";

export function LoginStep1 ({selected}, {setSelected}) {
    const [isActive, setIsActive] = useState(false);
    const options = ['Schronisko1', 'Schronisko2', 'Schronisko3', 'Schronisko4']

    const handleCheckbox = event => {
        console.log(event.target.value);


    }
    return (
        <div className='LoginStep'>

            <form>

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

            </div>
                <div className="dropdown">
                    <h1 className="dropdown__title">2. Wybierz schornisko z listy</h1>
                    <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>{selected}</div>
                    {isActive && (
                        <div className="dropdown__content">
                            {options.map((option) => (
                                <div onClick={(e) => {
                                    setSelected(option)
                                    setIsActive(false)
                                }
                                } className="dropdown__content__item">{option}</div>
                            ))}
                        </div>
                    )}
                </div>

                <div>
                    <h1 className="LoginStep3__title">3. Zamów kuriera wypełniając poniższe dane</h1>
                    <input className="LoginStep3__input" type="text" name="street" placeholder="ulica, numer domu, numer mieszkania"/>
                    <input className="LoginStep3__input" type="text" name="postcode" placeholder="kod pocztowy xx-xxx"/>
                    <input className="LoginStep3__input" type="text" name="city" placeholder="miasto"/>
                    <input className="LoginStep3__input" type="text" name="data" placeholder="data odbioru przesyłki"/>
                </div>

            </form>
        </div>
    )
}