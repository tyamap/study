import React, { Component } from 'react';
import Form from './Form';
import List from './List';

export default class App extends Component {
	constructor(props){
		super(props)
		this.state = {
			todo: []
		}
		this.handleAdd = this.handleAdd.bind(this);
	}
	
	// データ保存
	handleAdd(e){
		e.preventDefault(); // リダイレクト防止
		// フォームから受け取ったデータをオブジェクトに挿入して、stateのtodo配列に追加
		this.state.todo.push({title: e.target.title.value});
		this.setState({todo: this.state.todo}); // この時点で保存完了
		// inputのvalueを空に
		e.target.title.value = '';
	}
	
	render() {
		return (
			<div className="siimple-box siimple--bg-dark">
				<h1 className="siimple-box-title siimple--color-white">React Todo App</h1>
				<Form handleAdd={this.handleAdd} />
				<div className="siimple-rule"></div>
				<List todos={this.state.todo}/>
			</div>
		);
	}
}
