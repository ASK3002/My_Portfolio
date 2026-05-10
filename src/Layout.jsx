import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet, useLocation } from 'react-router-dom';
import AnimatedBackground from './components/AnimatedBackground/AnimatedBackground';
import FloatingOrbs from './components/FloatingOrbs/FloatingOrbs';
import PageTransition from './components/PageTransition/PageTransition';
import './Layout.css';

function Layout() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <div className="layout-container">
      <AnimatedBackground />
      <FloatingOrbs />
      
      <div className="layout-content">
        <Header />
        <main className="main-content">
          <PageTransition>
            <Outlet />
          </PageTransition>
        </main>
        {!isHome && <Footer />}
      </div>
    </div>
  );
}

export default Layout;
