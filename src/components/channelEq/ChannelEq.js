import React from "react";

export const ChannelEq = ({ eqState, setEqState, setPopupVis }) => {
	const setEqGain = (name, gain) => {
		const tempEqState = eqState.map((band) => {
			return name === band.bandName
				? { bandName: band.bandName, isOn: band.isOn, gain: gain, freq: band.freq, q: band.q }
				: band;
		});
		setEqState([...tempEqState]);
	};

	const setBandOn = (name) => {
		const tempEqState = eqState.map((band) => {
			return name === band.bandName
				? { bandName: band.bandName, isOn: !band.isOn, gain: band.gain, freq: band.freq, q: band.q }
				: band;
		});
		setEqState([...tempEqState]);
		console.log(tempEqState);
	};

	const setEqFreq = (name, freq) => {
		const tempEqState = eqState.map((band) => {
			return name === band.bandName
				? { bandName: band.bandName, isOn: band.isOn, gain: band.gain, freq: freq, q: band.q }
				: band;
		});
		setEqState([...tempEqState]);
	};
	const setEqQ = (name, Q) => {
		const tempEqState = eqState.map((band) => {
			return name === band.bandName
				? { bandName: band.bandName, isOn: band.isOn, gain: band.gain, freq: band.freq, q: Q }
				: band;
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
				return (
					<EqBand
						key={index}
						band={band}
						setBandOn={setBandOn}
						setEqGain={setEqGain}
						setEqFreq={setEqFreq}
						setEqQ={setEqQ}
					/>
				);
			})}
			<p>{`Slider: ${eqState[0].freq}`}</p>
		</div>
	);
};

export const EqBand = ({ band, setEqGain, setBandOn, setEqFreq, setEqQ }) => {
	return (
		<div className="eqBandContainer">
			<div style={{ border: "1px solid black" }}>
				<p>{band.bandName}</p>
				<div>
					<button className="switch" onClick={() => setBandOn(band.bandName)}></button>
					<p className="label">band on</p>
				</div>
				<input
					type="range"
					value={band.gain}
					min={0}
					max={100}
					onChange={(e) => setEqGain(band.bandName, e.target.value)}
				/>
				<p className="label">gain</p>
				<input
					type="range"
					value={band.freq}
					min={10}
					max={190}
					step={0.1}
					onChange={(e) => setEqFreq(band.bandName, e.target.value)}
				/>
				<p className="label">freq</p>
				<input type="range" value={band.q} min={5} max={70} onChange={(e) => setEqQ(band.bandName, e.target.value)} />
				<p className="label">Q</p>
			</div>
		</div>
	);
};
