import React, { Component } from "react";
import Comment from "../Comment/index";
class Commenter extends Component {
  render() {
    var returner = [];

    for (let i = 0; i < this.props.count; i++) {
      returner.push(
        <Comment index={i} key={i} cardindex={this.props.cardindex} />
      );
    }
    return <div>{returner}</div>;
  }
}

export default Commenter;
