import React from "react";
import { useFetch } from "./hooks/useFetch";

const TekalApp = () => {
  const { data } = useFetch();
  console.log(data);
  return <div></div>;
};

export default TekalApp;
