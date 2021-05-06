import React, { Component } from 'react'

export class InputCom extends Component {
  state = {
    textValue: "",
    textareaValue: "",
    selectValue: 0
  }

  handleInput = event => {
    let value = event.target.value
    this.setState({
      textValue: value
    })
  }
  
  handleTextarea = event => {
    let textareaValue = event.target.value;
    this.setState({
      textareaValue
    })
  }

  handleSelect = event => {
    let selectValue = event.target.value
    this.setState({
      selectValue
    })
  }

  handleSubmit = event => {
    console.log("submit");
    console.log(this.state);
    event.preventDefault()
  }

  render() {
    const { textValue, textareaValue, selectValue } = this.state
    const { handleInput, handleSubmit, handleTextarea, handleSelect } = this
    return (
      <div>
        <form action="" onSubmit={handleSubmit} >
          <input type="text" value={textValue} onInput={handleInput}/> <br/>
          <textarea name=""  cols="30" rows="10" value={textareaValue} onInput={handleTextarea}></textarea> <br/>
          <select name="" value={selectValue} onChange={handleSelect}>
            <option value="0">北京</option>
            <option value="1">上海</option>
            <option value="2">深圳</option>
          </select>
          <br/>
          <input type="submit" value="提交" />
        </form>
        
      </div>
    )
  }
}

export default InputCom
