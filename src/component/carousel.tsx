import React, { useState } from 'react';
import '../component/Carousel.scss';
// import ReactCSSTransitionGroup from "react-transition-group";

export interface Props {
    slides: Array<string>;
}

function Carousell({ slides }: Props) {
    const [count, setCount] = useState(1);


    return (
        <div className="carousel">
            <div className="carousel__container">
                <button className='btn__prev' onClick={() => setCount(v => v - 1)} disabled={count <= 1}>&laquo;</button>
                <img src={slides[count - 1]}></img>
                <button className='btn__next' onClick={() => setCount(v => v + 1)} disabled={count >= slides.length}>&raquo;</button>
            </div >
        </div >
    );
}

export default Carousell;
