import React, { useState, useEffect, useRef } from "react";
import { ChannelEq } from "./ChannelEq";

export const ChannelEqSm = () => {
	const canvasRef = useRef(null);
	const context = useRef(null);
	const [popupVis, setPopupVis] = useState(false);

	const [eqState, setEqState] = useState([
		{ bandName: "high", isOn: true, gain: 80, freq: 8000, q: 0.2 },
		{ bandName: "highMid", isOn: true, gain: 50, freq: 3150, q: 0.2 },
		{ bandName: "lowMid", isOn: true, gain: -100, freq: 250, q: 1 },
		{ bandName: "low", isOn: true, gain: 30, freq: 80, q: 0.5 },
	]);

	const eqColors = [
		"rgb(145, 238, 145, 0.5)",
		"rgb(173, 216, 230, 0.5)",
		"rgb(255, 255, 0, 0.5)",
		"rgb(255, 0, 0, 0.5)",
	];

	const draw = () => {
		let ctx = context.current;
		// ctx.fillStyle = "lightGreen";
		ctx.clearRect(0, 0, 100, 100);
		const MAX_FREQ = 20000;
		const MIN_FREQ = 20;
		const FREQ_STEP = 100 / (MAX_FREQ - MIN_FREQ); // 100 is canvas size.

		eqState.forEach((band, index) => {
			const startPoint = Math.log2(+band.freq / 20) * 10;

			// console.log("from freq", "80", " to pixel:", Math.log2(80 / 20) * 10);
			// console.log("from freq", "250", "to pixel:", Math.log2(250 / 20) * 10);
			// console.log("from freq", "3150", "to pixel:", Math.log2(3150 / 20) * 10);
			// console.log("from freq", "8000", "to pixel:", Math.log2(8000 / 20) * 10);

			//console.log(Math.sqrt(1250) / 2);
			//const startPoint = band.freq * FREQ_STEP;
			console.log("point", startPoint, "at freq", +band.freq);
			const peak = 50 - band.gain;
			const endPoint = band.q * 100;

			ctx.beginPath();
			ctx.fillStyle = band.isOn ? eqColors[index] : "gray";
			ctx.strokeStyle = "black";
			ctx.moveTo(startPoint, 50);
			ctx.quadraticCurveTo((startPoint + endPoint) / 2, peak, startPoint + endPoint, 50);
			ctx.stroke();
			ctx.fill();
		});

		//================ 0DB devider
		ctx.beginPath();
		ctx.strokeStyle = "red";
		ctx.moveTo(0, 50);
		ctx.lineTo(100, 50);
		ctx.stroke();

		//================ low devider
		ctx.beginPath();
		ctx.strokeStyle = "red";
		ctx.moveTo(100 * FREQ_STEP, 0);
		ctx.lineTo(100 * FREQ_STEP, 100);
		ctx.stroke();
	};

	useEffect(() => {
		context.current = canvasRef.current.getContext("2d");
		draw();
	});

	return (
		<>
			<div
				onClick={() => {
					setPopupVis(true);
				}}
			>
				<canvas ref={canvasRef} width="100px" height="100px" style={{ border: "1px solid black" }}></canvas>
			</div>
			{popupVis && <ChannelEq eqState={eqState} setEqState={setEqState} setPopupVis={setPopupVis} />}
		</>
	);
};
