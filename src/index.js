import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Gallery from './scenes/gallery/gallery';
import { BrowserRouter, Routes, Route} from 'react-router-dom'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/bot-webapp/gallery' element={<Gallery />} />
    </Routes>
  </BrowserRouter>
);
