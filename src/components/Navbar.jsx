import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full bg-slate-900/90 backdrop-blur-md border-b border-slate-800 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex-shrink-0">
                        <Link to="/home" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-emerald-400 bg-clip-text text-transparent">
                            BuildPro
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link to="/home" className="text-gray-300 hover:text-white px-3 py-2 rounded-md font-medium transition-colors">Catalog</Link>
                            <Link to="/login" className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md font-medium transition-all shadow-lg shadow-blue-500/30">Login</Link>
                            <Link to="/signup" className="border border-slate-600 text-gray-300 hover:bg-slate-800 hover:text-white px-4 py-2 rounded-md font-medium transition-all">Sign Up</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
