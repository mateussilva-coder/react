import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <h2>Tech Store</h2>

        <div className={styles.links}>
            <NavLink to="/" className={(({isActive}) => (isActive ? styles.active : ""))}>Home</NavLink>
            <NavLink to="/admin/add" className={(({isActive}) => (isActive ? styles.active : ""))}>Novo Produto</NavLink>
        </div>
    </nav>
  )
}

export default Navbar