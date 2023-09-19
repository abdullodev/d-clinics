import { FC, Fragment } from "react";
import { Controller } from "react-hook-form";
import { Select, MenuItem } from "@mui/material";

import { Label, Error } from "../components";
import NoData from "../components/NoData/NoData";

const ControlledSelect: FC<any> = ({
  defaultValue,
  label,
  name,
  rules,
  options = [],
  control,
  ...props
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field: { ref, ...field }, fieldState: { error } }) => (
        <Fragment>
          <Label htmlFor={name} required={rules?.required}>
            {label}
          </Label>
          <Select
            id={name}
            fullWidth
            {...props}
            {...field}
            value={field?.value || ""}
            inputRef={ref}
            error={!!error}
          >
            {options?.length ? (
              options?.map((option: any, index: number) => (
                <MenuItem value={option?.value} key={option?.value || index}>
                  {option?.label}
                </MenuItem>
              ))
            ) : (
              <NoData />
            )}
          </Select>
          <Error error={error} />
        </Fragment>
      )}
    />
  );
};

export default ControlledSelect;
