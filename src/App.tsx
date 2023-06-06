import React from 'react';
import './App.css';
import { RandomTextEffect } from './components/randomTextEffect';
import { GlobalNav } from './components/globalNav/globalNav';
import { Route, Routes} from "react-router-dom";
import { Home } from './pages/Home/Home';
import { About } from './pages/About/About';
import { NotFound } from './pages/NotFound/NotFound';
function App() {
  return (<>
    <GlobalNav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/#/about" element={<About/>}/>
      <Route path='*' element={<NotFound/>}/>
    </Routes>
    <About/>
    </>
  );
}

export default App;
