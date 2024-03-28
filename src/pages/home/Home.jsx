import { LayoutContainer } from "../../shared/components/layoutContainer";
import { SearchSortFilter } from "./search-sort-filter";
import { Cards } from "./cards";
import { fetchData } from "../../shared/components/fetch-url";
import React, { useId, useRef } from "react";
import { useEffect, useState, useMemo } from "react";
import { LoadingText } from "../../shared/components/loadingText";
import { DisplayLoadingError } from "../../shared/components/loadingError";
import { SearchBar } from "./search";
import { DropDown } from "./dropdownMenus/DropDown";
import { SortFilterSelect } from "./dropdownMenus/sortFilterSelect";
import ApplyFiltersAndSort from "../../shared/components/filterAndSort";
import { useDebouncedTimeout } from "../../shared/components/customTimeout";

const sortOptions = [
  { label: "Default", value: "Default" },
  { label: "Author", value: "name" },
  { label: "Topic", value: "topic" },
];

export function Home() {
  const sortId = useId();
  const filterId = useId();

  const initialState = {
    webTopics: null,
    loading: true,
    error: null,
    searchInput: "",
    filter: "",
    sort: "",
    searchedData: null,
    filteredAndSortedData: null,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchData("list");
        setState((state) => ({ ...state, webTopics: fetchedData }));
      } catch (error) {
        setState((state) => ({ ...state, error: error.message }));
      }
      setState((state) => ({ ...state, loading: false }));
    };
    fetchDataAsync();
  }, []);

  const fetchDataDebounced = useDebouncedTimeout(async () => {
    const fetchedData = await fetchData(`list?phrase=${state.searchInput}`);
    setState((prevState) => ({ ...prevState, searchedData: fetchedData }));
  }, 300);

  useEffect(() => {
    fetchDataDebounced();
    //clearTimeout(fetchDataDebounced.timerId)
  }, [state.searchInput]);

  useEffect(() => {
    if (state.searchedData) {
      setState({
        ...state,
        filteredAndSortedData: ApplyFiltersAndSort({
          data: state.searchedData,
          filter: state.filter,
          sort: state.sort,
        }),
      });
    }
  }, [state.searchedData, state.filter, state.sort]);

  const getCategories = (webTopics) => {
    if (!webTopics) return ["Default"];
    const categories = new Set(webTopics.map((webTopic) => webTopic.category));
    return ["Default", ...categories];
  };

  const filterOptions = useMemo(
    () =>
      getCategories(state.webTopics).map((cat) => ({
        value: cat,
        label: cat,
      })),
    [state.webTopics]
  );

  if (state.loading) {
    return <LoadingText />;
  }

  if (state.error) {
    return <DisplayLoadingError />;
  }

  return (
    <>
      <LayoutContainer>
        <SearchSortFilter>
          <SearchBar
            value={state.searchInput}
            onChange={(event) => {
              setState({ ...state, searchInput: event.target.value });
            }}
          />
          <DropDown>
            <SortFilterSelect
              id={sortId}
              label={"Sort By"}
              options={sortOptions}
              onChange={(event) => {
                setState({ ...state, sort: event.target.value });
              }}
            />
            <SortFilterSelect
              id={filterId}
              label={"Filter By"}
              options={filterOptions}
              onChange={(event) =>
                setState({ ...state, filter: event.target.value })
              }
            />
          </DropDown>
        </SearchSortFilter>{" "}
        <Cards
          courses={
            state.filteredAndSortedData
              ? state.filteredAndSortedData
              : state.webTopics
          }
        />
      </LayoutContainer>
    </>
  );
}
