import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import supabase from "../../supabase/supabaseClient.jsx";



const validateReg = registration => {
    if(!registration.emailReg) {
        return'Email jest wymagany'
    } else if (!registration.emailReg.includes('@')) {
        return 'Zły format email'
    }
    if(!registration.passwordReg) {
        return'Hasło jest wymagane'
    }
    if(!registration.checkPasswordReg) {
        return'Powtórzenie hasła jest wymagane'
    } else if (registration.passwordReg !== registration.checkPasswordReg) {
        return'Hasła nie są takie same'
    }
    return null
}

export function Registration () {
    const navigate = useNavigate();

    const [errorReg, setErrorReg ] = useState(null);
    const [registration, setRegistration] = useState ({
        emailReg:'',
        passwordReg:'',
        checkPasswordReg:'',
    });

    const updateReg = event => {
        setRegistration({
            ...registration,
            [event.target.name]: event.target.value

        })
    }

    const handleSubmitReg = async (event) => {
        event.preventDefault();

        const [ emailReg, passwordReg, checkPasswordReg ] = event.target.elements;

        const errorMsgReg = validateReg(registration);
        if (errorMsgReg) {
            setErrorReg(errorMsgReg);
            return
        }
        let { data: {user, error}} = await supabase.auth.signUp({
            email: emailReg.value,
            password: passwordReg.value,
        });
        navigate('/login')
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

                <form className='Registration__form' onSubmit={(e) => handleSubmitReg(e)}>
                    <input
                        className='Registration__input'
                        type='text' name='emailReg'
                        placeholder='Email'
                        onChange={updateReg}>

                    </input>
                    <input
                        className='Registration__input'
                        type='password'
                        name='passwordReg'
                        placeholder='Hasło'
                        onChange={updateReg}>

                    </input>
                    <input
                        className='Registration__input'
                        type='password'
                        name='checkPasswordReg'
                        placeholder='Powtórz hasło'
                        onChange={updateReg}>

                    </input>
                    <button
                        className='Registration__btn'
                        type='submit'>
                        Zarejestruj się</button>
                    {errorReg && (<div className='Registration__error'>{errorReg}</div> )}
                </form>

            </div>

        </div>
    )
}
