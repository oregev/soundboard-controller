import React, { useState, useEffect, useRef } from "react";
import "./knob.css";

export const Knob = () => {
	const canvasRef = useRef(null);
	const context = useRef(null);

	const [position, setPosition] = useState(0);

	const draw = () => {
		const ctx = context.current;
		ctx.clearRect(0, 0, 100, 100);

		ctx.beginPath();
		// ctx.strokeStyle = "black";
		ctx.fillStyle = "black";
		ctx.arc(50, 50, 40, 0, 2 * Math.PI);
		ctx.fill();

		ctx.beginPath();
		ctx.strokeStyle = "white";
		ctx.moveTo(50, 15);
		ctx.lineTo(50, 35);
		ctx.lineWidth = 10;
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
			<input type="range" min={0} max={300} value={position} onChange={(e) => setPosition(e.target.value)} />
		</>
	);
};
