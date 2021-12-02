import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./Components/Header/Header";
import Landing from "./Components/Landing/Landing";
import MobileNav from "./Components/MobileNav/MobileNav";
import Footer from "./Components/Footer/Footer";
import Smart from "./Components/Smart/Smart";
import Cloud from "./Components/Cloud/Cloud";
import Webapp from "./Components/Webapp/Webapp";
import Research from "./Components/Research/Research";
import About from "./Components/About/About";
import Techpartners from "./Components/Techpartners/Techpartners";
import Careers from "./Components/Careers/Careers";
import Contact from "./Components/Contact/Contact";
import Finance from "./Components/Finance/Finance";
import Sales from "./Components/Sales/Sales";
import Marketing from "./Components/Marketing/Marketing";
import Supplychain from "./Components/Supplychain/Supplychain";
import Services from "./Components/Services/Services";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

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
          <Route
            path="/technological-partners"
            exact
            component={() => <Techpartners />}
          />
          <Route path="/careers" exact component={() => <Careers />} />
          <Route path="/contact" exact component={() => <Contact />} />
          <Route path="/finance" exact component={() => <Finance />} />
          <Route path="/sales" exact component={() => <Sales />} />
          <Route path="/marketing" exact component={() => <Marketing />} />
          <Route path="/supply-chain" exact component={() => <Supplychain />} />
          <Route path="/services" exact component={() => <Services />} />
        </Switch>
        <Footer />
      </article>
    </BrowserRouter>
  );
}

export default App;
