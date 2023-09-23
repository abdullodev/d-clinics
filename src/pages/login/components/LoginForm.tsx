import { Box, Button, Grid, TextField } from "@mui/material";
import { LoginFormStyled } from "./LoginForm.style";
import { ControlledInput } from "components";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const { control, handleSubmit } = useForm();
  const navigate = useNavigate();

  const submit = (data: any) => {
    if (!data.login || !data.password) {
      toast.warn("Please fill all fields");
    } else {
      localStorage.setItem("token", "token bor");
      navigate("/main");
    }
  };

  return (
    <LoginFormStyled>
      <form onSubmit={handleSubmit(submit)}>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <h2>D-Clicks</h2>
          </Grid>
          <Grid item sm={12}>
            <Box textAlign={"left"}>
              <ControlledInput name="login" control={control} label={"Login"} />
            </Box>
          </Grid>
          <Grid item sm={12}>
            <Box textAlign={"left"}>
              <ControlledInput
                name="password"
                control={control}
                label={"Password"}
                type="password"
              />
            </Box>
          </Grid>
          <Grid item sm={12}>
            <Button
              type="submit"
              variant="contained"
              style={{ width: "100%", height: "36px" }}
            >
              Login
            </Button>
          </Grid>
        </Grid>
      </form>
    </LoginFormStyled>
  );
};

export default LoginForm;
