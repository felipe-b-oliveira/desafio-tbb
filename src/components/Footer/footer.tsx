import Link from 'next/link';
import styles from './footer.module.scss';

export function Footer() {
    return (
        <div className={styles.footerContainer}>
            <div>
                <Link href="https://github.com/felipe-b-oliveira/">© Copyright 2020 - Felipe Oliveira</Link>
            </div>
        </div>
    )
}