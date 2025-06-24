import styles from "./catalog-sidebar.module.css";
import {useCategory} from "@shared/api/hooks/use-category/use-category.ts";

export function CatalogSidebar() {
    const {category} = useCategory()

    return (
        <aside className={styles["catalog-sidebar"]}>
            <ul>
                {category?.categories.map((categoryItem) => {
                    return (
                        <li>{categoryItem.value.title}</li>
                    )
                })}
            </ul>
        </aside>
    );
}
