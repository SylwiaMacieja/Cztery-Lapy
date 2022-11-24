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
    if(!form.password === form.checkPassword) {
        return'Hasła nie są identyczne'
    }
}

export function Registration () {

    const [error, setError] = useState(null);
    const [form, setForm] = useState ({
        email:'',
        password:'',
        checkPassword:'',
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
            `Pomyślnie zarejestrowano`
        );
        event.target.reset()
    }
    return (
        <div className='Registration'>
            <div className='Registration__img'>
            </div>
            <div>
                <div className='Registration__login'>Masz konto??
                    <NavLink className='Login__registration__btn' to='/login'>Zaloguj się</NavLink>
                    ...lub wróć
                    <NavLink className='Login__registration__btn' to='/'>Strona główna</NavLink>
                </div>


                <h1 className='Registration__title'> Rejestracja </h1>

                <form className='Registration__form' onSubmit={handleSubmit}>
                    <input className='Registration__input' type='text' name='email' placeholder='Email' onChange={update}></input>
                    <input className='Registration__input' type='text' name='password' placeholder='Hasło' onChange={update}></input>
                    <input className='Registration__input' type='text' name='checkPassword' placeholder='Hasło' onChange={update}></input>
                    <button className='Registration__btn' type='submit'>Zarejestruj się</button>
                    {error && (<div className='Registration__error'>{error}</div> )}
                </form>

            </div>

        </div>
    )
}