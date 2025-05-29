import ArabicNavbar from './components/navbar';
import React from 'react';
import Footer from './components/footer';
import { Outlet } from 'react-router-dom';
function App() {
  // Prevent horizontal scroll globally
  React.useEffect(() => {
    document.body.style.overflowX = 'hidden';
    return () => { document.body.style.overflowX = ''; };
  }, []);
  return (
    <div className="font-poppins">
      <ArabicNavbar/>
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
