import { lazy, Suspense, useEffect, useState } from "react";
import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
  Navigate,
} from "react-router-dom";
import * as Types from "./AppTypes";
import * as constants from "./constants/constants";

const Home = lazy(() => import("./pages/Home"));

const initRoutes: Types.Routes[] = [
  {
    component: (
      <Suspense fallback={constants.FALLBACK_MESSAGE}>
        <Home />
      </Suspense>
    ),
    path: constants.HOME,
  },
];

const routes: Types.Routes[] = [];

initRoutes.forEach((initRoute) => {
  routes.push(initRoute);
});

const App = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const onUrlChange = (location: Location) => {
    setIsNavbarVisible(location.pathname !== "/componentTester");
  };

  return (
    <Router>
      <ListenUrl onUrlChange={onUrlChange} />
      {/* {isNavbarVisible && <NavBar />} */}
      <Routes>
        {routes.map((route) => (
          <Route path={route.path} key={route.path} element={route.component} />
        ))}
        <Route path="*" element={<Navigate to={constants.HOME} replace />} />
      </Routes>
    </Router>
  );
};

const ListenUrl = (props: any) => {
  const location = useLocation();
  const { onUrlChange } = props;

  useEffect(() => {
    onUrlChange(location);
  }, [location.pathname]);

  return <></>;
};

export default App;
