import React from "react";
import Link from "next/link";
import styles from "./Card.module.scss";

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Card = ({ place }) => {
    return (
        
                <div className={styles.card}>
                    <Link href={{ pathname: "/room", query: { ...place } }}>
                    <div className={styles.card__image}>
                        <img src={place.image} alt={place.title} />
                    </div>
                    <div className={styles.card__info}>
                        <div className={styles.card__info__title}>
                            <h3>{place.title}</h3>
                        </div>
                        <div className={styles.card__info__description}>
                            <p>{place.description}</p>
                            <p>{place.type} · {place.location}</p>
                            <p>{place.price}€ / nuit</p>
                        </div>
                        <div className={styles.card__info__rating}>
                            <div className={styles.card__info__rating__stars}>
                                <FontAwesomeIcon icon={faStar} />
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                        </div>
                    </div>
                    </Link>
                </div>
        
    );
};

export default Card;
