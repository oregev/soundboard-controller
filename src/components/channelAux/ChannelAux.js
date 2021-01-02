import React from "react";

export const ChannelAux = ({ auxState, setAuxState, setPopupVis }) => {
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
			<button
				className="hpfPopupBtn"
				onClick={() => {
					setPopupVis(false);
				}}
			>
				X
			</button>
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
					min={0}
					max={100}
					onChange={(e) => {
						updateAuxVol(aux.auxNo, e.target.value);
					}}
				/>
				<p className="label">vol</p>
			</div>
		</div>
	);
};
