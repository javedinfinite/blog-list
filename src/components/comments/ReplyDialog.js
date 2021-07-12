import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from "@material-ui/core/TextareaAutosize";


export default function ReplyDialog(props) {
  const [reply, setReply] = React.useState(false);
  const [valid, SetValid] = React.useState(true);

  const saveReply = () => {
      if(reply){
        console.log(reply)
        //here call api endpoint to submit the reply
        props.toggleDialogue(false)
        setReply('')
        SetValid(true)
      }
      else{
        SetValid(false)
      }

  };

 

  return (
    <div>
 
      <Dialog 
      maxWidth='xs'
      fullWidth='true'
        open={props.open}
        onClose={()=>props.toggleDialogue(false)}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      
      >
        <DialogTitle id="alert-dialog-title">Reply to {props.author}
        {valid?'':<span style={{color:'red', marginLeft:'4%'}}> content is empty</span>}
        </DialogTitle>
        <DialogContent    style={{height:'350px'}}>
           
            <TextareaAutosize onChange={(e)=>setReply(e.target.value)} style={{width:'100%', height:'70%'}} placeholder="Write your reply here" />
           
        </DialogContent>
        <DialogActions>
          <Button onClick={()=>props.toggleDialogue(false)} color="primary">
            Cancel
          </Button>
          <Button  onClick={saveReply} color="primary" autoFocus>
            Send
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
