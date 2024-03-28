export async function fetchData(path) {
  try {
    const response = await fetch(
      `https://tap-web-1.herokuapp.com/topics/${path}`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
}
