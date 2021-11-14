import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import MobileNav from './Components/MobileNav/MobileNav';
import './App.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <article className="App">
        <Header />
        <MobileNav />
        <Switch>
          <Route path="/" exact component={() => <Landing />} />
        </Switch>
        <Footer />
      </article>
    </BrowserRouter>
  );
}

export default App;
