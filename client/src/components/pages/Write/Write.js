import React, { Component } from "react";
import NavLogin from "../../header/NavLogin";
import Editor from "./QuillEditor";

export class Write extends Component {
  //content creation page
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };
  render() {
    //const { values, handleChange } = this.props;
    return (
      <div>
        <NavLogin />
        <div className="container">
          <div className="container mt-4 mb-4">
            <Editor placeholder={"Tell your story here..."} />
          </div>
          <div>
            <button
              type="submit"
              className="btn btn-light btn-lg "
              onClick={this.back}
            >
              BACK
            </button>
            <button
              type="submit"
              className="btn btn-primary btn-lg "
              onClick={this.continue}
            >
              SAVE & UPLOAD
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Write;
