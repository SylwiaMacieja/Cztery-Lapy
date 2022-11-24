import React, {useState} from "react";
import {NavLink} from "react-router-dom";

const validate = form => {
    if(!form.email) {
        return'Email jest wymagany'
    } else if (!form.email.includes('@')) {
        return 'Zły format email'
    }
    if(!form.password) {
        return'Hasło jest wymagane'
    }
}

export function Login () {

    const [error, setError] = useState(null);
    const [form, setForm] = useState ({
            email:'',
            password:''
        });

    const update = event => {
        setForm ({
            ...form,
            [event.target.email]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const errorMsg = validate(form);
        if (errorMsg) {
            setError(errorMsg);
            return
        }
        alert (
            `Pomyślnie zalogowano`
        );
        event.target.reset()
    }
    return (
        <div className='Login'>
            <div className='Login__img'>
            </div>

            <div>
                <div className='Login__registration'>Nie masz konta???
                    <NavLink className='Login__registration__btn' to='/registration'>Zarejestruj się</NavLink>
                    ...lub wróć
                    <NavLink className='Login__registration__btn' to='/'>Strona główna</NavLink>
                </div>
                <h1 className='Login__title'> Logowanie </h1>

                <form className='Login__form' onSubmit={handleSubmit}>
                    <input className='Login__input' type='text' name='email' placeholder='Email' onChange={update}></input>
                    <input className='Login__input' type='text' name='password' placeholder='Hasło' onChange={update}></input>
                    <button className='Login__btn' type='submit'>Zaloguj</button>
                    {error && (<div className='Login__error'>{error}</div> )}
                </form>


            </div>
        </div>
    )
}