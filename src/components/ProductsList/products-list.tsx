"use client"

import { useProducts } from "@/hooks/useProducts";
import { ProductCard } from "../ProductCard/product-card";
import styles from './product-list.module.scss';

interface ProductsListProps {

}

export function ProductsList(props: ProductsListProps) {
    const { data } = useProducts();

    return (
        <div className={styles.listContainer}>
            {data?.map(product =>
                <ProductCard
                    key={product.id}
                    name={product.name}
                    images={product.images}
                />
            )}
        </div>
    )
}