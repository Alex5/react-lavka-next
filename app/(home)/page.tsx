import {ProductList} from "./components/product-list/product-list";
import {Text} from "@/shared/ui/text/Text";
import { CartSidebar } from "./components/cart-sidebar/cart-sidebar";
import {getCategory} from "@/lib/api/category";

export default async function RootPage() {
    const {category} = await getCategory();

    return (
        <div style={{display: "flex", padding: '20px 0'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '20px'}} >
                {category?.categories?.[0]?.items?.map((categoryItem) => {
                    if (categoryItem.index === 0) return null;

                    const products = categoryItem.items?.map((productItem) => ({
                        id: productItem.value.id,
                        currentPrice: 0,
                        longTitle: productItem.value.longTitle,
                        currentPriceSigned: "",
                        snippetImage: productItem.value.snippetImage,
                    }))

                    return (
                        <div key={categoryItem.id} style={{display: 'flex', flexDirection: 'column', gap: '20px'}}>
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
