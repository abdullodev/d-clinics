import { memo } from "react";
import { Box, Typography } from "@mui/material";

import { NoRows } from "../../icons";

const NoData = () => {
  return (
    <Box paddingY="20px">
      <NoRows />
      <Typography textAlign="center" marginTop="10px">
        No data
      </Typography>
    </Box>
  );
};

export default memo(NoData);
