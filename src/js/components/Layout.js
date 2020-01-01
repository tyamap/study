import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.name = "tyamap";
		this.a = 2;
		this.b = 3;
		this.state = {title: "Welcome!"};
	}

	render() {
		let a = this.a;
		let b = this.b;
		setTimeout(
			()=> {this.setState({title: "Welcome tyamap!"}); },
			2000
		);
		
		return (
			<div>
				<Header title={this.state.title} />
				<Header title={"Thank you!"} />
				<Body />
				<Footer />
			</div>
		);
	}
	get_sum(a, b) {
		return a + b;
	}
}

