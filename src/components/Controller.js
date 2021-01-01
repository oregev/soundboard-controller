import React from "react";
import { Strip } from "./strip/Strip";
import "./controller.css";
import { ChannelEqSm } from "./channelEq/ChannelEqSm";
import { ChannelAuxSm } from "./channelAux/ChannelAuxSm";

export const Controller = () => {
	return (
		<div className="controllerContainer">
			<ChannelEqSm />
			<Strip />
			<ChannelAuxSm />
		</div>
	);
};
