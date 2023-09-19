import { numericFormatter } from "react-number-format";

const formatAPrice = (
  number: string | number | undefined,
  decimalScale = 3,
  fixed = 10,
  thousandSeparator = " "
) => {
  return numericFormatter(
    String(Number(Number(number)?.toFixed(Math.max(fixed, decimalScale + 2)))),
    {
      decimalScale: decimalScale,
      thousandSeparator: thousandSeparator,
    }
  );
};

export default formatAPrice;
