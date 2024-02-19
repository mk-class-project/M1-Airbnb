import React from "react";

import styles from "./TitlePage.module.scss";

const TitlePage = ({ title }) => {
    return (
        <div className={styles.title__page}>
        <h1>{title}</h1>
        </div>
    );
};

export default TitlePage;