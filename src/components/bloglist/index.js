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

import {  connect, useDispatch } from 'react-redux'
import { getBlogList, getBlog } from "../../actions/blogAction";

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
}));

// const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Bloglist(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true)

  useEffect(()=>{
    dispatch(getBlogList());
    setLoader(false)
  },[])

  const setSelectedBlog = (blogId) =>{
    console.log('clicked')
    dispatch(getBlog(blogId))
  }

  if(loader)
    return  <CircularProgress />
      

  return (
    <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
            {props.blogList.map((card, index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlRJekz0UlVFCsmNDe3MFokIzm-aE9pOKW8A&usqp=CAU"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5" component="h2">
                       My Article {card}
                    </Typography>
                    <Typography>
                      This article is about topic{card}
                    </Typography>
                    
                  </CardContent>
                  <CardActions>
                  <Button   color="primary" size="small" onClick={()=>setSelectedBlog(card)} component={Link} to="/viewblog" autoFocus>
                      View   Blog
                    </Button>
                    <Typography>
                      11/7/2021  
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

 