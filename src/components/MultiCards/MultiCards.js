import React from "react";
import Card from "../Card/Card";

import styles from "./MultiCards.module.scss";

const MultiCards = ({ places }) => {
  return (
    <div className={styles.multi__cards}>
      {
        places && places.map((item) => (
            <Card key={item.id} place={item} />
        ))
      }
    </div>
  );
};

export default MultiCards;
