import Box from "@mui/material/Box";
import CircularProgress, {
  circularProgressClasses,
  CircularProgressProps,
} from "@mui/material/CircularProgress";
import { LoaderStyled } from "./Loader.style";

function FacebookCircularProgress(props: CircularProgressProps) {
  return (
    <Box sx={{ position: "relative" }}>
      <CircularProgress
        variant="determinate"
        sx={{
          color: (theme) =>
            theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
        }}
        size={40}
        thickness={4}
        {...props}
        value={100}
      />
      <CircularProgress
        variant="indeterminate"
        disableShrink
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
          animationDuration: "550ms",
          position: "absolute",
          left: 0,
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: "round",
          },
        }}
        size={40}
        thickness={4}
        {...props}
      />
    </Box>
  );
}

export default function Loader() {
  return (
    <LoaderStyled sx={{ flexGrow: 1 }}>
      <FacebookCircularProgress />
    </LoaderStyled>
  );
}
