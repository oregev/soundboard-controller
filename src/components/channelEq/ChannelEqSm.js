import React, { useState, useEffect, useRef } from "react";
import { ChannelEq } from "./ChannelEq";

export const ChannelEqSm = () => {
	const canvasRef = useRef(null);
	const context = useRef(null);
	const [popupVis, setPopupVis] = useState(false);

	const [eqState, setEqState] = useState([
		{ bandName: "high", gain: 80, freq: 8000, q: 0.2 },
		{ bandName: "highMid", gain: 50, freq: 3150, q: 0.2 },
		{ bandName: "lowMid", gain: -100, freq: 250, q: 1 },
		{ bandName: "low", gain: 30, freq: 80, q: 0.5 },
	]);

	const draw = () => {
		let ctx = context.current;
		ctx.fillStyle = "lightGreen";
		ctx.clearRect(0, 0, 100, 100);
		const MAX_FREQ = 20000;
		const MIN_FREQ = 20;
		const FREQ_STEP = 100 / (MAX_FREQ - MIN_FREQ); // 100 is canvas size.

		eqState.forEach((band) => {
			const startPoint = band.freq * FREQ_STEP;
			const peak = 50 - band.gain;
			const endPoint = band.q * 100;

			ctx.beginPath();
			ctx.strokeStyle = "black";
			ctx.moveTo(startPoint, 50);
			ctx.quadraticCurveTo((startPoint + endPoint) / 2, peak, startPoint + endPoint, 50);
			ctx.stroke();
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
