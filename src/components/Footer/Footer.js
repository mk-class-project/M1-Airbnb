import React from 'react';
import { useState } from 'react';
import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownClick = () => {
    setShowDropdown((prevState) => !prevState);
  };

  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.footer__list}>
          <div className={styles.footer__item}>&copy; {new Date().getFullYear()} Airbnb, Inc. - Clone</div>
          <div className={styles.footer__item}>Confidentialité</div>
          <div className={styles.footer__item}>Conditions générales</div>
          <div className={styles.footer__item}>Plan du site</div>
          <div className={styles.footer__item}>Fonctionnement du site</div>
          <div className={styles.footer__item}>Infos sur l'entreprise</div>
          <div className={styles.footer__item}>Destinations</div>
          <div className={styles.footer__item}>
            <button onClick={handleDropdownClick}>
              Assistance et ressources <FontAwesomeIcon icon={faChevronUp} />
            </button>
            {showDropdown && (
              <div className={styles.footer__list}>
                <div className={styles.footer__item}>Dropdown Item 1</div>
                <div className={styles.footer__item}>Dropdown Item 2</div>
                <div className={styles.footer__item}>Dropdown Item 3</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
