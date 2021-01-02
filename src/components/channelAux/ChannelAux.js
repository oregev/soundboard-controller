import React, { useState } from "react";

export const ChannelAux = ({ auxState, setAuxState }) => {
	// const [auxState, setAuxState] = useState([
	// 	{ auxNo: 1, isOn: true, sendVol: 80 },
	// 	{ auxNo: 2, isOn: true, sendVol: 50 },
	// 	{ auxNo: 3, isOn: true, sendVol: 20 },
	// 	{ auxNo: 4, isOn: true, sendVol: 70 },
	// 	{ auxNo: 5, isOn: true, sendVol: 100 },
	// 	{ auxNo: 6, isOn: true, sendVol: 30 },
	// 	{ auxNo: 7, isOn: true, sendVol: 10 },
	// 	{ auxNo: 8, isOn: true, sendVol: 80 },
	// ]);

	const updateAuxVol = (num, vol) => {
		const tempAuxState = auxState.map((aux) => {
			return aux.auxNo === num ? { auxNo: num, isOn: aux.isOn, sendVol: vol } : aux;
		});
		setAuxState([...tempAuxState]);
	};

	const updateAuxOn = (num) => {
		const tempAuxState = auxState.map((aux) => {
			return aux.auxNo === num ? { auxNo: aux.auxNo, isOn: !aux.isOn, sendVol: aux.sendVol } : aux;
		});
		setAuxState([...tempAuxState]);
	};

	return (
		<div className="container auxPopup">
			{auxState.map((aux, index) => {
				return <Aux key={index} aux={aux} updateAuxOn={updateAuxOn} updateAuxVol={updateAuxVol} />;
			})}
		</div>
	);
};

export const Aux = ({ aux, updateAuxOn, updateAuxVol }) => {
	return (
		<div className="auxContainer">
			<div>
				<button
					className="switch"
					onClick={() => {
						updateAuxOn(aux.auxNo);
					}}
					style={aux.isOn ? { backgroundColor: "red" } : { backgroundColor: "gray" }}
				></button>
				<p className="label">on</p>
			</div>
			<div>
				<input
					type="range"
					value={aux.sendVol}
					min="0"
					max="100"
					onChange={(e) => {
						updateAuxVol(aux.auxNo, e.target.value);
					}}
				/>
				<p className="label">vol</p>
			</div>
		</div>
	);
};
