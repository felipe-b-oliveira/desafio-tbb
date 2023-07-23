import styles from './filter.module.scss';

export function FilterItem() {
    return (
        <div className={styles.filterContent}>
            <label className={styles.filterOption}>
                <input type="checkbox" className={styles.filterCheckbox} data-ic-trigger="filtros-categoria" data-testid="checkboxFilter" value="has_flash"></input>
                Flash
            </label>
        </div>
    )
}