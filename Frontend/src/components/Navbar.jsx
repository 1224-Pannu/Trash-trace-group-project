// src/components/Navbar.jsx
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Recycle, Trash2, Home as HomeIcon, LogOut } from 'lucide-react';

export default function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('trashtrace_user');
    navigate('/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <header className="w-full bg-gradient-to-r from-slate-900/95 via-emerald-950/95 to-slate-900/95 backdrop-blur-xl border-b border-emerald-500/20 shadow-lg shadow-emerald-500/5 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo + Title */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center border border-emerald-400/30 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform duration-200">
            <Recycle className="w-6 h-6 text-white" strokeWidth={2.5} />
          </div>
          <div>
            <h1 className="text-white font-bold text-xl tracking-wide">TRASH TRACE</h1>
            <p className="text-emerald-300/70 text-xs font-medium">Waste Management System</p>
          </div>
        </Link>

        {/* Nav links */}
        <nav className="flex items-center gap-2">
          <Link
            to="/"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
              isActive('/') 
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <HomeIcon className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden md:inline">Home</span>
          </Link>

          <Link
            to="/register-complaint"
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200 ${
              isActive('/register-complaint') 
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-lg shadow-emerald-500/30' 
                : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
            }`}
          >
            <Trash2 className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden md:inline">Register</span>
          </Link>

          <div className="w-px h-8 bg-slate-700/50 mx-2"></div>

          <button
            onClick={handleLogout}
            className="flex items-center gap-2 ml-2 bg-slate-800/50 hover:bg-red-600/20 border border-slate-700/50 hover:border-red-500/50 text-slate-300 hover:text-red-400 px-4 py-2.5 rounded-xl font-semibold transition-all duration-200"
          >
            <LogOut className="w-4 h-4" strokeWidth={2.5} />
            <span className="hidden md:inline">Logout</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
