import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';
import ProtectedRoute from './components/routes/ProtectedRoute';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from './store/store';

function App() {
  const token = useSelector((state: RootState) => state.auth.token);

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <Navigate to="/home" replace /> : <Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        } />
      </Routes>
    </Router>
  );
}

export default App;
