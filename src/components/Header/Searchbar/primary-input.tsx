import { InputHTMLAttributes } from 'react';
import { SearchIcon } from './search-icon';
import styles from './search.module.scss';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handlechange: (value: string) => void
}

export function PrimaryInputWSearchIcon(props: InputProps) {
    return (
        <div className={styles.inputContainer}>
            <input
                className={styles.primaryInput}
                type='text'
                placeholder='O que você está procurando?'
                value={props.value}
                onChange={(event) => props.handlechange(event.target.value)}
            />
            <SearchIcon />
        </div>
    )
}