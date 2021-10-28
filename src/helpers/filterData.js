export const filterData = (filterBy, data) => {
  if (filterBy) {
    if (filterBy === "images") {
      return data?.filter((item) => !item.type && item);
    } else if (filterBy === "videos") {
      return data?.filter((item) => item.type && item);
    }
  }
  return [...data];
};
