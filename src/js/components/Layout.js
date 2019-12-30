import React from "react";
import Header from "./Header";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.name = "tyamap";
		this.a = 2;
		this.b = 3;
	}

	render() {
		// 複数のコンポーネントを並べる際は、配列を利用することもできる。
		let headers = [<Header key="h1"/>,<Header key="h2" />,<Header key="h3"/>];
		let a = this.a;
		let b = this.b;
		return (
			<div>
				{headers}
				<h1>Welcome {this.name}!</h1>
				<h2>It works!</h2>
				<p>
				a = {a}, b = {b}<br/>
				a + b =<br/> 
				inline: {a + b}<br/>
				function: {this.get_sum(a,b)}<br/>
				anonymous: {((a,b) => {return a + b;})(a,b)}
				</p>
				<Footer />
			</div>
		);
	}
	get_sum(a, b) {
		return a + b;
	}
}

