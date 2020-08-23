import React from "react";
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

export default class Layout extends React.Component {
	constructor() {
		super();
		this.state = {title: "Welcome!", body: "It works!"};
	}

	changeBody(body){
		this.setState({body});
	}

	render(){
		setTimeout(
			()=> {this.setState({title: "Welcome tyamap!"}); },
			2000
		);
		
		return (
			<div>
				<Header title={this.state.title} />
				<Header title={"Thank you!"} />
				<Body changeBody={this.changeBody.bind(this)} body={this.state.body} />
				<Footer />
			</div>
		);
	}
	get_sum(a, b) {
		return a + b;
	}
}
