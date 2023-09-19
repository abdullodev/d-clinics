const formatANumber = (
  number: number | string = 0,
  decimalCount: number = 3,
  type: "round" | "floor" = "round",
  fixed: number = 6
) => {
  return Number(
    Math[type](
      Number(Number(number)?.toFixed(Math.max(fixed, decimalCount + 2))) *
        Math.pow(10, decimalCount)
    ) / Math.pow(10, decimalCount)
  );
};

export default formatANumber;
