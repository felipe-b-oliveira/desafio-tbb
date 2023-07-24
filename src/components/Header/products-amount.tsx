
import { useProducts } from '../../hooks/useProducts';
import styles from './products-amount.module.scss';

export function ProductAmount() {
    const { data } = useProducts();
    const productsCount = data?.length;

    return (
        <div className={styles.ProductAmount}>
            {productsCount} Resultados
        </div>
    )
}