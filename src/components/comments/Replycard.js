import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ReplyIcon from "@material-ui/icons/Reply";
import ReplyDialog from "./ReplyDialog";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: "2000px",
    width: "140%",
    marginLeft: "5%",
    marginTop: "4%",
  },
  avatar: {
    backgroundColor: "#3f51b5",
  },
}));

export default function Replycard(props) {
  const classes = useStyles();
  const [openDialogue, setopenDialogue] = useState(false);

  const toggleDialogue = (value) => {
    setopenDialogue(value);
  };

  const openReply = () => {
    console.log(props.author);
    setopenDialogue(true);
  };

  return (
    <Card className={classes.root}>
      <ReplyDialog
        callme={props.callme}
        commentId={props.commentId}
        blogid={props.blogid}
        open={openDialogue}
        author={props.author}
        toggleDialogue={toggleDialogue}
      />

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.author[0]}
          </Avatar>
        }
        action={
          <IconButton onClick={openReply} aria-label="settings">
            <ReplyIcon />
          </IconButton>
        }
        title={props.author}
        subheader="September 14, 2016"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {props.comment}
        </Typography>
      </CardContent>
    </Card>
  );
}
