export const sortData = (sortBy, mode, data) => {
  if (sortBy) {
    if (mode === "asc") {
      return data?.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return 1;
        }
        if (a[sortBy] > b[sortBy]) {
          return -1;
        }
        return 0;
      });
    } else if (mode === "dsc") {
      return data?.sort((a, b) => {
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        return 0;
      });
    }
  }
  return data;
};
