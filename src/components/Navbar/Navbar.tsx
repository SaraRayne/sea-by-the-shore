import React from 'react';
import styles from './Navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles.navbarIcon}>
        Home Icon
      </div>
      <ul className={styles.navbarList}>
        <li className={styles.navbarElement}>
          Nav 1
        </li>
        <li className={styles.navbarElement}>
          Nav 2
        </li>
        <li className={styles.navbarElement}>
          Nav 3
        </li>
      </ul>
    </div>
  )
}

export default Navbar;