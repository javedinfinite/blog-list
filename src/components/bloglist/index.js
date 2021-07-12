import React , { useState, useEffect }from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StarIcon from '@material-ui/icons/Star';
import { Link } from 'react-router-dom'
import CircularProgress from '@material-ui/core/CircularProgress';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CreateBlog from "./CreateBlog"

import {  connect, useDispatch } from 'react-redux'
import { getBlogList, getBlog, getBlogComments } from "../../actions/blogAction";

const useStyles = makeStyles((theme) => ({

  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  floating:{
    margin: 0,
    top: 'auto',
    right: 20,
    bottom: 20,
    left: 'auto',
    position: 'fixed',
  }
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Bloglist(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true)
  const [openDialogue, setopenDialogue] = useState(false)


  const createBlog = () => {
    setopenDialogue(true)
  }

  const toggleDialogue = (value) =>{
    setopenDialogue(value)
  }

  useEffect(()=>{
    dispatch(getBlogList());
    setLoader(false)
  },[])

  const setSelectedBlog = (blogId) =>{
    dispatch(getBlog(blogId))
    dispatch(getBlogComments(blogId))
  }

  if(loader)
    return  <CircularProgress />
      

  return (
    <Container className={classes.cardGrid} maxWidth="md">
            <CreateBlog  open={openDialogue} toggleDialogue={toggleDialogue}/>
            <Grid container spacing={4}>
            {props.blogList.map((blog, index) => (
              <Grid item key={blog.data.blogid} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRJekz0UlVFCsmNDe3MFokIzm-aE9pOKW8A&usqp=CAU"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                       {blog.data.title}
                    </Typography>
                    <Typography>
                      This article is about topic {blog.data.title}
                    </Typography>
                    
                  </CardContent>
                  <CardActions>
                  <Button   color="primary" size="small" onClick={()=>setSelectedBlog(blog.data.blogid)} component={Link} to="/viewblog" autoFocus>
                      View   Blog
                    </Button>
                    <Typography>
                      {blog.data.date}
                    </Typography>
                    <Button size="small" color="primary">
                      <StarIcon  style={{ fontSize: 12, color:'green' }}/>  
                      <StarIcon  style={{ fontSize: 12, color:'green' }}/>  
                      <StarIcon  style={{ fontSize: 12, color:'green' }}/>  
                      <StarIcon  style={{ fontSize: 12, color:'green' }}/>  
                    </Button>
          
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
          <div className={classes.floating}> 
            <Fab onClick={createBlog} color="primary" aria-label="add">
              <AddIcon />
            </Fab>
          </div>
        </Container>
  );
}


const mapStateToProps = (state) => {
  return {
    blogList: state.blogReducer.blogList,
    // error: state.employeeReducer.error,
    
  };
};

export default connect(mapStateToProps)(Bloglist);

 