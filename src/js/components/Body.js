import React from "react";

export default class Body extends React.Component {
	constructor(){
		super();
		this.a = 2;
		this.b = 3;
	}

	handleChange(e){
		const body = e.target.value;
		this.props.changeBody(body);
	}

	render(){
		return(
			<div>
				<h2>{this.props.body}</h2>
				<input value={this.props.body} onChange={this.handleChange.bind(this)}/>
				<p>
					a = {this.a}, b = {this.b}<br/>
					a × b = {this.a * this.b}
				</p>
			</div>
		);
	}
}
