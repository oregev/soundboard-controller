import React from "react";

export const ChannelAux = () => {
	return (
		<div className="container">
			<Aux />
			<Aux />
			<Aux />
			<Aux />
			<Aux />
			<Aux />
			<Aux />
			<Aux />
		</div>
	);
};

export const Aux = () => {
	return (
		<div className="auxContainer">
			<div>
				<button className="switch"></button>
				<p className="label">on</p>
			</div>
			<div>
				<button className="round"></button>
				<p className="label">vol</p>
			</div>
		</div>
	);
};
