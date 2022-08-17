import React from 'react';
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Favourites} from "./pages/Favourites";
import {Navigations} from "./components/Navigations";

function App() {
  return (
      <>
          <Navigations />
          <Routes>
              <Route path="/" element={ <Home/> }/>
              <Route path="/favourites" element={ <Favourites/> }/>
          </Routes>
      </>
  );
}

export default App;
