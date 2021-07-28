import React from "react";
import Option from "./Option";

const Options = (props) => {
	return (
		<div>
			<p>{props.options.length}</p>
			<button onClick={props.handleDeleteOptions}>Remove All</button>
			{props.options.length === 0 && <p>Please add an Option to get started</p>}
			<ol>
				{props.options.map((option, i) => (
					<Option handleDeleteOption={props.handleDeleteOption} key={i} option={option} />
				))}
			</ol>
		</div>
	);
};

export default Options;
