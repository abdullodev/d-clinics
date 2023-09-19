import { Fragment, FC } from "react";
import { Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

import { Label, Error, NumberInput } from "../components";
import { IControlledType } from "../type/ControlledInterface.type";

const ControlledNumberInput: FC<
  IControlledType<TextFieldProps & { decimalScale?: number | undefined }>
> = ({
  defaultValue,
  label,
  name = "custom-input",
  rules = {},
  onChange,
  control,
  decimalScale = 3,
  ...props
}) => {
  const inputChangeHandler =
    (formChangeHandler: (...event: any[]) => void) =>
    (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
      formChangeHandler(event);
      if (onChange) {
        onChange(event);
      }
    };

  return (
    <Controller
      name={name}
      control={control}
      rules={{ ...rules }}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <Fragment>
          <Label htmlFor={name} required={rules?.required}>
            {label}
          </Label>
          <TextField
            id={name}
            fullWidth
            {...props}
            {...field}
            inputRef={ref}
            InputProps={{
              inputComponent: NumberInput as any,
              inputProps: { decimalScale },
            }}
            onChange={inputChangeHandler(field?.onChange)}
            error={!!error}
          />
          <Error error={error} />
        </Fragment>
      )}
      defaultValue={defaultValue}
    />
  );
};

export default ControlledNumberInput;
