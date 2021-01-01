import React, { useState } from "react";

export const ChannelHpf = () => {
	const [popupVis, setPopupVis] = useState(false);

	return (
		<>
			<div className="hpfContainer" onClick={() => setPopupVis(true)}>
				<div>
					<button className="switch"></button>
					<p className="label">hpf on</p>
				</div>
				<div>
					<button className="round"></button>
					<p className="label">hpf</p>
				</div>
			</div>
			{popupVis ?? <HpfPopUp />}
		</>
	);
};

export const HpfPopUp = () => {
	return (
		<div className="hpfContainer">
			<div>
				<button className="switch"></button>
				<p className="label">hpf on</p>
			</div>
			<div>
				<button className="round"></button>
				<p className="label">hpf</p>
			</div>
		</div>
	);
};
