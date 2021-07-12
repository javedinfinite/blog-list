import React from 'react';
import {  connect, useDispatch } from 'react-redux'

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Paper from '@material-ui/core/Paper';


import Comments from '../comments'
import Data from '../comments/data'

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

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  if(props.selectedBlog)
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
            <Grid container>
                <Grid item>
                    <Comments data = {Data.comments}/>
                </Grid>
            </Grid>
            </Paper>
        </Grid>

    </Grid>
  );
}



const mapStateToProps = (state) => {
  console.log(state.blogReducer.selectedBlog)
    return {
        selectedBlog: state.blogReducer.selectedBlog,      
    };
  };
  
  export default connect(mapStateToProps)(BlogView);