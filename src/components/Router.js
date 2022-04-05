import React from 'react';
import Control from '../pages/Control'
import Error from '../pages/Error.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../pages/Home.js';
import Rarity from '../pages/Rarity';
function Router() {
  return <div>
    <BrowserRouter>
      <Routes>     
        <Route path="/" element={<Home></Home>}></Route>
              <Route path="rarity" element={<Rarity></Rarity>}></Route>
        <Route path="/Control" element={<Control></Control>}></Route>
        <Route path="*" element={<Error></Error>}></Route>
      </Routes>
    </BrowserRouter>
  </div>;
}

export default React.memo(Router);
