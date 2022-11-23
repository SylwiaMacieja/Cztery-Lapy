import React from "react";

export function ThreeColumns () {
    return (
        <section className="Info__container" >
            <div className="Info__weight">
                <div className='Info__numbers'>12773</div>
                <div className='Info__title'>kiligramów karmy</div>
                <div className='Info__description'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam perspiciatis rerum voluptatum.</div>
            </div>
            <div className="Info__support">
                <div className='Info__numbers'>8</div>
                <div className='Info__title'>wspartych schronisk i fundacji</div>
                <div className='Info__description'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, illo impedit laboriosam nam placeat voluptatum?</div>
            </div>
            <div className="Info__collection">
                <div className='Info__numbers'>15</div>
                <div className='Info__title'>zorganizowanych zbiórek</div>
                <div className='Info__description'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dolorum facilis laudantium minima nostrum placeat quo quos repellat reprehenderit voluptatibus!</div>
            </div>
        </section>
    )
}