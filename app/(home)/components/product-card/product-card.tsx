import styles from "./product-card.module.css";

import {Card} from "@/shared/ui/card/card";
import {Float} from "@/shared/ui/float/float";
import {Text} from "@/shared/ui/text/Text";
import {AddToCartButton} from "./components/add-to-cart-button/add-to-cart-button";
import type {ProductType} from "@/shared/api/hooks/use-products/use-products.types";
import {getImageUrl} from "@/shared/services/dom.service";
import Image from "next/image"

export function ProductCard({product}: { product: ProductType }) {
    const src = getImageUrl(product.snippetImage.url, 600);

    return (
        <Card className={styles.container}>
            <div style={{position: "relative"}}>
                <div className={styles.image}>
                    <Image
                        src={src}
                        className="radius-lg aspect-square"
                        alt={product.longTitle}
                        loading="lazy"
                        style={{objectFit: 'contain'}}
                        height={165}
                        width={165}
                    />
                </div>
                <Float placement="bottom-end">
                    <AddToCartButton product={product} />
                </Float>
            </div>
            <Text fontSize="md" fontWeight="medium">
                {product.currentPriceSigned}
            </Text>
            <Text fontSize="sm">{product.longTitle}</Text>
        </Card>
    );
}
