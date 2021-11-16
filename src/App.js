import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import Landing from './Components/Landing/Landing';
import MobileNav from './Components/MobileNav/MobileNav';
import './App.css';
import Footer from './Components/Footer/Footer';
import Smart from './Components/Smart/Smart';
import Cloud from './Components/Cloud/Cloud';
import Webapp from './Components/Webapp/Webapp';
import Research from './Components/Research/Research';
import About from './Components/About/About';
import Techpartners from './Components/Techpartners/Techpartners';

function App() {
  return (
    <BrowserRouter>
      <article className="App">
        <Header />
        <MobileNav />
        <Switch>
          <Route path="/" exact component={() => <Landing />} />
          <Route path="/smart-analytics" exact component={() => <Smart />} />
          <Route path="/data-cloud" exact component={() => <Cloud />} />
          <Route path="/webapp" exact component={() => <Webapp />} />
          <Route path="/research-lab" exact component={() => <Research />} />
          <Route path="/about" exact component={() => <About />} />
          <Route path="/technological-partners" exact component={() => <Techpartners />} />
        </Switch>
        <Footer />
      </article>
    </BrowserRouter>
  );
}

export default App;
