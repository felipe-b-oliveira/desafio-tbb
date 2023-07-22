import Link from 'next/link';
import styles from './styles.module.scss';
import { PrimaryInputWSearchIcon } from './Searchbar/primary-input';

interface HeaderProps {

}

export function Header(props: HeaderProps) {
    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">TBB STORE</Link>
                <PrimaryInputWSearchIcon />

                {/* <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <a className={styles.active}>Home</a>
                    <a>Posts</a>
                </nav> */}
            </div>
        </header>
    )
}