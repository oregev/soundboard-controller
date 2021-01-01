import React, { useEffect, useRef } from "react";

export const ChannelAuxSm = () => {
	const canvasRef = useRef(null);
	const context = useRef(null);

	const draw = () => {
		const ctx = context.current;
		ctx.fillStyle = "lightblue";

		let posY = 0;

		let auxState = [80, 50, 20, 70, 100, 30, 10, 80];

		auxState.forEach((aux) => {
			ctx.strokeRect(0, posY, aux, 5);
			ctx.fillRect(0, posY, aux, 5);
			posY += 10;
		});
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
