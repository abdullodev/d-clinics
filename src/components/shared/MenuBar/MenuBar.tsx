import { Button } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { menuBarList } from "./Menu.list";
import { MenuBarStyled } from "./MenuBar.style";

const MenuBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (location: any, item: any) => {
    return location.pathname.includes(item.path);
  };

  return (
    <MenuBarStyled>
      {menuBarList.map((item, index) => {
        return (
          <Button
            key={index}
            onClick={() => {
              if (item.path !== location.pathname) {
                navigate(item.path!);
              }
            }}
            className={isActive(location, item) ? "active" : ""}
          >
            {item.icon}
            {item.title}
          </Button>
        );
      })}
    </MenuBarStyled>
  );
};

export default MenuBar;
