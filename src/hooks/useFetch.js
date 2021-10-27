import { useEffect, useState } from "react";

export const useFetch = () => {
  const [data, setData] = useState({ data: null, error: null });

  const url = "https://dev-cognitive-dashboard-server.herokuapp.com/techtest";

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData({ data, error: null });
    } catch (error) {
      setData({ data: null, error });
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data;
};
