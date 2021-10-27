const fetchData = async () => {
  const url = "https://dev-cognitive-dashboard-server.herokuapp.com/techtest";

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchData;
