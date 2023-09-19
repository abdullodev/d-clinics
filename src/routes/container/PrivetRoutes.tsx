import { Suspense, Fragment, useEffect } from "react";
import { Loader, MenuBar, Navbar } from "components";
import {
  Route,
  Routes as Switch,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { routes } from "./../constants/Routes.constants";

const Routes = () => {
  return (
    <Switch>
      {routes.map((route, index) => {
        return (
          <Fragment key={index}>
            <Route {...route} />
          </Fragment>
        );
      })}
    </Switch>
  );
};

const PrivetRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <Suspense fallback={<Loader />}>
      <Navbar />
      <MenuBar />
      <Suspense fallback={<Loader />}>
        <Routes />
      </Suspense>
    </Suspense>
  );
};

export default PrivetRoutes;
