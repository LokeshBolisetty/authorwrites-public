import React, { Component } from "react";
import axios from "axios";
import "./style.css";
import CommentCounter from "../../CommentCounter/index";
import $ from "jquery";
import Popper from "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import CommentMaker from "../../Commentmaker";

const API = "https://authorwrites-blog-api.herokuapp.com/";
let dis = {};

class EachBlog extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [],
      isLoading: false,
      error: null,
      liked: false,
      display: "Like",
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    axios
      .get(API)
      .then((result) => {
        var res = JSON.parse(JSON.stringify(result));
        console.log(res);
        console.log(res.data.notes[this.props.index]);
        if (localStorage.getItem(res.data.notes[this.props.index]._id) == null)
          localStorage.setItem(res.data.notes[this.props.index]._id, "Like");
        this.setState({
          blogs: res.data.notes[this.props.index],
          isLoading: false,
          liked: localStorage.getItem(res.data.notes[this.props.index]._id),
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
  handlelike = () => {
    let Likes = this.state.blogs.Likes;
    if (
      localStorage.getItem(this.state.blogs._id) === "Like" ||
      localStorage.getItem(this.state.blogs._id) === ""
    ) {
      axios.patch(API + "likes/" + this.state.blogs._id, {
        Likes: Likes + 1,
      });
      localStorage.setItem(this.state.blogs._id, "Liked");

      this.setState({
        display: "Liked",
        liked: localStorage.getItem(this.state.blogs._id),
      });
    } else {
      axios.patch(API + "likes/" + this.state.blogs._id, {
        Likes: Likes - 1,
      });
      localStorage.setItem(this.state.blogs._id, "Like");
      this.setState({
        display: "Like",
        liked: localStorage.getItem(this.state.blogs._id),
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <img
            className="card-img-top"
            src={this.state.blogs.Image}
            alt="Blog pic"
            loading="lazy"
          />
          <div className="card-body">
            <h1>{this.state.blogs.Title}</h1>
            <p>Created on {this.state.blogs.Created}</p>
            <p>Liked by {this.state.blogs.Likes} members</p>
            <h5>{this.state.blogs.Body}</h5>
            <a
              id="Likebutton"
              className="btn btn-primary mx-4 my-0.5"
              onClick={this.handlelike}
            >
              {localStorage.getItem(this.state.blogs._id)}
            </a>
            <CommentMaker data={this.state.blogs} />
            <section>
              <ul className="list-group list-group-flush my-1 namingit">
                <span class="badge badge-pill badge-danger">Comments</span>
                <CommentCounter cardindex={this.props.index} />
              </ul>
            </section>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default EachBlog;
