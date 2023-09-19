import StockComing from "./StockComing";
import StockConsumption from "./StockConsumption";
import StockMedicines from "./StockMedicines";

export const stockTabs = [
  {
    label: "Приход",
    value: "1",
  },
  {
    label: "Расход",
    value: "2",
  },
  {
    label: "Медикаменты",
    value: "3",
  },
];

export const stockTabsPanel = [
  {
    value: "1",
    children: <StockComing />,
  },
  {
    value: "2",
    children: <StockConsumption />,
  },
  {
    value: "3",
    children: <StockMedicines />,
  },
];
