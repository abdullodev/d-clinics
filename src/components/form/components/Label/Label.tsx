import { FC } from "react";
import { FormLabel } from "@mui/material";

import isRequired from "components/form/hooks/isRequired";

import { ILabelType } from "./Label.type";

const Label: FC<ILabelType> = ({ htmlFor, required, children }) => {
  return (
    <FormLabel
      required={isRequired(required) || false}
      htmlFor={htmlFor}
      sx={{
        fontSize: "13px",
        color: "rgba(103, 119, 136, 1)",
      }}
    >
      {children}
    </FormLabel>
  );
};

export default Label;
