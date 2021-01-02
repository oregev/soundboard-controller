import React from "react";
import { ChannelPreamp } from "../channelPreamp/ChannelPreamp";
import { ChannelHpf } from "../channelHpf/ChannelHpf";
import { ChannelEqSm } from "../channelEq/ChannelEqSm";
import { ChannelAuxSm } from "../channelAux/ChannelAuxSm";
import { ChannelMute } from "../channelMute/ChannelMute";
import { ChannelFader } from "../channelFader/ChannelFader";

export const Strip = () => {
	return (
		<div className="stripContainer">
			<ChannelPreamp />
			<ChannelHpf />
			<ChannelEqSm />
			<ChannelAuxSm />
			<ChannelMute />
			<ChannelFader />
		</div>
	);
};
