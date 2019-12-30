import React from "react";
import Title from "./Header/Title.js";

export default class Header extends React.Component {
	render(){
		return(
			<div>
				<Title />
				<p>{this.props.title}</p>
			</div>
		);
	}
}
