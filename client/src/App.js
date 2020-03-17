import React, { Fragment } from 'react';
import './App.css';
import TopNav from './components/Navbar';
import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import ProjectsPage from './components/ProjectsPage';
import Footer from './components/Footer';
import Submissions from './components/Submissions';
import Blogs from './components/Blogs';
import AddBlog from './components/AddBlog';
import WithAuth from './components/WithAuth';
import Login from './components/login';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App text-light">
     <TopNav />
     <Switch>
      <Route path='/' exact render={() =>
      <Fragment>
           <HomePage />
           <AboutPage />
           <ContactPage />
           <ProjectsPage />
      </Fragment>
    } />
     <Route path='/submissions' component={Submissions} />
     <Route path='/blogs' component={Blogs} />
     <Route path='/login' component={Login} />
     <Route path="/addblog" component={WithAuth(AddBlog)} />
     </Switch>
     <Footer />
    </div>
    </Router>
  );
}

export default App;