import { Outlet, useLocation } from 'react-router-dom'
import Footer from './components/Footer'
import Header from './components/navigation/Header'
import { useEffect } from 'react';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}

export default App
