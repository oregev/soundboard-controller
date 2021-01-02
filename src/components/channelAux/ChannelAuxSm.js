import React, { useState, useEffect, useRef } from "react";

import { ChannelAux } from "../channelAux/ChannelAux";

export const ChannelAuxSm = () => {
	const canvasRef = useRef(null);
	const context = useRef(null);
	const [popupVis, setPopupVis] = useState(true);
	const [auxState, setAuxState] = useState([
		{ auxNo: 1, isOn: true, sendVol: 80 },
		{ auxNo: 2, isOn: true, sendVol: 50 },
		{ auxNo: 3, isOn: true, sendVol: 20 },
		{ auxNo: 4, isOn: true, sendVol: 70 },
		{ auxNo: 5, isOn: true, sendVol: 100 },
		{ auxNo: 6, isOn: true, sendVol: 30 },
		{ auxNo: 7, isOn: true, sendVol: 10 },
		{ auxNo: 8, isOn: true, sendVol: 80 },
	]);

	const draw = () => {
		const ctx = context.current;

		let posY = 0;

		// let auxState = [80, 50, 20, 70, 100, 30, 10, 80];
		ctx.clearRect(0, 0, 100, 100);
		auxState.forEach((aux) => {
			ctx.fillStyle = aux.isOn ? "lightblue" : "gray";
			ctx.strokeRect(0, posY, aux.sendVol, 5);
			ctx.fillRect(0, posY, aux.sendVol, 5);
			posY += 10;
		});
	};

	useEffect(() => {
		context.current = canvasRef.current.getContext("2d");
		draw();
	});

	return (
		<>
			<div>
				<canvas ref={canvasRef} width="100px" height="100px" style={{ border: "1px solid black" }}></canvas>
			</div>

			{popupVis && <ChannelAux auxState={auxState} setAuxState={setAuxState} />}
		</>
	);
};
