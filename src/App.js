import './App.css';
import React, {Suspense, lazy} from 'react';
//import Home from './lazy-loading/Components/Home'
//import About from './lazy-loading/Components/About';
const Home = lazy(()=> import('./lazy-loading/Components/Home'))
const About = lazy(()=> import('./lazy-loading/Components/About'))

function App() {
  return (
    <div className="App">
        <h1>App Header</h1>
        <Suspense fallback={<div> Home Loading...</div>}>
          <Home />
          {/* <About/> */}
        </Suspense>
        <Suspense fallback={<div>Loading About...</div>}>
          <About />
        </Suspense>
    </div>
  );
}

export default App;
