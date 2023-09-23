import { Grid, Box } from "@mui/material";
import { styled } from "styled-components";

export const LoginStyled = styled(Grid)`
  min-height: 100vh;
`;
export const LoginImgStyled = styled(Box)`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  flex-direction: column;

  p {
    font-size: 18px;
    font-weight: 600;
    color: #515151;
  }
`;
