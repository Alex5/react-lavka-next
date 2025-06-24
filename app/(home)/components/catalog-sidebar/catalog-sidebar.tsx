import styles from "./catalog-sidebar.module.css";
import {useCategory} from "@/shared/api/hooks/use-category/use-category";

export function CatalogSidebar() {
    const {category} = useCategory()

    return (
        <aside className={styles["catalog-sidebar"]}>
            <ul>
                {category?.categories.map((categoryItem) => {
                    return (
                        <li key={categoryItem.id}>{categoryItem.value.title}</li>
                    )
                })}
            </ul>
        </aside>
    );
}
