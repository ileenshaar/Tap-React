import styles from "./search.module.css";

export function SearchBar({ value, onChange }) {
  return (
    <div className={styles.searchBar}>
      <ion-icon name="search-outline"></ion-icon>
      <input
        value={value}
        onChange={onChange}
        id="searchInput"
        type="text"
        placeholder="Search the website..."
      />
    </div>
  );
}
