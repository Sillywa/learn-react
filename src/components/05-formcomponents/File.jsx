import React, { Component, createRef } from 'react'

export class File extends Component {
  constructor(props) {
    super(props)
    this.file = createRef()
  }
  handleClick = e => {
    console.log("click");
    console.log(this.file.current.files[0]);
    e.preventDefault()
  }
  render() {
    const { handleClick } = this
    return (
      <div>
        <form action="">
          <input type="file" ref={this.file}/>
          <button onClick={handleClick}>get filename</button>
        </form>
      </div>
    )
  }
}

export default File
