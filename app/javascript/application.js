import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FullArticle from './pages/fullArticle.js';
import Home from './pages/home.js';
import '@patternfly/react-core/dist/styles/base.css';

axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles/:id" element={<FullArticle />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
