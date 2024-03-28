import { useParams } from "react-router-dom";
import { SubtopicsList } from "./SubtopicsList";
import { CreateDetails } from "./createDetails";
import { DetailsCard } from "./detailsCard";
import { DetailsContainer } from "./detailsContainer";
import { useEffect, useState } from "react";
import { fetchData } from "../../shared/components/fetch-url";
import { LoadingText } from "../../shared/components/loadingText";
import { DisplayLoadingError } from "../../shared/components/loadingError";
import { useFavouritesContext } from "../../context/favouritesContext";

export function Details() {
  const { id } = useParams();
  const [details, setDetails] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();

  const { favButtonText } = useFavouritesContext();

  useEffect(() => {
    favButtonText(id);
  }, []);

  useEffect(() => {
    const fetchDataAsync = async () => {
      try {
        const fetchedData = await fetchData(`details/${id}`);
        setDetails(fetchedData);
      } catch (error) {
        setError(error.message);
      }
      setLoading(false);
    };
    fetchDataAsync();
  }, []);

  if (loading) {
    return <LoadingText />;
  }

  if (error) {
    return <DisplayLoadingError />;
  }
  return (
    <DetailsContainer>
      <CreateDetails details={details} />
      <DetailsCard details={details} />
      <SubtopicsList topic={details.topic} subtopics={details.subtopics} />
    </DetailsContainer>
  );
}
