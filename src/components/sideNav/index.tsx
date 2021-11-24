import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router';
import './styles.scss';

const SideNav = () => {
  const location = useLocation();

  const [currentPath, setCurrentPath] = useState('');

  useEffect(() => {
    const path = location.pathname;

    setCurrentPath(path);
  }, [location]);

  return (
    <div className='side-nav'>
      <ul>
        <Link to='/'>
          <li className={`${currentPath === '/' ? 'selected' : ''}`}>Home</li>
        </Link>
        <Link to='/blog'>
          <li className={`${currentPath === '/blog' ? 'selected' : ''}`}>Blog</li>
        </Link>
        <Link to='/store'>
          <li className={`${currentPath === '/store' ? 'selected' : ''}`}>Store</li>
        </Link>
      </ul>
    </div>
  );
};

export default SideNav;
