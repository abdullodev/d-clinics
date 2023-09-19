import { FC, Fragment } from "react";
import { Controller } from "react-hook-form";
import { TextField, TextFieldProps } from "@mui/material";

import { Label, Error } from "../components";
import { IControlledType } from "../type/ControlledInterface.type";
import { ControlledInputStyled } from "./ControlledInput.style";

const ControlledInput: FC<IControlledType<TextFieldProps>> = ({
  defaultValue,
  label,
  name = "custom-input",
  rules = {},
  onChange,
  control,
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
      rules={rules}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <ControlledInputStyled>
          <Label htmlFor={name} required={rules?.required}>
            {label}
          </Label>
          <TextField
            id={name}
            fullWidth
            {...props}
            {...field}
            inputRef={ref}
            error={!!error}
            value={field?.value || props?.value || ""}
            onChange={inputChangeHandler(field?.onChange)}
          />
          <Error error={error} />
        </ControlledInputStyled>
      )}
      defaultValue={defaultValue}
    />
  );
};

export default ControlledInput;
