import React, { Component } from "react";
import axios from "axios";
import "./style.css";
const API = "https://authorwrites-blog-api.herokuapp.com/";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comment: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then((result) => {
        var res = JSON.parse(JSON.stringify(result));
        console.log(res);
        console.log(
          res.data.notes[this.props.cardindex].Comments[this.props.index]
        );
        this.setState({
          comment:
            res.data.notes[this.props.cardindex].Comments[this.props.index],
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
        <li class="lister my-1 d-flex">{this.state.comment}</li>
      </React.Fragment>
    );
  }
}

export default Comment;
