import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <article className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={() => <Landing />} />
        </Switch>
      </article>
    </BrowserRouter>
  );
}

export default App;
