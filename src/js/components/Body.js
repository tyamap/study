import React from "react";

export default class Body extends React.Component {
	constructor(){
		super();
		this.namr = "tyamap";
		this.a = 2;
		this.b = 3;
		this.state = {title: "Welcome!"};
	}

	render(){
		return(
			<div>
				<h2>It Works!</h2>
				<input />
				<p>
					a = {this.a}, b = {this.b}<br/>
					a × b = {this.a * this.b}
				</p>
			</div>
		);
	}
}
