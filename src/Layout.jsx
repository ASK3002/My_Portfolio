import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="font-script min-h-screen w-full bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <Header />
      <main className="min-h-screen">
        <Outlet />
      </main>
      {!isHome && <Footer />}
    </div>
  );
}

export default Layout;
