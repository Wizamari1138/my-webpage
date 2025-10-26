import styles from './page.module.scss';

export default function Header() {
    
    return (
        <header className={styles.header}>
            <div className={styles.flexContainer}>
                <h1 className={styles.title}>wizamari1138</h1>
                <nav className={styles.nav}>
                    <ul className={styles.navList}>
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/skills" className="hover:underline">Skills</a></li>
                        <li><a href="/game" className="hover:underline">Game</a></li>
                        <li><a href="/other" className="hover:underline">other</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}