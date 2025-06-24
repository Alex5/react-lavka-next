import {ProductList} from "./components/product-list/product-list";
import {Text} from "@/shared/ui/text/Text";;
import type {CategoryData} from "@/shared/api/hooks/use-category/use-category.types";
import {fetcher} from "@/shared/api/fetcher";
import { CartSidebar } from "./components/cart-sidebar/cart-sidebar";

export default async function RootPage() {
    const category = await fetcher<CategoryData>('category');

    return (
        <div className="flex">
            <div className="flex flex-col gap-2">
                {category?.categories?.[0]?.items?.map((categoryItem) => {
                    const products = categoryItem.items?.map((productItem) => ({
                        id: productItem.value.id,
                        currentPrice: 0,
                        longTitle: productItem.value.longTitle,
                        currentPriceSigned: "",
                        snippetImage: productItem.value.snippetImage,
                    }))

                    return (
                        <div key={categoryItem.id} className="flex flex-col gap-2">
                            <Text fontSize="title4" fontWeight="medium">{categoryItem.value.title}</Text>
                            <ProductList products={products}/>
                        </div>
                    )
                })}
            </div>
            <CartSidebar/>
        </div>
    )
}
