import React, { useEffect, useRef } from "react";

export const ChannelEqSm = () => {
	const canvasRef = useRef(null);
	const context = useRef(null);

	const draw = () => {
		let ctx = context.current;
		ctx.fillStyle = "lightGreen";

		const MAX_FREQ = 20000;
		const MIN_FREQ = 20;
		const FREQ_STEP = 100 / (MAX_FREQ - MIN_FREQ); // 100 is canvas size.

		let eqState = {
			high: {
				gain: 80, // control point
				freq: 8000, // starting point
				q: 0.2, // end point / width
			},
			highmid: {
				gain: 50,
				freq: 3150,
				q: 0.2,
			},
			lowmid: {
				gain: -100,
				freq: 250,
				q: 1,
			},
			low: {
				gain: 30,
				freq: 80,
				q: 0.5,
			},
		};

		for (let key in eqState) {
			console.log(eqState[key].freq, "to start x pos:", eqState[key].freq * FREQ_STEP);
			console.log(eqState[key].gain, "to point pos:", eqState[key].gain);
			console.log(eqState[key].q, "to end x pos:", eqState[key].q * 10);
			console.log("");

			let start = eqState[key].freq * FREQ_STEP;
			let point = 50 - eqState[key].gain;
			let end = eqState[key].q * 100;

			ctx.beginPath();
			ctx.strokeStyle = "black";
			ctx.moveTo(start, 50);
			ctx.quadraticCurveTo((start + end) / 2, point, start + end, 50);
			ctx.stroke();
		}
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
		<div>
			<canvas ref={canvasRef} width="100px" height="100px" style={{ border: "1px solid black" }}></canvas>
		</div>
	);
};
