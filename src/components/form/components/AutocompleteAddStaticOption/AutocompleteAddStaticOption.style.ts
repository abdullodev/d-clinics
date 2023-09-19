import { Autocomplete, MenuItem, styled } from "@mui/material";

export const StyledAutocomplete = styled(Autocomplete)({});

export const StyledAddMenuItem = styled(MenuItem)(({ theme }) => ({
  justifyContent: "right !important",
  background: "#f3f3f3",
  fontWeight: 600,
  color: theme?.palette?.primary?.main,
  paddingTop: "12px !important",
  paddingBottom: "12px !important",
}));
