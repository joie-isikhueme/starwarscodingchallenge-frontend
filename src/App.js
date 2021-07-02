import Container from 'react-bootstrap/Container'
import Homepage from './pages/Homepage';
import Character from './pages/Character';
import Header from './Header'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header/>
      <Container>
        <Router>
          <Switch>
              <Route path="/character/:slug">
                <Character/>
              </Route>
              <Route path="/">
                <Homepage/>
              </Route>
          </Switch>
        </Router>
      </Container>
    </div>
  );
}

export default App;
