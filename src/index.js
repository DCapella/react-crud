import React from "react";
import { render } from "react-dom";

import "./index.css";


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      items: [],
    }

    this.handleInput = this.handleInput.bind(this);
    this.createItem = this.createItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }

  handleInput(e) {
    this.setState({input: e.target.value});
  }

  createItem() {
    this.setState({
      items: [...this.state.items, this.state.input],
      input: '',
    });
  }

  updateItem(e) {
    const newItem = prompt("Update:", this.state.items[e.target.value]);
    if (newItem === null) return;
    let items = [...this.state.items];
    items[e.target.value] = newItem;
    this.setState({
      items: items,
    });
  }

  deleteItem(e) {
    let items = [...this.state.items];
    items.splice(e.target.value, 1);
    this.setState({
      items: items,
    });
  }

  render() {
    return (
      <div>
        <div id="title">
          <h1>Items</h1>
        </div>
        <div id="item-input">
          <input onChange={this.handleInput} value={this.state.input} />
          <button onClick={this.createItem}>Submit</button>
        </div>
        <div id="item-display">
          <ul>
            {this.state.items.map((item, i) => {
              return (
                <li>
                  <button onClick={this.updateItem} value={i}>{item}</button>
                  <button onClick={this.deleteItem} value={i}>x</button>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    )
  }
}

//==================================================================

render(
  <App />,
  document.getElementById("root")
)
