import { useProducts } from '@/hooks/useProducts';
import styles from './filter.module.scss';
import { Product } from '@/types/product';
import { useState } from 'react';

export function FilterItem() {
    const { data } = useProducts();

    const categories = data?.map((item) => item.category);
    const uniqueCategoryNamesSet = new Set(categories?.map((category) => category.name));
    const uniqueCategoryNamesArray = Array.from(uniqueCategoryNamesSet);

    return (
        <div className={styles.filterContent}>
            {
                uniqueCategoryNamesArray?.map((currCategory, i) =>
                    <label className={styles.filterOption}>
                        <input
                            key={i}
                            type="checkbox"
                            name="category"
                            value={currCategory}
                            className={styles.filterCheckbox}
                        //checked={false}
                        />
                        {currCategory}
                    </label>
                )
            }
        </div>
    )
}