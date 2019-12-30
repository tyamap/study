import React from "react";

export default class Title extends React.Component{
	constructor(){
		super();
		// Reactコンポーネントが持つ状態データ。コンポーネントをどのようにレンダリングするかといった情報を格納する。
		// setState()を通じて字変更されることで再レンダリングの命令がキューイングされて自動的にコンポーネントの再レンダリングがなされる。
		this.state = {name :"tyamap"};
	}

	render(){
		setTimeout(
			() => {this.setState({name: "Welcome!"});}
			, 2000);
		return(
			<h1>{this.state.name}</h1>
		);
	}
}
