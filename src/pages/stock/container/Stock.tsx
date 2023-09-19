import { Tabs } from "components";
import { useState } from "react";
import StockHeader from "./components/StockHeader";
import { stockTabs, stockTabsPanel } from "./tabs/Tabs.list";

const Stock = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="contents">
      <StockHeader />
      <div className="my-apps-content">
        <Tabs tab={stockTabs} tabPanel={stockTabsPanel} />
      </div>
    </div>
  );
};

export default Stock;
