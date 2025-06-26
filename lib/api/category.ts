"use server"

import {fetcher} from "@/lib/api/fetcher";

import {CategoryData} from "@/shared/api/hooks/use-category/use-category.types";

export async function getCategory(): Promise<CategoryData> {
    const res = await fetcher("category");

    return res.json()
}