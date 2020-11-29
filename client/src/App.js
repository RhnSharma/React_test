import React, { Fragment, useState, useEffect } from "react";
import "./App.css";
import TopNav from "./components/Navbar";
import HomePage from "./components/HomePage";
import AboutPage from "./components/AboutPage";
import ContactPage from "./components/ContactPage";
import ProjectsPage from "./components/ProjectsPage";
import Footer from "./components/Footer";
import Submissions from "./components/Submissions";
import Blogs from "./components/Blogs";
import Blog from "./components/Blog";
import AddBlog from "./components/AddBlog";
import EditBlog from "./components/EditBlog";
import WithAuth from "./components/WithAuth";
import Login from "./components/login";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import storage from "local-storage-fallback";
const GlobalStyle = createGlobalStyle`
  .App {
    background-color: ${(props) =>
      props.theme.mode === "dark" ? "#000" : "#f6f6f8"};
    color : ${(props) => (props.theme.mode === "dark" ? "#fff" : "#000")}
  }
  .name {
    color : ${(props) => (props.theme.mode === "dark" ? "#f13434" : "#143fde")}
  }
  #brandName{
    color: ${(props) => (props.theme.mode === "dark" ? "white" : "black")}
  }
  #brandName{
    color: ${(props) => (props.theme.mode === "dark" ? "white" : "black")}
  }
  #brandName:hover{
    color: ${(props) => (props.theme.mode === "dark" ? "red" : "#143fde")}
  }
`;

function getInitialTheme() {
  const savedTheme = storage.getItem("theme");
  return savedTheme ? JSON.parse(savedTheme) : { mode: "light" };
}

function App() {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    storage.setItem("theme", JSON.stringify(theme));
  }, [theme]);
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyle />
          <div className="App">
            <div style={{ display: "flex" }}>
              <div style={{ flex: 1 }}></div>
              <div style={{ marginRight: "1%" }}>
                {theme.mode === "light" ? (
                  <span>Switch to dark mode &nbsp; </span>
                ) : (
                  <span>Switch to light mode &nbsp; </span>
                )}
                <input
                  onClick={() => {
                    if (theme.mode === "light") {
                      setTheme({ mode: "dark" });
                    } else {
                      setTheme({ mode: "light" });
                    }
                  }}
                  className="react-switch-checkbox"
                  id={`react-switch-new`}
                  type="checkbox"
                />
                <label
                  className="react-switch-label"
                  htmlFor={`react-switch-new`}
                >
                  <span className={`react-switch-button`} />
                </label>
              </div>
            </div>
            <TopNav theme={theme} />
            <Switch>
              <Route
                path="/"
                exact
                render={() => (
                  <Fragment>
                    <HomePage />
                    <AboutPage />
                    <ContactPage />
                    <ProjectsPage />
                  </Fragment>
                )}
              />
              <Route path="/submissions" component={WithAuth(Submissions)} />
              <Route path="/blogs" component={() => <Blogs theme={theme} />} />
              <Route path="/blog/:slug" component={Blog} />
              <Route path="/login" component={Login} />
              <Route path="/addblog" component={WithAuth(AddBlog)} />
              <Route path="/editblog/:slug" component={WithAuth(EditBlog)} />
              <Route path="*" component={NotFound} />
            </Switch>
            <Footer />
          </div>
        </>
      </ThemeProvider>
    </Router>
  );
}

export default App;
