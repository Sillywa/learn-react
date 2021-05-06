import React, { Component } from 'react'

export class MulSelect extends Component {
  state = {
    options: [
      { id: 0, name: "北京" },
      { id: 1, name: "上海" },
      { id: 2, name: "广州" }
    ],
    values: []
  }
  handleChange = event => {
    let value = event.target.value
    let { values } = this.state
    if(values.includes(value)) {
      values = values.filter(item => item !== value)
    } else {
      values.push(value)
    }
    this.setState({
      values
    })
  }
  render() {
    const { values, options } = this.state
    const { handleChange } = this
    return (
      <div>
        <form action="">
          <select multiple name="" id="" value={values} onChange={handleChange}>
            {options.map(({id, name}, i) => 
              <option value={id} key={i}>{name}</option>
            )}
          </select>
        </form>
      </div>
    )
  }
}

export default MulSelect
