import React from "react";

export function Steps () {
    return (
        <section className="Steps">
            <p className="Steps__title">Wstarczą 4 proste kroki</p>
            <div className='Steps__container'>
                <div className="Steps__stuff">
                    <div className='Steps__img'>Ikona</div>
                    <div className='Steps__description'>Wbierz rzeczy, które chcesz przekazać</div>
                </div>
                <div className="Steps__package">
                    <div className='Steps__img'>Ikona</div>
                    <div className='Steps__description'>Spakuj karmę</div>
                </div>
                <div className="Steps__choice">
                    <div className='Steps__img'>Ikona</div>
                    <div className='Steps__description'>Zdecyduj komu chcesz pomóc</div>
                </div>
                <div className="Steps__delivery">
                    <div className='Steps__img'>Ikona</div>
                    <div className='Steps__description'>Zamów kuriera</div>
                </div>
            </div>

        </section>
    )
}