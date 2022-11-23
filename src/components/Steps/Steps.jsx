import React from "react";

export function Steps () {
    return (
        <section className="Steps" id='info'>
            <p className="Steps__title">Wstarczą 3 proste kroki</p>
            <div className='Steps__container'>

                <div className="Steps__package">
                    <div className='Steps__img1'></div>
                    <div className='Steps__description'>Spakuj karmę</div>
                </div>
                <div className="Steps__choice">
                    <div className='Steps__img2'></div>
                    <div className='Steps__description'>Zdecyduj komu chcesz pomóc</div>
                </div>
                <div className="Steps__delivery">
                    <div className='Steps__img3'></div>
                    <div className='Steps__description'>Zamów kuriera</div>
                </div>
            </div>

        </section>
    )
}