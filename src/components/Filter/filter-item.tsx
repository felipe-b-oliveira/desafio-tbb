import { useProducts } from '@/hooks/useProducts';
import styles from './filter.module.scss';
import { Product } from '@/types/product';
import { useState } from 'react';
import { useFilter } from '@/hooks/useFilter';

type FilterItemProps = {
    category: string;
};

export function FilterItem(props: FilterItemProps) {
    const { category, setCategory } = useFilter();
    const [isChecked, setIsChecked] = useState(false);

    // TODO: Separar os states para que as categorias não desapareçam / criar um context so de categorias
    const handleChange = (event: any) => {
        const { name } = event
        setCategory(isChecked ? name : '');
        setIsChecked((prevChecked) => !prevChecked);
    };

    const { data } = useProducts();

    const categories = data?.map((item) => item.category);
    const uniqueCategoryNamesSet = new Set(categories?.map((category) => category.name));
    const uniqueCategoryNamesArray = Array.from(uniqueCategoryNamesSet);

    return (
        <div className={styles.filterContent}>
            {
                uniqueCategoryNamesArray?.map((currCategory, i) =>
                    <label key={i} className={styles.filterOption}>
                        <input
                            key={i}
                            className={styles.filterCheckbox}
                            type="checkbox"
                            name={currCategory}
                            checked={category === currCategory}
                            onChange={(e) => handleChange(e.target)}
                        />
                        {currCategory}
                    </label>
                )
            }
        </div>
    )
}