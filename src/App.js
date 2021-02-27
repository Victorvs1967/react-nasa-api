import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import NasaPhoto from './components/NasaPhoto';

const App = () => (
  <Router>
    <div className="App">
      <Route component={ Home } path="/" exact />
      <Route component={ NasaPhoto } path="/nasaphoto" />
    </div>
  </Router>
);

export default App;
