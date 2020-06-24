import React, { Component } from "react";
import axios from "axios";
import AllBlogs from "../AllBlogs/index";
const API = "https://authorwrites-blog-api.herokuapp.com/";
/*import { render } from "@testing-library/react";*/
class CardCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cardCounter: NaN,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then((result) => {
        var res = JSON.parse(JSON.stringify(result));
        console.log(res);
        console.log(res.data.count);
        this.setState({
          cardCounter: res.data.count,
          isLoading: false,
        });
        console.log(res);
      })
      .catch((error) =>
        this.setState({
          error,
          isLoading: false,
        })
      );
  }
  render() {
    return (
      <React.Fragment>
        <AllBlogs cards={this.state.cardCounter} />
      </React.Fragment>
    );
  }
}

export default CardCounter;
