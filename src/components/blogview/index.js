import React, {useEffect} from 'react';
import {  connect, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Comments from '../comments'
// import Data from '../comments/data'
import Data from '../comments/temp'
import TextareaAutosize from "@material-ui/core/TextareaAutosize";
import TextField from '@material-ui/core/TextField';
import {addBlogComment, getBlogComments, addBlogNestedComment} from '../../actions/blogAction'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '10%',
    paddingRight: '20%'
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

function BlogView(props) {

  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [newComment, setNewComment] = React.useState('');
  const [newName, setNewName] = React.useState('');
  const [valid, SetValid] = React.useState(true);
  const dispatch = useDispatch();

  const saveNestedComment = async (name,reply, commentId) =>{
    await dispatch(addBlogNestedComment(name, reply, commentId, props.selectedBlog.blogid))
    await dispatch(getBlogComments(props.selectedBlog.blogid))
  }

  const saveNewComment = async() => {
      if(newComment && newName){
        //here call api endpoint to submit the reply  
        await dispatch(addBlogComment(newName, newComment, props.selectedBlog.blogid))
        await dispatch(getBlogComments(props.selectedBlog.blogid))
 

        setNewComment('')
        setNewName('')
        SetValid(true)
      }
      else{
        SetValid(false)
      }

  };


 
 console.log("I am rendered after comment..............")

  // if(props.selectedBlog && props.currentComment)
  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
      <h1 style={{fontSize:'50px'   }}>This is article on topic {props.selectedBlog.title} </h1>

        <Grid container justify="center" spacing={spacing}>
         <p>{props.selectedBlog.content}</p>
        </Grid>
      </Grid>

        <Grid item xs={12}>
            <Paper className={classes.control}>
            <TextField value={newName} onChange={(e)=>setNewName(e.target.value)} id="standard-basic" label="Name" style={{display:'block', marginBottom:'2%', borderColor:valid?'':'red'}} />
            <TextareaAutosize value={newComment} onChange={(e)=>setNewComment(e.target.value)} placeholder="Write a new comment here" style={{height:'70px', width:'50%', borderColor:valid?'':'red'}}/>
            <Button onClick={saveNewComment} style={{marginLeft:'4%', marginBottom:'2%'}} color="primary" variant="contained">Comment</Button>
            <Grid container>
                <Grid item>
                    <Comments callme={saveNestedComment} data = {props.currentComment.comments}  />
                </Grid>
            </Grid>
            </Paper>
        </Grid>

    </Grid>
  ); 
}



const mapStateToProps = (state) => {
  console.log("currentComment................",state.blogReducer.currentComment)
    return {
        selectedBlog: state.blogReducer.selectedBlog,      
        currentComment: state.blogReducer.currentComment,      
    };
  };

  
export default connect(mapStateToProps)(BlogView);