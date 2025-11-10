// src/App.jsx
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Auth from './Auth'; // your renamed login file
import Home from './pages/Home';
import ComplaintRegister from './pages/ComplaintRegister';
import Navbar from './components/Navbar';

export default function App() {
  // simple auth stub: check localStorage flag (frontend-only)
  const fakeIsLoggedIn = !!localStorage.getItem('trashtrace_user');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Auth />} />
        <Route
          path="/"
          element={
            fakeIsLoggedIn ? (
              <>
                <Navbar />
                <Home />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route
          path="/register-complaint"
          element={
            fakeIsLoggedIn ? (
              <>
                <Navbar />
                <ComplaintRegister />
              </>
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />
        <Route path="*" element={<Navigate to={fakeIsLoggedIn ? '/' : '/login'} replace />} />
      </Routes>
    </BrowserRouter>
  );
}
