import { NavLink } from 'react-router-dom';
// import css from './Header.module.css'; Import your CSS module here
import './style.css'

export const Header = () => {
  return (
    <header className='header'>
      <nav className="nav">
        <NavLink
          to="/" end>
          Home
        </NavLink>
        <NavLink
          to="/movies">
          Movie
        </NavLink>
      </nav>
    </header>
  );
};
