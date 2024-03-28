import React from "react";
import styles from "./sortFilterSelect.module.css";

export function SortFilterSelect({ id, label, options, onChange }) {
  return (
    <div className={styles.sortFilter}>
      <label>{label}</label>
      <select id={id} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
