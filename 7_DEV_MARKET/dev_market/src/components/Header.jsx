import styles from '../css/Header.module.css'

const Header = () => {
    return (
        <header className={styles.headerContainer}>
            <h1>Gerenciador de Produtos</h1>
            <p>Painel de controle: </p>
        </header>
    )
}

export default Header