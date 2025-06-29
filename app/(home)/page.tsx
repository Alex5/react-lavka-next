import {ProductList} from "./components/product-list/product-list";
import {Text} from "@/shared/ui/text/Text";
import { CartSidebar } from "./components/cart-sidebar/cart-sidebar";
import {getCategory} from "@/lib/api/category";
import {getCart} from "@/lib/api/cart";
import {CatalogSidebar} from "@home/components/catalog-sidebar/catalog-sidebar";

export default async function RootPage() {
    const [{category}, {cart}] = await Promise.all([getCategory(), getCart()]);

    return (
        <>
            <CatalogSidebar/>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px', width: '100%', gridArea: "main"}} >
                {category?.categories?.[0]?.items?.map((categoryItem) => {
                    if (categoryItem.index === 0) return null;

                    const products = categoryItem.items?.map((productItem) => {
                        return {
                            id: productItem.value.id,
                            currentPrice: productItem.value.pricing.price,
                            longTitle: productItem.value.longTitle,
                            // @todo fix this
                            currentPriceSigned: productItem.value.pricing.price + "₽",
                            snippetImage: productItem.value.snippetImage,
                        }
                    })

                    return (
                        <div key={categoryItem.id} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
                            <Text fontSize="title4" fontWeight="medium">{categoryItem.value.title}</Text>
                            <ProductList products={products} cart={cart}/>
                        </div>
                    )
                })}
            </div>
            <CartSidebar/>
        </>
    )
}
