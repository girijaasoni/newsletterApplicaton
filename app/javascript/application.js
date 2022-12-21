import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullArticle from './pages/fullArticle.js';
import Home from './pages/home.js';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/fullArticle/:id" element={<FullArticle />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
