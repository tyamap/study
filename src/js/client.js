import React from "react";
import ReactDOM from "react-dom";

class Layout extends React.Component {
	render() {
		let name = "Guest";
		let a = 2;
		let b = 3;
		return (
			<div>
				<h1>Welcome {name}!</h1>
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

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
