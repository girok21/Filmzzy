import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { SearchBarProvider } from './contexts/search-bar.context';
import { ShowsProvider } from './contexts/shows.context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SearchBarProvider>
        <ShowsProvider>
          <App />
        </ShowsProvider>
      </SearchBarProvider>
    </BrowserRouter>
  </React.StrictMode>
);

