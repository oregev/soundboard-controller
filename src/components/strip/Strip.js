import React from "react";
import { ChannelPreamp } from "../channelPreamp/ChannelPreamp";
import { ChannelEq } from "../channelEq/ChannelEq";
import { ChannelAux } from "../channelAux/ChannelAux";
import { ChannelMute } from "../channelMute/ChannelMute";
import { ChannelFader } from "../channelFader/ChannelFader";
import { ChannelSelect } from "../channelSelect/ChannelSelect";

export const Strip = () => {
	return (
		<div className="stripContainer">
			<ChannelPreamp />
			<ChannelEq />
			<ChannelAux />
			<ChannelMute />
			<ChannelFader />
			<ChannelSelect />
		</div>
	);
};
