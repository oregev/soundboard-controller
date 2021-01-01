import React, { useState } from "react";

export const ChannelEq = () => {
	const [popupVis, setPopupVis] = useState(false);

	return (
		<>
			<div
				className="container"
				onClick={() => {
					setPopupVis(true);
				}}
			></div>
			{popupVis && <EqPopup />}
		</>
	);
};

export const EqPopup = () => {
	return (
		<div className="eqPopup">
			<div>
				<button className="switch"></button>
				<p className="label">eq on</p>
			</div>
			<EqBand />
			<EqBand />
			<EqBand />
			<EqBand />
		</div>
	);
};

export const EqBand = () => {
	return (
		<div className="eqBandContainer">
			<div style={{ border: "1px solid black" }}>
				<input type="range" />
				<p className="label">gain</p>
				<input type="range" />
				<p className="label">freq</p>
				<input type="range" />
				<p className="label">Q</p>
			</div>
		</div>
	);
};
