export const toggleIcon = (statusAsc, statusDsc) => {
  if (statusAsc) {
    return "▲";
  } else if (statusDsc) {
    return "▼";
  } else {
    return "○";
  }
};
