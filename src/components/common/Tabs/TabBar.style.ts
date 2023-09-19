import { Box } from "@mui/material";
import styled from "styled-components";

export const TabBarStyled = styled(Box)`
  width: 100%;
  .MuiTabPanel-root {
    padding: 0;
    margin-top: 12px;
  }
  & .MuiBox-root {
    border: none;

    .MuiTabs-flexContainer {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 30px;

      & .MuiTab-root {
        font-size: 15px;
        border-radius: 5px;
        padding: 0 30px;
        background-color: #ffffff;
        border: 1px solid rgba(90, 141, 238, 1);
        color: rgba(90, 141, 238, 1);
        text-transform: inherit;
        &.Mui-selected {
          background-color: rgba(90, 141, 238, 1);
          color: #ffffff;
        }
      }
    }
  }

  .MuiTabs-indicator {
    display: none !important;
  }
`;
