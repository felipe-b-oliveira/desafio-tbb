'use client'

import { useFilter } from '@/hooks/useFilter';
import styles from './filter.module.scss';
import { FilterItem } from './filter-item';

export function FilterPanel() {
    const { category, setCategory } = useFilter();

    return (
        <div className={styles.categoryFilter}>
            <summary className={styles.filterTitle} data-ic-title="filtros-categoria" data-testid="summaryFilter">Filtros</summary>
            <FilterItem />
        </div>
    )
}