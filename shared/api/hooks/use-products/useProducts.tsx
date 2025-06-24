import type { ProductType } from "./use-products.types";
import useSWR from "swr";

export function useProducts() {
  const { data, ...rest } = useSWR<ProductType[]>("products");

  return {
    products: data,
    ...rest,
  };
}
