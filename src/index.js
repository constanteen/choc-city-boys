import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Artists from './pages/Artists';
import Albums from './pages/Albums';
import Tweets from './pages/Tweets';
import Photos from './pages/Photos';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import { Container, Divider } from '@material-ui/core';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Container>
        <div style={{display: "flex", justifyContent: "space-between"}}>
          <NavLink to="/" exact activeStyle={{fontWeight: "bold",color: "red"}}><h1>Artists</h1></NavLink>
          <NavLink to="/tweets" exact activeStyle={{fontWeight: "bold",color: "red"}}><h1>Tweets</h1></NavLink>
          <NavLink to="/photos" exact activeStyle={{fontWeight: "bold",color: "red"}}><h1>Photos</h1></NavLink>
        </div>
        <Divider style={{marginBottom: "2rem"}} />
        <Switch>
          <Route exact path="/">
            <Artists />
          </Route>
          <Route path="/albums">
            <Albums />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/tweets">
            <Tweets />
          </Route>
        </Switch>
      </Container>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
