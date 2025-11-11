import { useEffect } from 'react';
import './Header.css';
import { loadData } from '../../services/userService';
function Header() {
  // useEffect(() => {
  //     // loadData()
  //     loadData()
  //     .then(r => console.log("Response:", r.data))
  //     .catch(err => console.log('Initial load failed',err));
  //   }, []);
  return (
    <header className="header">
      <nav className="nav">
        <h1 className="logo">PUBLICIS SAPIENTS PUBLIC NETWORK</h1>
        <div className="home-button" onClick={() => window.location.href = '/'}>
          Home
        </div>
      </nav>
    </header>
  );
}

export default Header;
