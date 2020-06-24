import React, { useState } from "react";
import Modal from "react-modal";
import Axios from "axios";
const API = "https://authorwrites-blog-api.herokuapp.com/comments/";

Modal.setAppElement("#root");
function Editor(props) {
  const [modaIsOpen, setModalIsOpen] = useState(false);

  const editfunction = () => {
    Axios.put(
      API + props.data._id,

      {
        Comments:
          document.activeElement.parentElement.childNodes[0].childNodes[0]
            .childNodes[1].value,
      }
    )
      .then((res) => {
        console.log(res);
        alert("Updated successfully. Refresh to see the changes.");
      })
      .catch((err) => {
        alert("Sorry! Was not able to edit");
        console.log(err);
      });
    setModalIsOpen(false);
  };

  return (
    <div className="Editor">
      <button
        type="button"
        className="btn btn-secondary my-2 mx-2"
        onClick={() => setModalIsOpen(true)}
      >
        Comment
      </button>
      <Modal isOpen={modaIsOpen} onRequestClose={() => setModalIsOpen(false)}>
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Comment</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Add your comment here"
            />
            <small id="emailHelp" class="form-text text-muted">
              Comments are anonymous but you are requested to keep up the
              community guidelines
            </small>
          </div>
        </form>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => {
            editfunction();
          }}
        >
          Post
        </button>
      </Modal>
    </div>
  );
}

export default Editor;
