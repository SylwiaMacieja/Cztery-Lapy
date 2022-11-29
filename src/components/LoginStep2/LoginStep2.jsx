import React from "react";
import {useState} from "react";

export function LoginStep2 ({selected, setSelected}) {

    const [isActive, setIsActive] = useState(false);
    const options = ['Schronisko1', 'Schronisko2', 'Schronisko3', 'Schronisko4']

    return (
    <div className="dropdown">
        <h1 className="dropdown__title">2. Wybierz schornisko z listy</h1>
         <div className="dropdown__btn" onClick={(e) => setIsActive(!isActive)}>{selected}<span className='fas fa-caret-down'></span> </div>
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
);
}