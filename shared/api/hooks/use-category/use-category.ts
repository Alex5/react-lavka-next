"use client"

import useSWR from "swr";
import type {CategoryData} from "@/shared/api/hooks/use-category/use-category.types.ts";

export function useCategory() {
    const {data: category, ...rest} = useSWR<CategoryData>("category");

    return {
        category,
        ...rest,
    }
}