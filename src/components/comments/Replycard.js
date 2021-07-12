import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ReplyIcon from '@material-ui/icons/Reply';
import ReplyDialog from "./ReplyDialog"

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '2000px',
    width:'140%',
     marginLeft:'5%',
     marginTop:'4%' 
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function Replycard(props) {
  const classes = useStyles();
  const [openDialogue, setopenDialogue] = useState(false) 

  const toggleDialogue = (value) =>{
    setopenDialogue(value)
  }

  const openReply = () =>{
    setopenDialogue(true)
  }

  return (
    <Card className={classes.root}>
      <ReplyDialog open={openDialogue} author={props.author} toggleDialogue={toggleDialogue} />

      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
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
          {props.comment} ,sdfndsnfdsnf,dnf,ndf,nf,ndsf,nds,fdsnfnds,fnds,fnds,fnds,fnds,fnds,fndsf
        </Typography>
      </CardContent>
    </Card>
  );
}
