import { styled } from "@mui/material";

export const StyledError = styled("div")(({ theme }) => ({
  display: "flex",
  background: "#EBEEF2",
  borderRadius: theme?.shape?.borderRadius,
  padding: "8px 12px",
  marginTop: "10px",
  boxSizing: "border-box",
}));
