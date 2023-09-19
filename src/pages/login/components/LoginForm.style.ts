import styled from "styled-components";
import { Box } from "@mui/material";

export const LoginFormStyled = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: #ffffff;

  form {
    width: 70%;
    h2 {
      text-align: left;
    }

    .MuiTextField-root {
      width: 100% !important;
      .MuiOutlinedInput-root {
        height: 36px !important;
      }
    }
  }
`;
