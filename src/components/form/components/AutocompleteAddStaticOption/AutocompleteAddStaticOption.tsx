import { FC, Fragment, forwardRef } from "react";
import { MenuItem, TextField, createFilterOptions } from "@mui/material";

import {
  StyledAddMenuItem,
  StyledAutocomplete,
} from "./AutocompleteAddStaticOption.style";
import NoData from "../NoData/NoData";
import Label from "../Label/Label";
import Error from "../Error/Error";

const filter = createFilterOptions();

const AutocompleteAddStaticOption: FC<any> = forwardRef(
  (
    {
      name = "autocomplete",
      label,
      addUrl,
      options = [],
      handleNewAdd = () => undefined,
      itemLabelKey = "value",
      getOptionLabel = (option: any) => option?.label,
      required,
      error,
      ...props
    },
    ref
  ) => {
    return (
      <Fragment>
        <Label htmlFor={name} required={required}>
          {label}
        </Label>
        <StyledAutocomplete
          id={name}
          {...props}
          noOptionsText={<NoData />}
          value={props?.value || null}
          options={options}
          filterOptions={(options, params) => {
            const filtered = filter(options, params);
            const { inputValue } = params;
            addUrl &&
              filtered.push({
                role: "button",
                selected: true,
                type: "new",
                label: "+ Add",
                value: inputValue,
              });
            return filtered;
          }}
          getOptionLabel={getOptionLabel}
          isOptionEqualToValue={(option: any, value: any) =>
            option?.[itemLabelKey] === value?.[itemLabelKey]
          }
          renderOption={(props, option: any) => {
            if (option?.type === "new") {
              return (
                <Fragment key={option?.[itemLabelKey]}>
                  {!options?.length && <NoData />}
                  <StyledAddMenuItem
                    {...props}
                    onClick={handleNewAdd(option)}
                    role="button"
                  >
                    + Add
                  </StyledAddMenuItem>
                </Fragment>
              );
            } else {
              return (
                <MenuItem {...props} key={option?.[itemLabelKey]}>
                  {option?.label}
                </MenuItem>
              );
            }
          }}
          renderInput={(params: any) => (
            <TextField inputRef={ref} {...params} error={!!error} />
          )}
          slotProps={{
            popper: {
              sx: {
                "& .MuiAutocomplete-listbox": {
                  paddingBottom: addUrl ? "0px" : "8px",
                },
              },
            },
          }}
        />
        <Error error={error} />
      </Fragment>
    );
  }
);

export default AutocompleteAddStaticOption;
