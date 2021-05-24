import React, { Component } from "react";

class Base extends Component {
  state = {
    number1: 0,
    number2: 0,
    action: "+",
    result: 0,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  getResult = () => {
    var result;
    switch (this.state.action) {
      case "+":
        result = +this.state.number1 + +this.state.number2;
        this.setState({ result });
        break;
      case "-":
        result = +this.state.number1 - +this.state.number2;
        this.setState({ result });
        break;
      case "/":
        result = +this.state.number1 / +this.state.number2;
        this.setState({ result });
        break;
      case "*":
        result = +this.state.number1 * +this.state.number2;
        this.setState({ result });
        break;
    }
  };

  render() {
    return (
      <div className="container">
        <input
          name="number1"
          type="number"
          value={this.state.number1}
          onChange={this.onChange}
        />
        <select
          onChange={this.onChange}
          value={this.state.action}
          name="action"
          id="action"
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          name="number2"
          type="number"
          value={this.state.number2}
          onChange={this.onChange}
        />
        <button onClick={this.getResult}>=</button>
        <input name="result" type="number" value={this.state.result} />
      </div>
    );
  }
}

export default Base;
