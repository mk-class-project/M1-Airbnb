import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobe, faBars, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className={styles.navbar__head}>
      <p>Mettre mon logement sur Airbnb</p>
      <FontAwesomeIcon icon={faGlobe} />
      <button className={styles.dropdownMenu} onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faBars} />
        <FontAwesomeIcon icon={faUser} />
        {isDropdownOpen && (
          <ul className={styles.dropdownContent} ref={dropdownRef}>
            <li>
              <Link href="/login">Se connecter</Link>
            </li>
            <li>
              <Link href="/register">S'inscrire </Link>
            </li>
          </ul>
        )}
      </button>
    </div>
  );
};

export default Navbar;
