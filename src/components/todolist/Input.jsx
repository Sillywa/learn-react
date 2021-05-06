import React, { Component } from "react";

export class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      textValue: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };
  handleAdd = (e) => {
    const { textValue } = this.state;
    const { onAddList } = this.props;
    onAddList(textValue);
    this.setState({
      textValue: "",
    });
  };
  render() {
    const { textValue } = this.state;
    const { handleChange, handleAdd } = this;

    return (
      <div>
        <input type="text" value={textValue} onChange={handleChange} />
        <button onClick={handleAdd}>添加</button>
      </div>
    );
  }
}

export default Input;
