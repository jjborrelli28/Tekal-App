export const scoresColors = (score) => {
  if (score >= 95) {
    return "#00ff00";
  } else if (score >= 90) {
    return "#46ff00";
  } else if (score >= 85) {
    return "#8cff00";
  } else if (score >= 80) {
    return "#d2ff00";
  } else if (score >= 75) {
    return "#ffeb00";
  } else if (score >= 70) {
    return "#ffa500";
  } else if (score >= 65) {
    return "#ff5f00";
  } else {
    return "#ff1a01";
  }
};
