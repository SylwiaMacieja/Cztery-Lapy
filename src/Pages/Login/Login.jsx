import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import supabase from "../../supabase/supabaseClient.jsx";
import {useNavigate} from "react-router-dom";


const loginValidate = login => {

    if (!login.loginEmail) {
        return 'Email jest wymagany'
    } else if (login.loginEmail.length <= 5) {
        return 'login jest za krótki'
    } else if (!login.loginEmail.includes('@')) {
        return 'Zły format email'
    }
    if (!login.loginPassword) {
        return 'Hasło jest wymagane'
    } else if (login.loginPassword.length <= 3) {
        return "Hasło jest za krótkie"
    }

}

export function Login () {
    const navigate = useNavigate();

    const [login, setLogin] = useState({
        loginEmail: '',
        loginPassword: '',
    })
    const [loginError, setLoginError] = useState(null);

    const loginUpdate = event => {
        setLogin({
            ...login,
            [event.target.name]: event.target.value
        })
    }


    const loginSubmit = async (event) => {
        event.preventDefault();



        const [loginEmail, loginPassword] = event.target.elements;

        const loginErrorMsg = loginValidate(login);

        if (loginErrorMsg) {
            setLoginError(loginErrorMsg);
            return
        }
        let {data: {user}, error} = await supabase.auth.signInWithPassword({
            email: loginEmail.value,
            password: loginPassword.value,
        });


        if (error) {
            console.log(error)
            setLoginError("błąd");
            return
        }
        localStorage.setItem('userData', JSON.stringify(user));
        navigate('/');
    }

    return (
        <div className="Login">

            <div>
                <div className='Login__registration'>Nie masz konta??
                    <NavLink className='Registration__login__btn' to='/registration'>Zarejestruj się</NavLink>
                </div>

                <div className='Login__registration'>   ...lub wróć
                 <NavLink className='Registration__login__btn' to='/'>Strona główna</NavLink>
                </div>

                <form
                    className="Login__form"
                    onSubmit={(event) => loginSubmit(event)}>
                    <h1 className='Login__title'> Logowanie </h1>
                    <input
                        className='Login__input'
                        type='text' name="loginEmail"
                        placeholder='Email' onChange={loginUpdate}/>
                    <input
                        className='Login__input'
                        type='password'
                        name="loginPassword"
                        placeholder='Hasło'
                        onChange={loginUpdate}/>

                    <button className="Login__btn" type="submit">Zaloguj!</button>

                    {loginError && (<div className="Login__error">{loginError}</div> )}

                </form>
            </div>
        </div>
    )
}