import React from 'react';
import {  connect, useDispatch } from 'react-redux'

// const BlogView = (props) => {
//     return (
//         <div>
//             I am blog view {props.selectedBlog}
//         </div>
//     );
// };

// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';

import Article from './Article'
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

    console.log("Data", Data.comments)
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
      <h1 style={{fontSize:'50px'   }}>This is article on topic {props.selectedBlog}</h1>

        <Grid container justify="center" spacing={spacing}>
         <p>Articles are words that define a noun as specific or unspecific. Consider the following examples:

After the long day, the cup of tea tasted particularly good.
By using the article the, we’ve shown that it was one specific day that was long and one specific cup of tea that tasted good.
After a long day, a cup of tea tastes particularly good.
By using the article a, we’ve created a general statement, implying that any cup of tea would taste good after any long day.</p>
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
    console.log("selectedBlog......", state.blogReducer.selectedBlog)
    return {
        selectedBlog: state.blogReducer.selectedBlog,      
    };
  };
  
  export default connect(mapStateToProps)(BlogView);