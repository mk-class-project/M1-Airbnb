import React from 'react'

import Logo from '../Logo/Logo'
import Navbar from '../Navbar/Navbar'
import SearchBar from '../SearchBar/SearchBar'

import styles from './Header.module.scss'

const Header = () => {
  return (
    <header className={styles.header_navbar}>
      <Logo />
      <SearchBar />
      <Navbar />
    </header>
  )
}

export default Header
