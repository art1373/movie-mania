export function ratingCalc(rating) {
  let percentage;

  if (rating <= 5) {
    percentage = (rating / 5) * 100;
  } else {
    percentage = (rating / 10) * 100;
  }
  const starPercentage = `${Math.floor(percentage)}%`;
  return starPercentage;
}

export const Randmoize = (list) => {
  return list.sort(() => Math.random() - Math.random()).slice(0, 5);
};