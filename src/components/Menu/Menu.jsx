import React, {useEffect, useState} from "react";
import { NavLink} from "react-router-dom";
import {Link} from "react-scroll";
import {useNavigate} from "react-router-dom";
import supabase from "../../supabase/supabaseClient.jsx";


export function Menu () {
    const [isLogged, setIsLogged] = useState(false);
    // const navigate = useNavigate();

    useEffect(() => {
        const isUserLogged = async () => {
            const {data: {user}} = await supabase.auth.getUser();

            if (!user) {
                // navigate('/login');
                return;
            }
            setIsLogged(true);
        }
        isUserLogged();
    }, []);


    // const logoutUser = async (event) => {
    //     let {error} = await supabase.auth.signOut();


        return (
            <div className="Menu__container">
                <div className="Menu__hamburger"></div>
                <ul className="Menu__left">
                    <li><Link className="Menu__left__item" to='home' smooth={true} duration={500}>Start</Link></li>
                    <li><Link className="Menu__left__item" to='info' offset={-40} smooth={true}
                              duration={500}>Info</Link></li>
                    <li><Link className="Menu__left__item" to='about' offset={-120} smooth={true} duration={500}>O
                        nas</Link></li>
                    <li><Link className="Menu__left__item" to='ForWho' offset={-100} smooth={true}
                              duration={500}>Schroniska</Link></li>
                    <li><Link className="Menu__left__item" to='form' smooth={true} duration={1000}>Kontakt</Link></li>
                </ul>
                <div className="Menu__logo">Cztery Łapy</div>
                <ul className="Menu__right">
                    {isLogged && (
                        <>
                            {/*<li className="Menu__right__item">{user.email}</li>*/}
                        <li><NavLink className="Menu__right__item" to="/signout" /*onClick={(event) => logoutUser(event)}*/ >Wyloguj</NavLink>
                        </li>
                        </>)}
                    {!isLogged && (
                        <>
                    <li><NavLink className="Menu__right__item" to="/login">Zaloguj</NavLink></li>
                    <li><NavLink className="Menu__right__item" to="/registration">Załóż konto</NavLink></li>
                        </>
                        )}
                </ul>
            </div>
        );
    // }
}

