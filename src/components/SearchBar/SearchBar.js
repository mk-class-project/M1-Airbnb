import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./SearchBar.module.scss";

import SearchModal from "../SearchModal/SearchModal";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

const SearchBar = () => {
  const [showModal, setShowModal] = useState(false);
  const modalRef = useRef(null);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [modalRef]);

  return (
    <>
      <div className={styles.searchButton}>
        <button onClick={handleShowModal}>
          <div className={styles.bar}>
            <div className={styles.bar__list}>
              <div className={styles.bar__item}>N'importe où</div>
              <div className={styles.bar__item}>Une Semaine</div>
              <div className={styles.bar__item}>Ajouter des voyageurs</div>
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                className={styles.faSearch}
              />
            </div>
          </div>
        </button>
      </div>
      {showModal && (
        <div ref={modalRef}>
          <SearchModal onClose={handleCloseModal} />
        </div>
      )}
    </>
  );
};

export default SearchBar;
