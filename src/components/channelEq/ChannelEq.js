import React from "react";

export const ChannelEq = ({ eqState, setEqState, setPopupVis }) => {
	const setEqGain = (name, gain) => {
		const tempEqState = eqState.map((band) => {
			return name === band.bandName ? { bandName: band.bandName, gain: gain, freq: band.freq, q: band.q } : band;
		});
		setEqState([...tempEqState]);
	};
	const setEqFreq = (name, freq) => {
		const tempEqState = eqState.map((band) => {
			return name === band.bandName ? { bandName: band.bandName, gain: band.gain, freq: freq, q: band.q } : band;
		});
		setEqState([...tempEqState]);
	};
	const setEqQ = (name, Q) => {
		const tempEqState = eqState.map((band) => {
			return name === band.bandName ? { bandName: band.bandName, gain: band.gain, freq: band.freq, q: Q } : band;
		});
		setEqState([...tempEqState]);
	};

	return (
		<div className="eqPopup">
			<button
				className="hpfPopupBtn"
				onClick={() => {
					setPopupVis(false);
				}}
			>
				X
			</button>
			<div>
				<button className="switch"></button>
				<p className="label">eq on</p>
			</div>
			{eqState.map((band, index) => {
				return <EqBand key={index} band={band} setEqGain={setEqGain} setEqFreq={setEqFreq} setEqQ={setEqQ} />;
			})}
		</div>
	);
};

export const EqBand = ({ band, setEqGain, setEqFreq, setEqQ }) => {
	return (
		<div className="eqBandContainer">
			<div style={{ border: "1px solid black" }}>
				<p>{band.bandName}</p>
				<input
					type="range"
					value={band.gain}
					min={-100}
					max={100}
					onChange={(e) => setEqGain(band.bandName, e.target.value)}
				/>
				<p className="label">gain</p>
				<input
					type="range"
					value={band.freq}
					min={20}
					max={20000}
					onChange={(e) => setEqFreq(band.bandName, e.target.value)}
				/>
				<p className="label">freq</p>
				<input
					type="range"
					value={band.q}
					min={0.1}
					max={2}
					step={0.1}
					onChange={(e) => setEqQ(band.bandName, e.target.value)}
				/>
				<p className="label">Q</p>
			</div>
		</div>
	);
};
