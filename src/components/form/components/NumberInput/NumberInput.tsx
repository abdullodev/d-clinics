import { forwardRef } from "react";
import { NumericFormat, NumericFormatProps } from "react-number-format";
import { formatANumber } from "services/format";

const NumberInput = forwardRef<NumericFormatProps, any>(
  function NumericFormatCustom(
    {
      allowNegative = false,
      allowedDecimalSeparators = [","],
      thousandSeparator = " ",
      onChange,
      decimalScale,
      value,
      ...props
    },
    ref
  ) {
    const handleInputKeyDown = (event: any) => {
      let value = String(
        event?.target?.value?.slice(0, event?.target?.selectionStart) +
          event?.key +
          event?.target?.value?.slice(event?.target?.selectionStart)
      );
      if (
        (value?.startsWith("00") && event?.key === "0") ||
        (event?.target?.value?.length &&
          event?.key === "0" &&
          event?.target?.selectionStart === 0)
      ) {
        event?.preventDefault();
      }
    };

    return (
      <NumericFormat
        {...props}
        value={value || ""}
        allowNegative={allowNegative}
        allowedDecimalSeparators={allowedDecimalSeparators}
        thousandSeparator={thousandSeparator}
        getInputRef={ref}
        decimalScale={decimalScale}
        onKeyDown={handleInputKeyDown}
        onValueChange={(values) => {
          onChange({
            target: {
              name: props.name,
              value: formatANumber(values.value),
            },
          });
        }}
      />
    );
  }
);

export default NumberInput;
