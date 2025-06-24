export interface CategoryData {
    yaTraceId: string;
    offerId: string;
    layoutId: string;
    categoryGroup: {
        id: string;
        title: string;
    };
    categories: Category[];
    products: Product[];
}

export interface Category {
    id: string;
    deepLink: string;
    layout: Layout;
    index: number;
    value: CategoryValue;
    items: Item[];
    discountInformers: any[];
    banners: any[];
}

export interface CategoryValue {
    id: string;
    deepLink: string;
    title: string;
    available: boolean;
    itemMeta: {
        $titleColor: string;
        $placeholderColor: string;
        $isHideTitleOnTile: boolean;
        skipInCaasPromo: boolean;
        isRecipesCategory: boolean;
        disableDiscountsCarousel: boolean;
    };
    type: string;
    viewType: string;
    imageSize: [number, number];
    hideTitle: boolean;
    backgroundColor: string;
}

export interface Item {
    id: string;
    deepLink?: string;
    layout: Layout;
    index: number;
    value: ProductValue;
    items: any[];
    discountInformers: any[];
    banners: any[];
}

export interface Layout {
    width: number;
    height: number;
    type: string;
    id: string;
    isHero: boolean;
}

export interface ProductValue {
    id: string;
    deepLink?: string;
    title: string;
    longTitle: string;
    amount: string;
    available: boolean;
    quantityLimit: string;
    withVideo: boolean;
    stickers: any[];
    options: {
        docsRequired: boolean;
        quantityType?: string;
    };
    snippetImage: {
        url: string;
        substrated: boolean;
    };
    recipe?: {
        cookTimeMinutes: number;
        activeCookTimeMinutes: number;
        type: string;
    };
    type: string;
    viewType: string;
    imageSize: [number, number];
    hideTitle: boolean;
    backgroundColor: string;
}

export interface Product {
    type: string;
    id: string;
    isMarkdown: boolean;
    deepLink?: string;
    title: string;
    longTitle: string;
    stickers: any[];
    amount: string;
    snippetImage: {
        url: string;
        substrated: boolean;
    };
    isFavorite: boolean;
    pricing: {
        amountPrice: number;
        amountPriceSigned: string;
        price: number;
        priceSigned: string;
    };
    currentPrice: number;
    currentPriceSigned: string;
    isExpiring: boolean;
    adult: boolean;
    requiredRestriction: null;
    available: boolean;
    quantityLimit: string;
    maxAmount: number;
    baseStep: number;
    incrementStep: number;
    isLowStock: boolean;
    productTags: any[];
    recipe?: {
        cookTimeMinutes: number;
        activeCookTimeMinutes: number;
    };
    rewardedProductSamplingInfos: any[];
    withVideo: boolean;
    options: {
        docsRequired: boolean;
        quantityType?: string;
    };
    children: any[];
}