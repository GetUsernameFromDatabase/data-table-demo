import { Route, type RouteProps } from "react-router-dom";

import { LayoutMain } from "@/layouts/layout-main";
import { MainPage } from "@/pages/main-page";
import { NoPage } from "@/pages/no-page";

export const mainLayoutRoutes: Readonly<RouteProps[]> = [
  { path: "/", element: <MainPage /> },
  { path: "*", element: <NoPage /> },
];

export const mainRoutes: Readonly<RouteProps[]> = [
  {
    path: "/",
    element: <LayoutMain />,
    children: mainLayoutRoutes.map((route, index) => (
      <Route key={index} {...route} />
    )),
  },
];

export const useNavigationInfo = () => {
  return [{ to: "/", text: "Home" }];
};
