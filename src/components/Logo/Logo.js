import React from "react";
import Link from "next/link";

import styles from "./Logo.module.scss";
import logo from '../../../public/logo.png';

const Logo = () => {
    return (
        <div className={styles.logo__head}>
            <div className={styles.logo__img}>
                <Link href="/" passHref>
                    <img src={logo.src} alt="Airbnb" />
                </Link>
            </div>
        </div>
    );
};

export default Logo;

