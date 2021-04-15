import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import SinglePost from "./components/SinglePost";
import Post from "./components/Post";
import Project from "./components/Project";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Switch>
        <Route component={Home} path='/portfolio' exact />
        <Route component={Home} path='/' exact />
        <Route component={About} path='portfolio/about' />
        <Route component={SinglePost} path='portfolio/post/:slug' />
        <Route component={Post} path='portfolio/post' />
        <Route component={Project} path='portfolio/project' />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
