import React from "react";

export function LoginForm () {

    return (
        <form className='LoginForm'>
            <h1 className='LoginForm__title'>Wybierz schronisko, któremu chcesz pomóc</h1>
            <select className="form-select" aria-label="Default select example">
                <option selected>Wybierz schronisko</option>
                <option value="1">Schronisko1</option>
                <option value="2">Schronisko2</option>
                <option value="3">Schronisko3</option>
                <option value="4">Schronisko4</option>
            </select>
            <h1 className='LoginForm__title'>Wybierz rzeczy, które chcesz przekazać</h1>
            <div className='LoginForm__checkbox'>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" htmlFor="exampleCheck1">Karma</label>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck2"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Koce</label>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck3"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Zabawki</label>
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck4"/>
                <label className="form-check-label" htmlFor="exampleCheck1">Akcesoria</label>
            </div>
            </div>
            <h1 className='LoginForm__title'>Wypełnij dane, pod które wyślemy kuriera</h1>
            <div className="mb-3">
                <input type="text" className="form-control" id="formGroupExampleInput"
                       placeholder="Ulica i numer domu/mieszkania"/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="formGroupExampleInput2"
                       placeholder="kod pocztowy i miasto"/>
            </div>
            <div className="mb-3">
                <input type="text" className="form-control" id="formGroupExampleInput2"
                       placeholder="telefon kontaktowy dla kuriera"/>
            </div>
            <button type="submit" className="btn btn-primary">Wyślij</button>
        </form>

    )
}