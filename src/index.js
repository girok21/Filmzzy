import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchBarProvider } from './contexts/search-bar.context';
import { MoviesContextProvider } from './contexts/movies.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchBarProvider>
        <MoviesContextProvider>
          <App />
        </MoviesContextProvider>
      </SearchBarProvider>
    </BrowserRouter>
  </React.StrictMode>
);

