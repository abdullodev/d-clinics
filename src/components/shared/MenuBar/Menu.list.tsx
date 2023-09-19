import { ReactElement } from "react";
import HomeIcon from "@mui/icons-material/Home";
import FeedIcon from "@mui/icons-material/Feed";
import AddCardIcon from "@mui/icons-material/AddCard";
import FolderCopyIcon from "@mui/icons-material/FolderCopy";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import StackedBarChartIcon from "@mui/icons-material/StackedBarChart";

interface IMenuBarList {
  id?: string;
  path?: string;
  icon?: ReactElement;
  title?: string;
}
export const menuBarList: IMenuBarList[] = [
  {
    id: "main",
    path: "/main",
    icon: <HomeIcon />,
    title: "Главная",
  },
  {
    id: "sklad",
    path: "/sklad",
    icon: <FeedIcon />,
    title: "Склады",
  },
  {
    id: "pharmacies",
    path: "/pharmacies",
    icon: <AddCardIcon />,
    title: "Аптеки",
  },
  {
    id: "dealer",
    path: "/dealer",
    icon: <FolderCopyIcon />,
    title: "Дилеры",
  },
  {
    id: "documents",
    path: "/documents",
    icon: <ReceiptLongIcon />,
    title: "Документы",
  },
  {
    id: "statistics",
    path: "/statistics",
    icon: <StackedBarChartIcon />,
    title: "Статистика",
  },
];
