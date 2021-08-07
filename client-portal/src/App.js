import './App.css';
import { Route, Switch } from 'react-router';

// PAGES IMPOR
import Home from './pages/Home';
import About from './pages/About';
import Client from './pages/Client';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/About"> 
          <About/>
        </Route>
        <Route path="/client"> 
          <Client />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
