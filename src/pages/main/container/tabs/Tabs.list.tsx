import ComingTab from "./ComingTab";
import ConsumptionTab from "./ConsumptionTab";

export const tabButtons = [
  {
    label: "Приход",
    value: "1",
  },
  {
    label: "Расход",
    value: "2",
  },
];

export const tabPanels = [
  {
    value: "1",
    children: <ComingTab />,
  },
  {
    value: "2",
    children: <ConsumptionTab />,
  },
];
