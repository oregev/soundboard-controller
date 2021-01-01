import React, { useState } from "react";

export const ChannelHpf = () => {
	const [popupVis, setPopupVis] = useState(false);
	const [hpfOnOff, setHpfOnOff] = useState(false);
	const [hpfFreq, setHpfFreq] = useState(80);

	return (
		<>
			<div
				className="container hpfContainer"
				onClick={() => {
					setPopupVis(true);
				}}
			>
				<div>
					<p className="switch" style={hpfOnOff ? { backgroundColor: "red" } : { backgroundColor: "gray" }}></p>
					<p className="label">hpf on</p>
				</div>
				<div>
					<p className="round">{`${hpfFreq}hz`}</p>
					<p className="label">hpf</p>
				</div>
			</div>
			{popupVis && (
				<HpfPopUp setPopupVis={setPopupVis} setHpfOnOff={setHpfOnOff} hpfFreq={hpfFreq} setHpfFreq={setHpfFreq} />
			)}
		</>
	);
};

export const HpfPopUp = ({ setPopupVis, setHpfOnOff, hpfFreq, setHpfFreq }) => {
	return (
		<div className="hpfContainer hpfPopup">
			<button
				className="hpfPopupBtn"
				onClick={() => {
					setPopupVis(false);
				}}
			>
				X
			</button>
			<div>
				<button className="switch" onClick={() => setHpfOnOff((last) => !last)}></button>
				<p className="label">hpf on</p>
			</div>
			<div>
				<input value={hpfFreq} min="20" max="800" type="range" onChange={(e) => setHpfFreq(e.target.value)} />
				<p className="label">hpf</p>
			</div>
		</div>
	);
};
