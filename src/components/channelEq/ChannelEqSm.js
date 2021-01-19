import React, { useState, useEffect, useRef } from "react";
import { ChannelEq } from "./ChannelEq";

export const ChannelEqSm = () => {
	const canvasRef = useRef(null);
	const context = useRef(null);
	const [popupVis, setPopupVis] = useState(false);

	const [eqState, setEqState] = useState([
		{ bandName: "high", isOn: true, gain: 0, freq: 40, q: 20 },
		{ bandName: "highMid", isOn: true, gain: 100, freq: 80, q: 20 },
		{ bandName: "lowMid", isOn: true, gain: -50, freq: 120, q: 20 },
		{ bandName: "low", isOn: true, gain: 100, freq: 160, q: 20 },
	]);

	const eqColors = [
		"rgb(145, 238, 145, 0.5)",
		"rgb(173, 216, 230, 0.5)",
		"rgb(255, 255, 0, 0.5)",
		"rgb(255, 0, 0, 0.5)",
	];

	const WIDTH = 200;
	const HEIGHT = 100;

	const draw = () => {
		const ctx = context.current;

		ctx.clearRect(0, 0, WIDTH, HEIGHT);
		ctx.fillStyle = "cornsilk";
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
		ctx.fill();

		eqState.forEach((band, index) => {
			const freq = +band.freq;
			const q = band.q / 2;
			const gain = band.gain;

			const start = { x: freq - q, y: HEIGHT / 2 };
			const control1 = { x: freq + q, y: gain };
			const control2 = { x: freq - q, y: gain };
			const end = { x: freq + q, y: HEIGHT / 2 };

			ctx.fillStyle = band.isOn ? eqColors[index] : "gray";
			ctx.beginPath();
			ctx.moveTo(start.x, start.y);
			ctx.bezierCurveTo(control1.x, control1.y, control2.x, control2.y, end.x, end.y);
			ctx.stroke();
			ctx.fill();
		});

		//================ 0DB devider
		ctx.beginPath();
		ctx.strokeStyle = "red";
		ctx.moveTo(0, HEIGHT / 2);
		ctx.lineTo(WIDTH, HEIGHT / 2);
		ctx.stroke();

		//================ low devider
		// ctx.beginPath();
		// ctx.strokeStyle = "red";
		// ctx.moveTo(100 * FREQ_STEP, 0);
		// ctx.lineTo(100 * FREQ_STEP, 100);
		// ctx.stroke();
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
				<canvas ref={canvasRef} width="200" height="100" style={{ border: "1px solid black" }}></canvas>
			</div>
			{popupVis && <ChannelEq eqState={eqState} setEqState={setEqState} setPopupVis={setPopupVis} />}
			<p>
				{20 * Math.pow(2, eqState[0].freq / 10).toFixed(1)}
				<span>hz</span>
			</p>
		</>
	);
};
