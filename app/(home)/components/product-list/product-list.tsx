import {Grid} from "@/shared/ui/grid/grid";
import {ProductCard} from "../product-card/product-card";
import type {ProductType} from "@/shared/api/hooks/use-products/use-products.types.ts";
import {CartType} from "@/shared/api/hooks/use-cart/use-cart.types";

export function ProductList({products}: { products: ProductType[]; cart?: CartType }) {
    return (
        <Grid>
            {products?.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </Grid>
    );
}
