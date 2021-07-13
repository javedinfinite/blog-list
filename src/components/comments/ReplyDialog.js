import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from "@material-ui/core/TextField";

export default function ReplyDialog(props) {
  const [reply, setReply] = React.useState(false);
  const [valid, SetValid] = React.useState(true);
  const [newName, setNewName] = React.useState("");

  const saveReply = () => {
    if (newName && reply) {
      props.callme(newName, reply, props.commentId);
      props.toggleDialogue(false);
      setReply("");
      SetValid(true);
    } else {
      SetValid(false);
    }
  };

  return (
    <div>
      <Dialog
        maxWidth="xs"
        fullWidth="true"
        open={props.open}
        onClose={() => props.toggleDialogue(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Reply to {props.author}
          {valid ? (
            ""
          ) : (
            <span style={{ color: "red", marginLeft: "4%" }}>
              {" "}
              content is empty
            </span>
          )}
        </DialogTitle>
        <DialogContent style={{ height: "350px" }}>
          <TextField
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            id="standard-basic"
            label="Name"
            style={{
              display: "block",
              marginBottom: "2%",
              borderColor: valid ? "" : "red",
            }}
          />
          <TextareaAutosize
            onChange={(e) => setReply(e.target.value)}
            style={{ width: "100%", height: "70%" }}
            placeholder="Write your reply here"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => props.toggleDialogue(false)} color="primary">
            Cancel
          </Button>
          <Button onClick={saveReply} color="primary" autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
