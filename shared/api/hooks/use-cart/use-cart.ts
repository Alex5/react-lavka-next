"use client"

import useSWR, { useSWRConfig, type MutatorOptions } from "swr";
import { fetcher } from "@/shared/api/fetcher";
import type { CartType } from "./use-cart.types";
import { useAuth, type YandexUserInfo } from "../use-auth/use-auth";

export function useCart(args: {fallbackData?: CartType} = {}) {
  const {fallbackData} = args;

  const { user } = useAuth();

  const { cache } = useSWRConfig();

  const key = ["cart", user] as const;

  const { data, mutate, ...rest } = useSWR<
    CartType,
    unknown,
    readonly ["cart", YandexUserInfo | undefined]
  >(key, ([key]) =>
    user
      ? fetcher(key, {
          credentials: "include",
        })
      : Promise.resolve(cache.get("cart")?.data), {
        fallbackData
      }
  );

  const customMutation = ({
    fetcher,
    options,
  }: {
    fetcher: () => Promise<CartType | undefined>;
    options: MutatorOptions;
  }) => {
    if (user) {
      return mutate(fetcher, options);
    } else {
      return mutate(options.optimisticData, options);
    }
  };

  return {
    cart: data,
    data,
    mutate: customMutation,
    ...rest,
  };
}
