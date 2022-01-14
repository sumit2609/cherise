import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Home } from './Pages/Home';
import { About } from './Pages/About.jsx';
import {Brands} from './Pages/Brands.jsx';
import {Blogs} from './Pages/Blogs';
import {Explore} from './Pages/Explore';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className='app'>
      <Router>
      <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/blogs">
            <Blogs />
          </Route>
          <Route exact path="/brands">
            <Brands />
          </Route>
          <Route exact path="/explore">
            <Explore />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
