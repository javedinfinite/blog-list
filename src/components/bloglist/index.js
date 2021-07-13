import React , { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import StarIcon from "@material-ui/icons/Star";
import { Link } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CreateBlog from "./CreateBlog";
// import BasicPagination from "./Pagination"
import { connect, useDispatch } from "react-redux";
import {getBlogList,getBlog,getBlogComments} from "../../actions/blogAction";

const useStyles = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
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
    paddingRight: "5%",
  },
  card: {
    height: "100%",
    width:"120%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  floating: {
    margin: 0,
    top: "auto",
    right: 20,
    bottom: 20,
    left: "auto",
    position: "fixed",
  },
  floating2: {
    margin: 0,
    top: "auto",
    right: "auto",
    bottom: 20,
    left: 20,
    position: "fixed",
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles();
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};

 



  function Bloglist(props) {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };








  const dispatch = useDispatch();
  const [loader, setLoader] = useState(true);
  const [openDialogue, setopenDialogue] = useState(false);

  const createBlog = () => {
    setopenDialogue(true);
  };

  const toggleDialogue = (value) => {
    setopenDialogue(value);
  };

  useEffect(() => {
    dispatch(getBlogList());
    setLoader(false);
  }, []);

  const setSelectedBlog = (blogId) => {
    dispatch(getBlog(blogId));
    dispatch(getBlogComments(blogId));
  };

  if (loader) return <CircularProgress />;

//style={{marginRight:"50%"}}
  return (
    <Container className={classes.cardGrid} maxWidth="md" > 
      <CreateBlog open={openDialogue} toggleDialogue={toggleDialogue} />
      
      <Grid container spacing={8} >
        
          {(rowsPerPage > 0
            ? props.blogList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : props.blogList
          ).map((blog) => (
            <Grid item key={blog.data.blogid} xs={10} sm={6} md={4} >
              
            <Card className={classes.card}  >
              
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
                <Button
                  color="primary"
                  size="small"
                  onClick={() => setSelectedBlog(blog.data.blogid)}
                  component={Link}
                  to={"/viewblog/" + blog.data.blogid}
                  autoFocus
                >
                  View Blog
                </Button>
                <Typography>{blog.data.date}</Typography>
                <Button size="small" color="primary">
                  <StarIcon style={{ fontSize: 12, color: "green" }} />
                  <StarIcon style={{ fontSize: 12, color: "green" }} />
                  <StarIcon style={{ fontSize: 12, color: "green" }} />
                  <StarIcon style={{ fontSize: 12, color: "green" }} />
                </Button>
              </CardActions>
            </Card>
          </Grid>
          ))}

 
    
        <TableFooter className={classes.floating2}>
          
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={3}
              count={props.blogList.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: { 'aria-label': 'rows per page' },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Grid  >
      <div className={classes.floating}>
        <Fab onClick={createBlog} color="primary" aria-label="add">
          
          <AddIcon />
        </Fab>
      </div>
      </Container  >
  );
}

const mapStateToProps = (state) => {
  return {
    blogList: state.blogReducer.blogList,
  };
};

export default connect(mapStateToProps)(Bloglist);
