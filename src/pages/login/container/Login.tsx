import { Box, Grid } from "@mui/material";
import { LoginImgStyled, LoginStyled } from "./Login.style";
import LoginForm from "../components/LoginForm";

const Login = () => {
  return (
    <LoginStyled container>
      <Grid item sm={8}>
        <LoginImgStyled>
          <img
            src="https://images.ctfassets.net/crutzrm61cpj/oqsgj6cdWWzQ2yvPgme2Q/1529c8ad78ac6c7aa6cb676c7d1f33ed/patient_and_doctor.png"
            alt=""
            width={400}
          />
          <p>Несколько кликов , чтобы начать 🛩️</p>
        </LoginImgStyled>
      </Grid>

      <Grid item sm={4}>
        <LoginForm />
      </Grid>
    </LoginStyled>
  );
};

export default Login;
