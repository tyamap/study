import React from "react";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.name = "tyamap";
		this.a = 2;
		this.b = 3;
	}
	render() {
		let a = this.a;
		let b = this.b;
		return (
			<div>
				<h1>Welcome {this.name}!</h1>
				<h2>It works!</h2>
				<p>
				a = {a}, b = {b}<br/>
				a + b =<br/> 
				inline: {a + b}<br/>
				function: {this.get_sum(a,b)}<br/>
				anonymous: {((a,b) => {return a + b;})(a,b)}
				</p>
			</div>
		);
	}
	get_sum(a, b) {
		return a + b;
	}
}

