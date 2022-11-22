import React from "react";
import {useState} from "react";



const validate = form => {

    if(!form.name) {
        return'Imię jest wymagane'
    } else if (form.name.length <= 2) {
        return 'Imie musi mieć więcej niż dwa znaki'
    }
    if(!form.surname) {
        return'Nazwisko jest wymagane'
    } else if (form.surname.length <= 2) {
        return 'Nazwisko musi mieć więcej niż dwa znaki'
    }
    if(!form.phone) {
        return 'Telefon jest wymagany'
    }  else if (form.phone.length <= 8) {
        return 'Telefon musi mieć 9 znaków'
    }  else if (form.phone.length > 9) {
        return 'Telefon musi mieć 9 znaków'
    }
    // if(!form.email) {
    //     return'Email jest wymagany'
    // } else if (!form.email.includes('@')) {
    //     return 'Zły format email'
    // }
    if(!form.q1) {
        return 'Treść wiadomości jest wymagana'
    }

    return null
}

export function Form () {
    const [error, setError] = useState (null);
    const [form, setForm] = useState({
        name: '',
        surname:'',
        phone: '',
        // email: '',
        q1: '',

    });

    const update = event => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit =  (event) => {
        event.preventDefault();
        const errorMsg = validate(form);
        if(errorMsg) {

            setError(errorMsg);
            console.log('blad');
            return
        }
        alert(
            `Podano następujące dane:
        Imie i nazwisko: ${form.name} ${form.surname}
        Telefon: ${form.phone}
        Pytanie 1: ${form.q1}`
        );
        console.log('submitted', form);
        event.target.reset();
    }



    return (
        <div className='Container'>
            <div className='Form__header'>
                <h1 className='Form__title'>Masz pytania? SKontaktuj się z nami!</h1>
                <p className='Form__description'>Odpowiemy na Twoja wiadomośc w przeciągu 24h</p>
            </div>

            <form className='Form' onSubmit={handleSubmit}>

                <div className='Form__contact'>
                    <textarea className='Form__input' type='text' name='name' placeholder='Imię' onChange={update}/>

                    <textarea className='Form__input' type='text' name='surname' placeholder='Nazwisko'
                              onChange={update}/>
                    {/*<label className='Form__label'>Nazwisko</label>*/}

                    <textarea className='Form__input' type='text' name='phone' placeholder='Telefon: xxx xxx xxx'
                              onChange={update}/>
                    {/*<label className='Form__label'>Email</label>*/}
                </div>

                <div className='Form__questions'>
                        <textarea className='Form__input__q' type='text' placeholder='Pytanie 1' name='q1'
                                  onChange={update}/>

                </div>

                <button  className="Form__button" type='submit'>WYŚLIJ</button>

            </form>
            {error && (<div className='Form__error'>{error}</div>)}
        </div>
    )
}
