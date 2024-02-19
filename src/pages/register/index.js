import React, { useState } from "react";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import TitlePage from "@/components/TitlePage/TitlePage";

import AuthService from "@/services/auth.service.js";

import styles from "./register.module.scss";

const Register = () => {

    const [userForm, setUserForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      });

      const handleInput = (e) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
      }

      const submitForm = (e) => {
        e.preventDefault();
        AuthService.register(userForm)
          .then(user => console.log(user))
          .catch(err=>console.log(err))
      }
    
    return (
        <div className="page__register">
          <TitlePage title="Inscription"/>
          <form className={styles.form__register}>
            <Input
              titleLabel="Prénom"
              inputType="text"
              inputPlaceholder="Prénom"
              inputName="firstName"
              inputValue={userForm.firstName || ""}
              inputOnChange={(e) => {
                handleInput(e);
              }}
            />
            <Input
              titleLabel="Nom"
              inputType="text"
              inputPlaceholder="Nom"
              inputName="lastName"
              inputValue={userForm.lastName || ""}
              inputOnChange={(e) => {
                handleInput(e);
              }}
            />
            <Input
              titleLabel="Email"
              inputType="email"
              inputPlaceholder="Email"
              inputName="email"
              inputValue={userForm.email || ""}
              inputOnChange={(e) => {
                handleInput(e);
              }}
            />
            <Input
              titleLabel="Mot de passe"
              inputType="password"
              inputPlaceholder="Mot de passe"
              inputName="password"
              inputValue={userForm.password || ""}
              inputOnChange={(e) => {
                handleInput(e);
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
    }
    

export default Register;