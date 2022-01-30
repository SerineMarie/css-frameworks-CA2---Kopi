import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import Home from 'components/home/Home';
import News from 'components/news/NewsContent';
import Contact from 'components/contact/ContactContent';


function Navigation() {
    return (
        <React.Fragment>
             <Router>
      <div>
        <ul>
          <li>
            <Link to="./components/home/Home">Home</Link>
          </li>
          <li>
            <Link to="./components/news/NewsContent">News</Link>
          </li>
          <li>
            <Link to="./components/contact/ContactContent">Contact</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="">
            <Home />
          </Route>
          <Route path="">
            <News />
          </Route>
          <Route path="">
            <Contact />
          </Route>
        </Switch>
      </div>
    </Router>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="#home">The YAY Company</Navbar.Brand>
                <Form inline>
                    <Form.Control type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-primary">Search</Button>
                </Form>
            </Navbar>
    </React.Fragment>
    )
}

export default Navigation
