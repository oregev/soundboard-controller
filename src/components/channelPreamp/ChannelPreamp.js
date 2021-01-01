import React, { useState } from "react";

export const ChannelPreamp = () => {
	const [popupVis, setPopupVis] = useState(false);
	const [gain, setGain] = useState(-22);
	const [phantom, setPhantom] = useState(false);
	const [phase, setPhase] = useState(false);

	return (
		<>
			<div className="container preampContainer" onClick={() => setPopupVis(true)}>
				<div>
					<p className="label">{gain}</p>
					<p className="label">gain</p>
				</div>
				<div>
					<p className="switch" style={phantom ? { backgroundColor: "red" } : { backgroundColor: "gray" }}></p>
					<p className="label">+48</p>
				</div>
				<div>
					<p
						className="switch phaseBtn"
						style={phase ? { backgroundColor: "yellow" } : { backgroundColor: "gray" }}
					></p>
					<p className="label">⍉</p>
				</div>
			</div>
			{popupVis && (
				<GainPopup
					setPopupVis={setPopupVis}
					gain={gain}
					setGain={setGain}
					setPhantom={setPhantom}
					setPhase={setPhase}
				/>
			)}
		</>
	);
};

export const GainPopup = ({ setPopupVis, gain, setGain, setPhantom, setPhase }) => {
	return (
		<div className="preampContainer gainPopup">
			<button className="gainPopupBtn" onClick={() => setPopupVis(false)}>
				X
			</button>
			<div>
				<input type="range" value={gain} min="-100" max="0" onChange={(e) => setGain(e.target.value)} />
				<p className="label">gain</p>
			</div>
			<div>
				<button className="switch" onClick={() => setPhantom((last) => !last)}></button>
				<p className="label">+48</p>
			</div>
			<div>
				<button className="switch phaseBtn" onClick={() => setPhase((last) => !last)}></button>
				<p className="label">⍉</p>
			</div>
		</div>
	);
};
