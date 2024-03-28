function ApplyFiltersAndSort({ data, filter, sort }) {
  let filteredData =
    filter === "Default" || filter === ""
      ? data.slice()
      : data.filter((item) => item.category === filter);

  if (sort !== "Default" && sort !== "") {
    filteredData = filteredData.sort((a, b) => a[sort].localeCompare(b[sort]));
  }

  return filteredData;
}

export default ApplyFiltersAndSort;
