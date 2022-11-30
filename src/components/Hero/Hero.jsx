import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import supabase from "../../supabase/supabaseClient.jsx";


export function Hero () {
    const [isLogged, setIsLogged] = useState(false);

    useEffect(() => {
        const isUserLogged = async () => {
            const {data: {user}} = await supabase.auth.getUser();

            if (!user) {
                return;
            }
            setIsLogged(true);
        }
        isUserLogged();
    }, []);

    return (
        <div className='Hero' id='hero'>
                <h1 className='Hero__heading'>I Ty możesz <br/>pomóc</h1>
                <p className='Hero__description'>Przekaż karmę lub akcesoria dla zwierząt wybranemu schronisku</p>

            {!isLogged && (
                <NavLink className="Hero__btn" to="/login">Przekaż </NavLink>
            )}
            {isLogged && (
                <NavLink className="Hero__btn" to="/afterlogin">Przekaż </NavLink>
            )}

        </div>
    );
}

