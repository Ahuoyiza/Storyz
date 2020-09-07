import React, { Fragment, useState } from "react";
import axios from "axios";
const FileUpload = () => {
  const [file, setFile] = useState("");
  const [filename, setFilename] = useState("Add cover");
  const [setUploadedFile] = useState({}); //UploadedFile,
  const onChange = (e) => {
    setFile(e.target.files[0]);
    setFilename(e.target.files[0].name);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file); //ref const file = req.files.file; from post ep
    try {
      const res = await axios.post("/uploads", formData, {
        header: {
          "Content-Type": "multipart/form-data",
        },
      });
      const { fileName, filePath } = res.data;
      setUploadedFile({ fileName, filePath });
    } catch (err) {
      if (err.response.status === 500) {
        console.log("There was a problem with the server");
      } else {
        console.log(err.response.data.msg);
      }
    }
  };
  return (
    <Fragment>
      <form onSubmit={onSubmit}>
        <div className="custom-file mb-4">
          <input
            type="file"
            className="custom-file-input"
            id="customFile"
            onChange={onChange}
          />
          <label className="custom-file-label" htmlFor="customFile">
            {filename}
          </label>
        </div>
        <input
          type="submit"
          value="upload"
          className="btn btn-primary btn-block mt-4"
        />
      </form>
    </Fragment>
  );
};
export default FileUpload;
