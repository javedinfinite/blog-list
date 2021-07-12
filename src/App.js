import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import SearchAppBar from './components/Appbar'
import { Switch, Route, HashRouter, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store'
import Localbase from "localbase";

import Error from './components/Error'
import Bloglist from './components/bloglist';
import BlogView from './components/blogview';
 


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <Provider store={store}> 
    <HashRouter>
    <div className={classes.root}>
      <SearchAppBar  /> 
      <Switch>
              <Route exact path="/" component={Bloglist} />
              <Route exact path="/viewblog" component={BlogView} />
              <Route component={Error}/>
         
    </Switch>
  </div>
  </HashRouter>
  </Provider > 
  );
}

export default App