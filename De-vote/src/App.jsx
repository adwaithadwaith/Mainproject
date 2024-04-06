import React from 'react';
import './App.css';
import Header from './components/Header';
import Layout from './pages/Layout';
import Candidate from './pages/Candidate';
import Dashboard from './pages/Dashboard';
import Voter from './pages/Voter';
import Elections from './pages/Elections';
import Results from './pages/Results';
import Login from './pages/Login/Login';
import POLogin from './pages/POLogin/POLogin';
import AdminLogin from './pages/AdminLogin/AdminLogin';
import { Routes, Route, BrowserRouter as Router, useLocation, Navigate } from 'react-router-dom';
import { useAuthContext } from './hooks/useAuthContext';
import Vote from './pages/Vote';

function AppWithHeader() {
  const location = useLocation();
  const { user } = useAuthContext(); // Assuming useAuthContext() returns { user }
  console.log(user?.userType)

  // Paths where the Header should not be displayed
  const noHeaderPaths = ['/', '/pologin', '/admin'];

  // Check if the current path is one of the paths where Header should not be displayed
  const showHeader = !noHeaderPaths.includes(location.pathname);

  const isLoginOrRegister = location.pathname === '/' || location.pathname === '/pologin' || location.pathname === '/admin';
  const pageClass = isLoginOrRegister ? 'custom-background' : 'normal-background';

  return (
    <div className={pageClass}>
      {showHeader && <Header userType={user?.userType} />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Login />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/dashboard" element={user ? <Dashboard /> : <Navigate to="/" />} />
          <Route path="/voters" element={user ? <Voter /> : <Navigate to="/" />} />
          <Route path="/elections" element={user ? <Elections /> : <Navigate to="/" />} />
          <Route path="/vote" element={user ? <Vote /> : <Navigate to="/" />} />
          <Route path="/results" element={user ? <Results /> : <Navigate to="/" />} />
          <Route path="/pologin" element={<POLogin />} />
          <Route path="/admin" element={<AdminLogin />} />
          {/* Add more routes as needed */}
        </Route>
      </Routes>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppWithHeader />
    </Router>
  );
}

export default App;
