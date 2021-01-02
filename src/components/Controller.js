import React from "react";
import { Strip } from "./strip/Strip";
import { Knob } from "./knob/Knob";
import "./controller.css";

export const Controller = () => {
	return (
		<div className="controllerContainer">
			<Strip />
			<Knob />
		</div>
	);
};
