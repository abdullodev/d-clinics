import { Box } from "@mui/material";
import styled from "styled-components";

export const NavbarContainerStyled = styled(Box)`
  /* padding: 20px; */
`;

export const NavbarHeaderStyled = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 49px;
  padding: 0 15px;

  .MuiBadge-badge {
    width: 10px;
    height: 10px;
    z-index: 99;
    display: block;
    border-radius: 50%;
    background-color: #0fd80f;
  }

  .logo {
    cursor: pointer;
  }
`;
export const NavbarBodyStyled = styled(Box)`
  width: 100%;
  height: 354px;
  margin-top: 50px;
  -webkit-box-shadow: 0px 2px 5px 0px rgba(212, 208, 212, 1);
  -moz-box-shadow: 0px 2px 5px 0px rgba(212, 208, 212, 1);
  box-shadow: 0px 2px 5px 0px rgba(212, 208, 212, 1);
`;

export const NavbarImgStyled = styled(Box)`
  width: 100%;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const NavbarUserStyled = styled(Box)`
  position: relative;
  width: 100%;
  height: calc(354px - 250px);
  background-color: #ffffff;

  .img_box {
    img {
      position: absolute;
      top: -50px;
      left: 20px;
      width: 120px;
      height: 120px;
    }
  }

  h3 {
    color: #677788;
    font-size: 22px;
    position: absolute;
    top: 0px;
    left: 200px;
  }
`;
