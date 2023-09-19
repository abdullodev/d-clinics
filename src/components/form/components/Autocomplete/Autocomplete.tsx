import { FC, Fragment, forwardRef } from "react";
import { TextField, Autocomplete as MuiAutocomplete } from "@mui/material";

import NoData from "../NoData/NoData";
import Label from "../Label/Label";
import Error from "../Error/Error";

const Autocomplete: FC<any> = forwardRef(
  (
    { name = "autocomplete", label, options = [], required, error, ...props },
    ref
  ) => {
    return (
      <Fragment>
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
        <MuiAutocomplete
          id={name}
          {...props}
          noOptionsText={<NoData />}
          value={props?.value || null}
          options={options}
          renderInput={(params: any) => (
            <TextField inputRef={ref} {...params} error={!!error} />
          )}
        />
        <Error error={error} />
      </Fragment>
    );
  }
);

export default Autocomplete;
