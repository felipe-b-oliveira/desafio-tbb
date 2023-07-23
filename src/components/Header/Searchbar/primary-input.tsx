import { SearchIcon } from './search-icon';
import styles from './search.module.scss';

export function PrimaryInputWSearchIcon() {
    return (
        <div className={styles.inputContainer}>
            <input className={styles.primaryInput} type='text' placeholder='O que você está procurando?' />
            <SearchIcon />
        </div>
    )
}