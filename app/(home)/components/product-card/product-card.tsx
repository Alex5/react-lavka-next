import styles from "./product-card.module.css";

import {Card} from "@/shared/ui/card/card";
import {Float} from "@/shared/ui/float/float";
import {Text} from "@/shared/ui/text/Text";
import {AddToCartButton} from "./components/add-to-cart-button/add-to-cart-button";
import type {ProductType} from "@/shared/api/hooks/use-products/use-products.types";
import {getImageUrl} from "@/shared/services/dom.service";
import Image from "next/image"
import {getCart} from "@/lib/api/cart";

export async function ProductCard({product}: { product: ProductType }) {
    const src = getImageUrl(product.snippetImage?.url ?? "", 600);

    const {cart} = await getCart();

    return (
        <Card className={styles.container}>
            <div style={{position: "relative"}}>
                <div className={styles.image}>
                    <Image
                        src={src}
                        className="radius-lg aspect-square"
                        loading="lazy"
                        alt={product.longTitle}
                        sizes="120px"
                        fill
                    />
                </div>
                <Float placement="bottom-end">
                    <AddToCartButton product={product} cart={cart}/>
                </Float>
            </div>
            <Text fontSize="md" fontWeight="medium">
                {product.currentPriceSigned}
            </Text>
            <Text fontSize="sm">{product.longTitle}</Text>
        </Card>
    );
}
