import { FC } from "react";
import { Controller } from "react-hook-form";

import { Autocomplete } from "../components";
import { ControlledAutocompleteStyled } from "./ControlledAutocomplete.style";

const ControlledAutocomplete: FC<any> = ({
  defaultValue,
  name,
  onChange,
  control,
  rules,
  options = [],
  error,
  saveValueAfterTheChange = false,
  ...props
}) => {
  const handleChangeAutocomplete =
    (fieldChange: (...event: any[]) => void) =>
    async (event: any, value: any) => {
      if (saveValueAfterTheChange && onChange) {
        await onChange(value, event);
      } else {
        fieldChange(value);
        if (onChange) {
          onChange(value, event);
        }
      }
    };

  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => (
        <ControlledAutocompleteStyled>
          <Autocomplete
            {...props}
            {...field}
            onChange={handleChangeAutocomplete(field?.onChange)}
            required={rules?.required}
            options={options}
            error={error}
          />
        </ControlledAutocompleteStyled>
      )}
      defaultValue={defaultValue}
    />
  );
};

export default ControlledAutocomplete;
