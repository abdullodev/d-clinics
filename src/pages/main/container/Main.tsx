import { Tabs } from "components";
import { tabButtons, tabPanels } from "./tabs/Tabs.list";

const Main = () => {
  return (
    <div className="contents">
      <div className="my-apps-content">
        <Tabs tab={tabButtons} tabPanel={tabPanels} />
      </div>
    </div>
  );
};

export default Main;
