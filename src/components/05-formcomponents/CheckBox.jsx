import React, { Component } from "react";

export class CheckBox extends Component {
  state = {
    isChecked: false,
    numberOfGuests: 0,
    textValue: null
  };
  handleChange = (event) => {
    let name = event.target.name;
    let value =
      name === "isChecked" ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    });
  };
  handleSubmit = (event) => {
    console.log(this.state);
    event.preventDefault();
  };
  render() {
    const { isChecked, numberOfGuests, textValue } = this.state;
    const { handleChange, handleSubmit } = this;
    return (
      <div>
        <form action="" onSubmit={handleSubmit}>
          <div>
            参与：
            <input
              type="checkbox"
              name="isChecked"
              checked={isChecked}
              onChange={handleChange}
            />
          </div>
          {isChecked && (
            <div>
              来宾人数：
              <input
                type="number"
                name="numberOfGuests"
                value={numberOfGuests}
                onChange={handleChange}
              />
            </div>
          )}
          <div>
            <input type="text"  value={textValue} onChange={() => {}}/>
          </div>
          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    );
  }
}

export default CheckBox;
