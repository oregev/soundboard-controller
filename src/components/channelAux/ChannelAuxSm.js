import React, { useState, useEffect, useRef } from "react";

import { ChannelAux } from "../channelAux/ChannelAux";

export const ChannelAuxSm = () => {
	const canvasRef = useRef(null);
	const context = useRef(null);
	const [popupVis, setPopupVis] = useState(false);
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

	const backColor = "linear-gradient(gray, lightgray)";
	const draw = () => {
		const ctx = context.current;
		let posY = 2;
		ctx.clearRect(0, 0, 100, 100);
		ctx.fillStyle = "gray";
		ctx.fillRect(0, 0, 100, 100);

		auxState.forEach((aux) => {
			ctx.fillStyle = aux.isOn ? "lightgreen" : "gray";
			ctx.fillRect(0, posY, aux.sendVol, 5);
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
			<div
				onClick={() => {
					setPopupVis(true);
				}}
			>
				<canvas
					ref={canvasRef}
					width="100"
					height="80"
					style={{ border: "1px solid black", borderRadius: "10px" }}
				></canvas>
			</div>
			{popupVis && <ChannelAux auxState={auxState} setAuxState={setAuxState} setPopupVis={setPopupVis} />}
		</>
	);
};
