import React, { Component } from "react";
import axios from "axios";
import Commenter from "../Commenter";
const API = "https://authorwrites-blog-api.herokuapp.com/";
/*import { render } from "@testing-library/react";*/
class CommentCounter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      CommentCounter: NaN,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then((result) => {
        var res = JSON.parse(JSON.stringify(result));
        console.log(res.data.notes[this.props.cardindex].Comments.length);
        this.setState({
          CommentCounter: res.data.notes[this.props.cardindex].Comments.length,
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
        <Commenter
          count={this.state.CommentCounter}
          cardindex={this.props.cardindex}
        />
      </React.Fragment>
    );
  }
}

export default CommentCounter;
