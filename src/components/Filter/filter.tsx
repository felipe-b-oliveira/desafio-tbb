import styles from './filter.module.scss';
import { FilterItem } from './filterItem';

export function FilterPanel() {
    return (
        <div className={styles.categoryFilter}>
            <summary className={styles.filterTitle} data-ic-title="filtros-categoria" data-testid="summaryFilter">Filtros</summary>
            <FilterItem />
        </div>
    )
}