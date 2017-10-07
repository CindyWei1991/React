import React, { Component } from 'react';
import logo from './logo.svg';
import './styles/App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
  }
  edit() {
    this.setState({editing:true});
  }
  remove() {
    alert("removing");
  }
  save() {
    var val = this.refs.newText.value;
    console.log(val);
    this.setState({editing:false});
  }

  renderForm() {
    return (
      <div>
        <textarea ref="newText" defaultValue={this.props.children}></textarea>
        <button onClick={this.save.bind(this)}>Save</button>
      </div>
    )
  }
  renderNormal() {
    return (
      <div>
        <h1> {this.props.children} </h1>
        <button onClick={this.edit.bind(this)}>Edit</button>
        <button onClick={this.remove.bind(this)}>Remove</button>
      </div>
    )
  }

  render() {
    if(this.state.editing) {
      return this.renderForm();
    } else {
      return this.renderNormal();
    }
  }
};


class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      comments : ["hello","hello1","hello2"]
    }
  }
  render() {
    return (
      <div>
        {
          this.state.comments.map(function(text, i) {
            return (<App key={i}>{text}</App>)
          })
        }
      </div>
    )
  }
};


export default Board;