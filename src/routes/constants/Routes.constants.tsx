import { lazy } from "react";

const Main = lazy(() => import("pages/main/container"));
const Stock = lazy(() => import("pages/stock/container"));
const Pharmacies = lazy(() => import("pages/pharmacies/container"));
const Documents = lazy(() => import("pages/documents/container"));
const Dealer = lazy(() => import("pages/dealer/container"));
const Statistics = lazy(() => import("pages/statistics/container"));

interface IRoutes {
  key: string;
  path: string;
  element: any;
}
export const routes: IRoutes[] = [
  { key: "main", path: "/main", element: <Main /> },
  { key: "home", path: "/sklad", element: <Stock /> },
  { key: "pharmacies", path: "/pharmacies", element: <Pharmacies /> },
  { key: "documents", path: "/documents", element: <Documents /> },
  { key: "dealer", path: "/dealer", element: <Dealer /> },
  { key: "statistics", path: "/statistics", element: <Statistics /> },
];
