import React, { useState, useEffect, useRef } from "react";
import "./knob.css";

export const Knob = () => {
	const canvasRef = useRef(null);
	const context = useRef(null);

	const [position, setPosition] = useState(0);

	const KNOB_RADIUS = 50;
	const TICK_W = 5;
	const CANVAS_SIZE = 100;
	const KNOB_CENTER = CANVAS_SIZE / 2;

	const draw = () => {
		const ctx = context.current;

		const tickEndPos = Math.sqrt((KNOB_RADIUS / 2) ** 2 * 2) / 2;

		ctx.clearRect(0, 0, CANVAS_SIZE, CANVAS_SIZE);

		ctx.beginPath();
		// ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
		ctx.arc(KNOB_CENTER, KNOB_CENTER, 40, 0, 2 * Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.strokeStyle = "red";
		ctx.moveTo(tickEndPos, CANVAS_SIZE - tickEndPos);
		ctx.lineTo(KNOB_RADIUS, KNOB_RADIUS);
		ctx.lineWidth = TICK_W;
		ctx.stroke();
	};

	useEffect(() => {
		context.current = canvasRef.current.getContext("2d");
		draw();
	});
	return (
		<>
			<div className="knobContainer">
				<canvas
					ref={canvasRef}
					width="100px"
					height="100px"
					style={{ border: "1px solid black", borderRadius: "50%", transform: `rotate(${position}deg)` }}
				></canvas>
			</div>
			<input type="range" min={0} max={270} value={position} onChange={(e) => setPosition(e.target.value)} />
		</>
	);
};
