import styles from './page.module.scss';

export default function Footer() {

    return (
        <footer className={styles.contener}>
            <p className={styles.title}>Social Media</p>
            <div className={styles.mediaContener}>
                <ul className={styles.medialist}>
                    <li><a href="/">X</a></li>
                    <li><a href="/">Gmail</a></li>
                    <li><a href="/">Github</a></li>
                </ul>
            </div>
        </footer>
    )
}