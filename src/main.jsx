import './index.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import ProtectedRoute from './components/ProtectedRoute';
import { UserContextProvider } from './context/Context';
import Home from './pages/Home';
import Login from './pages/Login';
import Movies from './pages/Movies';
import Series from './pages/Series';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/movies"
            element={
              <ProtectedRoute>
                <Movies />
              </ProtectedRoute>
            }
          />
          <Route
            path="/series"
            element={
              <ProtectedRoute>
                <Series />
              </ProtectedRoute>
            }
          />
        </Routes>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
