import { Image } from "../../types/image"
import styles from './product.module.scss';

interface ProductCardProps {
    name: string
    images: Image[]
}

export function ProductCard(props: ProductCardProps) {
    const imageURL = props.images[0].asset.url as string
    return (
        <div className={styles.productCard}>
            <img src={imageURL} />
            <div>
                <span>{props.name}</span>
            </div>
        </div>
    )
}