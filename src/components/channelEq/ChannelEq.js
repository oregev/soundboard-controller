import React from "react";
import { ChannelHpf } from "../channelHpf/ChannelHpf";

export const ChannelEq = () => {
	return (
		<div className="container">
			<ChannelHpf />
			<div>
				<button className="switch"></button>
				<p className="label">eq on</p>
			</div>
			<EqBand />
			<EqBand />
			<EqBand />
			<EqBand />
		</div>
	);
};

export const EqBand = () => {
	return (
		<div className="eqBandContainer">
			<div>
				<button className="round"></button>
				<p className="label">gain</p>
			</div>
			<div>
				<button className="round"></button>
				<p className="label">freq</p>
			</div>
			<div>
				<button className="round"></button>
				<p className="label">Q</p>
			</div>
		</div>
	);
};
