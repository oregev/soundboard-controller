import React from "react";
import { Strip } from "./strip/Strip";
import "./controller.css";

import { ChannelAuxSm } from "./channelAux/ChannelAuxSm";

export const Controller = () => {
	return (
		<div className="controllerContainer">
			<Strip />
			{/* <ChannelAuxSm /> */}
		</div>
	);
};
