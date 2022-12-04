import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchBarProvider } from './contexts/search-bar.context';
import { MoviesProvider } from './contexts/movies.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchBarProvider>
        <MoviesProvider>
          <App />
        </MoviesProvider>
      </SearchBarProvider>
    </BrowserRouter>
  </React.StrictMode>
);

