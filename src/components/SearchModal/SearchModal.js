import React, { useState } from "react";

import Input from "../Input/Input";
import Button from "@/components/Button/Button";
import TitlePage from "../TitlePage/TitlePage";

import styles from "./SearchModal.module.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchModal = ({ onClose }) => {
  const handleSearch = (event) => {
    event.preventDefault();

  }

  const [searchForm, setForm] = useState({
    name: "",
    location: "",
  });

  return (
    <div className={styles.modal}>
      <TitlePage title="Recherche" />
      <button className={styles.close_button} onClick={onClose}>
        <FontAwesomeIcon icon={faTimes} /> Fermer
      </button>

      <form className={styles.form__register}>
        <Input
          titleLabel="Titre"
          inputType="text"
          inputPlaceholder="Titre"
          inputName="name"
          inputValue={searchForm.name || ""}
          inputOnChange={(e) => {
            handleSearch(e);
          }}
        />
        <Input
          titleLabel="Lieu"
          inputType="text"
          inputPlaceholder="Lieu"
          inputName="location"
          inputValue={searchForm.location || ""}
          inputOnChange={(e) => {
            handleSearch(e);
          }}
        />
        <Button
          title="Valider"
          handleClick={(e) => {
            submitForm(e);
          }}
          type="submit"
          btnClass="btn__primary"
        />
      </form>
    </div>
  );
};

export default SearchModal;
