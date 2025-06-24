import {Grid} from "@shared/ui/grid/grid";
import {ProductCard} from "../product-card/product-card";
import type {ProductType} from "@shared/api/hooks/use-products/use-products.types.ts";

export function ProductList({products}: { products: ProductType[] }) {
    return (
        <Grid>
            {products?.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}
        </Grid>
    );
}
