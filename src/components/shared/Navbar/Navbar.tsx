import { Box } from "@mui/material";
import Badge from "@mui/material/Badge";
import Logo from "../../../assets/Logo.png";
import {
  NavbarBodyStyled,
  NavbarContainerStyled,
  NavbarHeaderStyled,
  NavbarImgStyled,
  NavbarUserStyled,
} from "./Navbar.style";

import IMG from "./assets/profile-banner 1.png";
import IMG1 from "./assets/1 1.png";

const shapeStyles = { width: 40, height: 40 };
const shapeCircleStyles = { borderRadius: "50%" };
const circle = (
  <Box component="span" sx={{ ...shapeStyles, ...shapeCircleStyles }}>
    <img
      src={IMG1}
      alt=""
      style={{
        width: "100%",
        height: "100%",
        objectFit: "cover",
        borderRadius: "50%",
      }}
    />
  </Box>
);

const Navbar = () => {
  return (
    <NavbarContainerStyled>
      <NavbarHeaderStyled>
        <Box>
          <img src={Logo} alt="" className="logo" />
        </Box>
        <Box>
          <Badge
            overlap="circular"
            badgeContent=" "
            variant="dot"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
          >
            {circle}
          </Badge>
        </Box>
      </NavbarHeaderStyled>

      <NavbarBodyStyled>
        <NavbarImgStyled>
          <img src={IMG} alt="profile" />
        </NavbarImgStyled>
        <NavbarUserStyled>
          <div className="img_box">
            <img src={IMG1} alt="" />
          </div>
          <h3>Камрон Хамроевич Олимов</h3>
        </NavbarUserStyled>
      </NavbarBodyStyled>
    </NavbarContainerStyled>
  );
};

export default Navbar;
