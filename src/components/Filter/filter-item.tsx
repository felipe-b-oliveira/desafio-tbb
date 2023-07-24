import { useProducts } from '@/hooks/useProducts';
import styles from './filter.module.scss';
import { Product } from '@/types/product';

export function FilterItem() {
    const { data } = useProducts();

    const categories = data?.map((item) => item.category);
    const uniqueCategoryNamesSet = new Set(categories?.map((category) => category.name));
    const uniqueCategoryNamesArray = Array.from(uniqueCategoryNamesSet);

    return (
        <div className={styles.filterContent}>
            {
                uniqueCategoryNamesArray?.map(category =>
                    <label className={styles.filterOption}>
                        <input type="checkbox" className={styles.filterCheckbox} data-ic-trigger="filtros-categoria" data-testid="checkboxFilter" value="has_flash"></input>
                        {category}
                    </label>
                )
            }
        </div>
    )
}