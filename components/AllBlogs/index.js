import React, { Component } from "react";
/*import axios from "axios";*/
import "./style.css";
import EachBlog from "../EachBlog";
/*import { render } from "@testing-library/react";*/
class AllBlogs extends Component {
  render() {
    var returner = [];

    for (let i = this.props.cards - 1; i >= 0; i--) {
      returner.push(<EachBlog index={i} key={i} />);
    }
    return <div>{returner}</div>;
  }
}

export default AllBlogs;
