import React, { Component } from "react";
import NavLogin from "../../header/NavLogin";
import FileUpload from "./ImageUpload";
import "../../stylesheets/Write.css";

class BookDetails extends Component {
  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
  };
  render() {
    const { values, handleChange } = this.props;
    return (
      <div>
        <NavLogin />
        <div className="container mt-4">
          <div className="row">
            <div className="col form-wrap">
              <div className="container form-header bg-dark">Story Details</div>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                <label>Title</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=" "
                    onChange={handleChange("title")}
                    defaultValue={values.title}
                  />
                </div>
                <div className="input-group">
                  <div className="input-group-prepend">
                    <span className="input-group-text">Description</span>
                  </div>
                  <textarea
                    className="form-control"
                    aria-label="With textarea"
                    onChange={handleChange("description")}
                    defaultValue={values.description}
                  ></textarea>
                </div>
                <div className="form-group">
                <label>Genre/Category</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=" "
                    onChange={handleChange("genre")}
                    defaultValue={values.genre}
                  />
                </div>
                <div className="form-group">
                <label>Tags</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=" "
                    onChange={handleChange("tags")}
                    defaultValue={values.tags}
                  />
                </div>
                <div className="form-group">
                <label>Copyright</label>
                  <input
                    className="form-control"
                    type="text"
                    placeholder=" "
                    onChange={handleChange("copyright")}
                    defaultValue={values.copyrightp}
                  />
                </div>
                
                <br />

                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={this.continue}
                  >
                    CANCEL
                  </button>
                </div>
                <div className="form-group">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg btn-block"
                    onClick={this.continue}
                  >
                    SAVE & CONTINUE
                  </button>
                </div>
              </form>
            </div>
            <div className="col ">
              <FileUpload />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BookDetails;
