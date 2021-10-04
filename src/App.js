
import { createContext, useEffect, useState } from 'react';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Services from './components/services/Services';
import  NotFound  from './components/notFound/NotFound';
export const userContext=createContext([]);
function App() {
  const [serve, setServe]=useState([])
  useEffect(()=>{
    fetch("data2.json")
    .then((res) => res.json())
    .then((data) => setServe(data));
  },[])
//  console.log(serve);
  return (
    <userContext.Provider value={serve}>
      <Router>
      <Switch>
        <Route exact path="/">
        <Home></Home>
        </Route>

        <Route  path="/services">
        <Services></Services>
        </Route>

        <Route  path="/about">
        <About></About>
        </Route>

        <Route  path="/contact">
        <Contact></Contact>
        </Route>
        <Route  path="*">
        <NotFound></NotFound>
        </Route>
        
      </Switch>
    </Router>
    </userContext.Provider>
  );
}

export default App;
