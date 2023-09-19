import styled from "styled-components";
import { Box } from "@mui/material";

export const MenuBarStyled = styled(Box)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 30px 0;
  flex-wrap: wrap;

  .MuiButton-root {
    padding: 7px 14px;
    border-radius: 6px;
    background-color: inherit;
    color: #516377;
    font-size: 15px;
    text-transform: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    &.active {
      background-color: #5a8dee;
      color: #ffffff;
    }
  }
`;
