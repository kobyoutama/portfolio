import React, { useEffect, useState } from 'react';
import './App.css';
import { RandomTextEffect } from './components/randomTextEffect';
import { GlobalNav } from './components/globalNav/globalNav';
import { Route, Routes} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { NotFound } from './pages/NotFound/NotFound';
import { Contact } from './pages/Contact/Contact';
import { Footer } from './pages/Footer/Footer';

function App() {
  const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const windowResize = () => {
          setWidth(window.innerWidth); 
        }
        
        window.addEventListener("resize", windowResize);
        return () => {
            window.removeEventListener("resize", windowResize); 
        }
    }, []);

return (<>
    <GlobalNav width={width}/>
    <Home width={width}/>
    <hr></hr>
    <About/>
    <hr></hr>
    <Contact/>
    <Footer/>
    {/* This was for when it was multipage routing 
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes> */}
    </>
  );
}

export default App;
