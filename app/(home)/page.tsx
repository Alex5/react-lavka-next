import {Div} from "@shared/ui/div/div";
import {CartSidebar} from "./components/cart-sidebar/cart-sidebar";
import {ProductList} from "./components/product-list/product-list";
import {Text} from "@shared/ui/text/Text";
import {CatalogSidebar} from "@home/components/catalog-sidebar/catalog-sidebar";
import type {CategoryData} from "@shared/api/hooks/use-category/use-category.types";
import {fetcher} from "@shared/api/fetcher";

export async function RootPage() {
    const category = await fetcher<CategoryData>('category');

    return (
        <Div flex>
            <CatalogSidebar/>
            <Div flex flexCol gap2>
                {category?.categories?.[0]?.items?.map((categoryItem) => {
                    const products = categoryItem.items?.map((productItem) => ({
                        id: productItem.value.id,
                        currentPrice: 0,
                        longTitle: productItem.value.longTitle,
                        currentPriceSigned: "",
                        snippetImage: productItem.value.snippetImage,
                    }))

                    return (
                        <Div key={categoryItem.id} flex flexCol gap1>
                            <Text fontSize="title4" fontWeight="medium">{categoryItem.value.title}</Text>
                            <ProductList products={products}/>
                        </Div>
                    )
                })}
            </Div>
            <CartSidebar/>
        </Div>
    )
}
