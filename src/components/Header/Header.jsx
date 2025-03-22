import { Link, NavLink } from 'react-router-dom';
import css from './Header.module.css';
import Icon from '../Icon/Icon';
import clsx from 'clsx';

const buildLinkClass = ({ isActive }) => {
  return clsx(css.link, isActive && css.active);
};

const Header = () => {
  return (
    <header className={css.header}>
      <div className={clsx('container', css.container)}>
        <Link to="/" className={css.logo}>
          <Icon id={'logo'} width={136} height={16} />
        </Link>
        <nav className={css.navigation}>
          <NavLink to="/" className={buildLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/catalog" className={buildLinkClass} end>
            Catalog
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
