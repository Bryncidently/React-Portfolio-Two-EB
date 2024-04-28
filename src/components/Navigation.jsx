import { Link, useLocation } from 'react-router-dom';


function Navigation() {
  const currentPage = useLocation().pathname;

  return (
    
      <div className="myNav">
      <p className="nav-item">
        <Link
          to="/"
          className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
        >
          Resumé
        </Link>
      </p>
      <p className="nav-item">
        <Link
          to="/About"
          className={currentPage === '/About' ? 'nav-link active' : 'nav-link'}
        >
          About Me
        </Link>
      </p>
      <p className="nav-item">
        <Link
          to="/Portfolio"
          className={currentPage === '/Portfolio' ? 'nav-link active' : 'nav-link'}
        >
          Portfolio
        </Link>
      </p>
      <p className="nav-item">
        <Link
          to="/Contact"
          className={currentPage === '/Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </Link>
      </p>
      </div>
      


  );
}

export default Navigation;
