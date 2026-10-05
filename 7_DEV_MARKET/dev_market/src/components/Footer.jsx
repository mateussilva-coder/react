import React from 'react'
import styles from '../css/Footer.module.css'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <footer className={styles.footer}>
            <p>
                <span>Gerenciador de Produtos</span> &copy; {currentYear}
            </p>
            <p className={styles.subtext}>
                Desenvolvido com React e json-server
            </p>
        </footer>
    )
}

export default Footer