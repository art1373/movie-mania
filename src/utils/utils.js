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

export const numberFormatter = (number, digits) => {
  const symbolArray = [
    { value: 1, symbol: "" },
    { value: 1e3, symbol: "K" },
    { value: 1e6, symbol: "M" },
    { value: 1e9, symbol: "B" },
  ];
  const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
  let result = "";

  for (let i = 0; i < symbolArray.length; i++) {
    if (number >= symbolArray[i].value) {
      result =
        (number / symbolArray[i].value).toFixed(digits).replace(regex, "$1") +
        symbolArray[i].symbol;
    }
  }
  return result;
};

export const formatMovieTitle = (title) => {
  if (/\d/.test(title)) return null;
  let titleStr = title?.toLowerCase();
  return titleStr.replace(/ /g, "-");
};
