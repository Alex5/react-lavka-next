import type { ReactNode } from "react";

import styles from "./grid.module.css";

export function Grid({ children }: { children: ReactNode }) {
  return <section className={styles.grid}>{children}</section>;
}
