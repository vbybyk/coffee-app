import Logo from './logo-svg';

import './app-header.css'

const Header = (props) => {
  return(
    <div className="header">
        <div className="logo">
            <Logo/>
        </div>
        <ul className="header-nav-wrapper">
            <li className="header-nav-item">Coffee house</li>
            <li className="header-nav-item">Our coffee</li>
            <li className="header-nav-item">For your pleasure</li>
        </ul>
        <h1>Our Coffee</h1>
    </div>
  )
  
}

export default Header;