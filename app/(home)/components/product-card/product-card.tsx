import styles from "./product-card.module.css";

import {Card} from "@shared/ui/card/card";
import {Float} from "@shared/ui/float/float";
import {Image} from "@shared/ui/image/image.component";
import {Text} from "@shared/ui/text/Text";
import {AddToCartButton} from "./components/add-to-cart-button/add-to-cart-button";
import type {ProductType} from "@shared/api/hooks/use-products/use-products.types";
import {getImageUrl} from "@shared/services/dom.service.ts";

export function ProductCard({product}: { product: ProductType }) {


    const src = getImageUrl(product.snippetImage?.url ?? "", 600);

    return (
        <Card className={styles.container}>
            <div style={{position: "relative"}}>
                <div className={styles.image}>
                    <Image
                        onClick={() => null}
                        src={src}
                        radius="xl"
                        loading="lazy"
                        aspectRatio="1 / 1"
                    />
                </div>

                <Float placement="bottom-end">
                    <AddToCartButton product={product}/>
                </Float>
            </div>
            <Text fontSize="md" fontWeight="medium">
                {product.currentPriceSigned}
            </Text>
            <Text fontSize="sm">{product.longTitle}</Text>
        </Card>
    );
}
