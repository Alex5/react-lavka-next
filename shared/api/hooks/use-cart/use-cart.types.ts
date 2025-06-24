import type { ProductType } from "../use-products/use-products.types";

export type CartItem = {
  product: ProductType;
  quantity: number;
};

export type CartType = Record<string, CartItem>;
