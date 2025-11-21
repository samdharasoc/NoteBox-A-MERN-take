import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const token = localStorage.getItem('token');
  const [open, setOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-white/60 backdrop-blur-md sticky top-0 z-40 border-b border-gray-100">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-200 via-indigo-200 to-yellow-200 flex items-center justify-center soft-card">
            <span className="font-bold text-indigo-600">NB</span>
          </div>
          <div>
            <div className="text-lg font-semibold text-slate-800">NOTEBOX</div>
            <div className="text-xs text-slate-500">gentle notes, focused flow</div>
          </div>
        </Link>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/" className={`px-3 py-2 rounded-md ${location.pathname==='/'? 'bg-indigo-50 text-indigo-600' : 'text-slate-700'}`}>Home</Link>
          <Link to="/about" className={`px-3 py-2 rounded-md ${location.pathname==='/about'? 'bg-indigo-50 text-indigo-600' : 'text-slate-700'}`}>About</Link>
          {token ? (
            <button onClick={logout} className="ml-4 px-4 py-2 rounded-lg bg-rose-100 text-rose-600 hover:bg-rose-200 transition">Logout</button>
          ) : (
            <>
              <Link to="/login" className="px-4 py-2 rounded-lg bg-indigo-100 text-indigo-700 hover:bg-indigo-200">Login</Link>
              <Link to="/signup" className="px-4 py-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200">Sign Up</Link>
            </>
          )}
        </div>

        {/* mobile button */}
        <div className="md:hidden">
          <button onClick={()=>setOpen(!open)} className="p-2 rounded-md bg-white border soft-card">
            <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t bg-white/60 backdrop-blur-md px-4 py-3">
          <Link to="/" className="block py-2 text-slate-700">Home</Link>
          <Link to="/about" className="block py-2 text-slate-700">About</Link>
        </div>
      )}
    </nav>
  );
}
