import React, { useState } from "react";
import Input from "@/components/Input/Input";
import Button from "@/components/Button/Button";
import TitlePage from "@/components/TitlePage/TitlePage";

import styles from "./login.module.scss";

const Login = () => {

    const [userForm, setUserForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
      });

      const handleInput = (e) => {
        setUserForm({ ...userForm, [e.target.name]: e.target.value });
      }

    //   const submitForm = (e) => {
    //     e.preventDefault();
    //     AuthService.login(userForm)
    //       .then(user => console.log(user))
    //       .catch(err=>console.log(err))
    //   }
    
    return (
        <div>
          <TitlePage title="Connectez-vous à votre compte"/>
          <form className={styles.form__login}>
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
    

export default Login;