import styles from "./search-sort-filter.module.css";

export function SearchSortFilter({ children }) {
  return <form className={styles.searchSortFilter}>{children}</form>;
}
