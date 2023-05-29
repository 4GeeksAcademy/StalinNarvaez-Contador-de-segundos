import React from "react";

//create your first component
	function ContadorSegundos(props) {
		return (
			<div className="text-center contenedorPrincipal">
				<div className="reloj">
					<i className="fa-sharp fa-regular fa-clock"></i>
				</div>
				<div className="contador1">{props.sextoDigito}</div>
				<div className="contador2">{props.quintoDigito}</div>
				<div className="contador3">{props.cuartoDigito}</div>
				<div className="contador4">{props.tercerDigito}</div>
				<div className="contador5">{props.segundoDigito}</div>
				<div className="contador6">{props.primerDigito}</div>
			</div>
		)
	};
		console.log(contadorSegundos());
;

export default SecondsCounter;
