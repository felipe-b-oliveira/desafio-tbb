"use client"

import Link from 'next/link';
import styles from './header.module.scss';
import { PrimaryInputWSearchIcon } from './Searchbar/primary-input';
import { useFilter } from '@/hooks/useFilter';

interface HeaderProps {

}

export function Header(props: HeaderProps) {
    const { search, setSearch } = useFilter();

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <Link href="/">TBB STORE</Link>
                <PrimaryInputWSearchIcon
                    value={search}
                    handlechange={setSearch}
                />
            </div>
        </header>
    )
}