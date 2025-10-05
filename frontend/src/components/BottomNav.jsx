import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/bottom-nav.css'
import { useAuth } from '../contexts/AuthContext'
import axios from 'axios'

const BottomNav = () => {
  const { user, foodPartner, isAuthenticated, logout } = useAuth();

  const handleLogout = async () => {
    try {
      if (user) {
        await axios.get('http://localhost:3000/api/auth/user/logout', { withCredentials: true });
      } else if (foodPartner) {
        await axios.get('http://localhost:3000/api/auth/food-partner/logout', { withCredentials: true });
      }
      logout();
    } catch (error) {
      console.error('Error logging out:', error);
      logout(); // Still logout locally even if server request fails
    }
  };

  return (
    <nav className="bottom-nav" role="navigation" aria-label="Bottom">
      <div className="bottom-nav__inner">
        <NavLink to="/" end className={({ isActive }) => `bottom-nav__item ${isActive ? 'is-active' : ''}`}>
          <span className="bottom-nav__icon" aria-hidden="true">
            {/* home icon */}
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 10.5 12 3l9 7.5"/>
              <path d="M5 10v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V10"/>
            </svg>
          </span>
          <span className="bottom-nav__label">Home</span>
        </NavLink>

        {isAuthenticated && user && (
          <NavLink to="/saved" className={({ isActive }) => `bottom-nav__item ${isActive ? 'is-active' : ''}`}>
            <span className="bottom-nav__icon" aria-hidden="true">
              {/* bookmark icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 3h12a1 1 0 0 1 1 1v17l-7-4-7 4V4a1 1 0 0 1 1-1z"/>
              </svg>
            </span>
            <span className="bottom-nav__label">Saved</span>
          </NavLink>
        )}

        {isAuthenticated && (
          <button onClick={handleLogout} className="bottom-nav__item bottom-nav__logout">
            <span className="bottom-nav__icon" aria-hidden="true">
              {/* logout icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                <polyline points="16,17 21,12 16,7"/>
                <line x1="21" y1="12" x2="9" y2="12"/>
              </svg>
            </span>
            <span className="bottom-nav__label">Logout</span>
          </button>
        )}

        {!isAuthenticated && (
          <NavLink to="/user/login" className={({ isActive }) => `bottom-nav__item ${isActive ? 'is-active' : ''}`}>
            <span className="bottom-nav__icon" aria-hidden="true">
              {/* login icon */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                <polyline points="10,17 15,12 10,7"/>
                <line x1="15" y1="12" x2="3" y2="12"/>
              </svg>
            </span>
            <span className="bottom-nav__label">Login</span>
          </NavLink>
        )}
      </div>
    </nav>
  )
}

export default BottomNav
