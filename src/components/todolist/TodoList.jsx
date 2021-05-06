import React, { Component } from "react";

import Input from "./Input";
import List from "./List";

export class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataList: [],
    };
  }
  addList = (textValue) => {
    console.log("addlist");
    // console.log(textValue);
    this.setState((preState) => {
      return {
        dataList: [...preState.dataList, textValue],
      };
    });
  };
  removeList = (index) => {
    return () => {
      // console.log("remove");
      this.setState((preState) => {
        return {
          dataList: preState.dataList.filter((_, i) => i !== index),
        };
      });
    };
  };
  render() {
    const { dataList } = this.state;
    const { addList, removeList } = this;
    return (
      <div>
        <Input onAddList={addList} />
        <List dataList={dataList} onRemoveList={removeList} />
      </div>
    );
  }
}

export default TodoList;
