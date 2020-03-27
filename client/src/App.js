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
import Blog from './components/Blog';
import AddBlog from './components/AddBlog';
import EditBlog from './components/EditBlog';
import WithAuth from './components/WithAuth';
import AddUser from './components/AddUser';
import Login from './components/login';
import NotFound from './components/NotFound';
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
     <Route path='/submissions' component={WithAuth(Submissions)} />
     <Route path='/blogs' component={Blogs} />
     <Route path='/blog/:slug' component={Blog} />
     <Route path='/login' component={Login} />
     <Route path="/addblog" component={WithAuth(AddBlog)} />
     <Route path="/adduser" component={AddUser} />
     <Route path="/editblog/:slug" component={WithAuth(EditBlog)} />
     <Route path="*" component={NotFound} />
     </Switch>
     <Footer />
    </div>
    </Router>
  );
}

export default App;