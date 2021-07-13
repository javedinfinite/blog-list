import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import { useDispatch } from "react-redux";
import { getBlogList, addBlog } from "../../actions/blogAction";

export default function CreateBlog(prop) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");
  const [valid, SetValid] = React.useState(true);
  const dispatch = useDispatch();

  const handleClose = () => {
    prop.toggleDialogue(false);
    clearData();
  };

  const clearData = () => {
    setTitle("");
    setContent("");
    SetValid(true);
  };

  const handleSave = () => {
    if (title && content) {
      dispatch(addBlog(title, content));
      dispatch(getBlogList());
      prop.toggleDialogue(false);
      clearData();
    } else SetValid(false);
  };

  return (
    <div>
      <Dialog
        open={prop.open}
        onClose={handleClose}
        fullScreen
        aria-labelledby="customized-dialog-title"
      >
        <DialogTitle id="customized-dialog-title" style={{ color: "#3f51b5" }}>
          Create New Blog{" "}
          {valid ? (
            ""
          ) : (
            <span style={{ color: "red", marginLeft: "4%" }}>
              {" "}
              Both title and content are mandatory
            </span>
          )}
        </DialogTitle>
        <DialogContent>
          <TextField
            style={{}}
            onChange={(e) => setTitle(e.target.value)}
            autoFocus
            margin="dense"
            id="name"
            label="Title of the blog"
            type="text"
            fullWidth
          />

          <DialogContentText>
            <p>Add content in below text area :</p>
          </DialogContentText>

          <TextareaAutosize
            onChange={(e) => setContent(e.target.value)}
            rowsMax={50}
            style={{ height: "30%", width: "90%", fontSize: "x-large" }}
            aria-label="maximum height"
            placeholder="Here write your blog content: 
                e.g Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                ut labore et dolore magna aliqua."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            <b>Cancel</b>
          </Button>
          <Button onClick={handleSave} color="primary">
            <b>Save</b>
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
