import { FC } from "react";

import { IErrorType } from "./Error.type";
import { StyledError } from "./Error.style";
import { Typography } from "@mui/material";
import InfoIcon from "./InfoIcon";

const Error: FC<IErrorType> = ({ error }) => {
  return error ? (
    <StyledError>
      <InfoIcon />
      <Typography fontSize="13px" color="error" marginLeft="10px">
        {error?.message || "Required field"}
      </Typography>
    </StyledError>
  ) : (
    <></>
  );
};

export default Error;
