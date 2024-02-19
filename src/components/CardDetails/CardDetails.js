import React from "react";

import Link from "next/link";

import Button from "../Button/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import styles from "./CardDetails.module.scss";

const CardDetails = ({ place }) => {
  return (
    <div className={styles.grid}>

      <div className={styles.cardDetails__button}>
        <Link href="/">
          <Button title="Retour" handleClick={() => {}} type="submit" btnClass="btn__primary" />
        </Link>
      </div>

      <div className={styles.cardDetails}>
        <div className={styles.cardDetails__image}>
          <img src={place.image} alt={place.title} />
        </div>
        <div className={styles.cardDetails__info}>
          <div className={styles.cardDetails__info__title}>
            <h1>{place.title}</h1>
          </div>
          <div className={styles.cardDetails__info__description}>
            <p>{place.description}</p>
            <p>{place.type} · {place.location}</p>
            <p>{place.price}€ / nuit</p>
          </div>
          <div className={styles.cardDetails__info__rating}>
            <div className={styles.cardDetails__info__rating__stars}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
          </div>
          <div className={styles.cardDetails__info__button}>
          <Button 
            title="Réserver" 
            handleClick={() => {}} 
            type="submit" 
            btnClass="btn__primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
