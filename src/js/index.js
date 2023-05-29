//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import propTypes from 'prop-types';

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
function SimpleCounter(props){
    return (
    <div className="d-flex justify-content-center divContadorPrincipal fw-bold align-items-stretch">
        <div className="icono border border-dark border-3 rounded m-3">
            <i class="far fa-clock"></i>
        </div>
        <div className="seis border border-dark border-3 rounded m-3">{props.sextoDigito % 10}</div>
        <div className="cinco border border-dark border-3 rounded m-3">{props.quintoDigito % 10}</div>
        <div className="cuatro border border-dark border-3 rounded m-3">{props.cuartoDigito % 10}</div>
        <div className="tres border border-dark border-3 rounded m-3">{props.tercerDigito % 10}</div>
        <div className="dos border border-dark border-3 rounded m-3">{props.segundoDigito % 10}</div>
        <div className="uno border border-dark border-3 rounded m-3">{props.primerDigito % 10}</div>
    </div>
    );
}
SimpleCounter.propTypes = {
    sextoDigito: propTypes.number,
    quintoDigito: propTypes.number,
    cuartoDigito: propTypes.number,
    tercerDigito: propTypes.number,
    segundoDigito: propTypes.number,
    primerDigito: propTypes.number,
};

let contador = 0;
setInterval(
    function(){
    const seis = Math.floor(contador/100000);
    const cinco = Math.floor(contador/10000);
    const cuatro = Math.floor(contador/1000);
    const tres = Math.floor(contador/100);
    const dos = Math.floor(contador/10);
    const uno = Math.floor(contador/1);
    contador++;

    ReactDOM.render(<SimpleCounter primerDigito={uno} segundoDigito={dos} tercerDigito={tres} cuartoDigito={cuatro} quintoDigito={cinco} sextoDigito={seis}/>, document.querySelector("#app")
    );
},1000);