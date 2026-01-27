import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <a href="#home" className="navbar-logo">
          <span className="logo-initial">M</span>
          <span className="logo-name">Miron Cornel-Iosif</span>
        </a>
        
        <ul className="navbar-menu">
          <li><a href="#about">ABOUT</a></li>
          <li><a href="#experience">EXPERIENCE</a></li>
          <li><a href="#projects">PROJECTS</a></li>
          <li><a href="#contact">CONTACT</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
