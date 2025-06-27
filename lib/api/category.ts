import {fetcher} from "@/lib/api/fetcher";

import {CategoryData} from "@/shared/api/hooks/use-category/use-category.types";

export async function getCategory(): Promise<{ category: CategoryData | undefined }> {
    const res = await fetcher("category");

    return {category: await res.json()}
}