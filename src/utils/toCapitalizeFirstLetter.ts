const toCapitalizeFirstLetter = (sentence: string = "aa") => {
  return sentence[0].toUpperCase() + sentence.slice(1);
};

export default toCapitalizeFirstLetter;