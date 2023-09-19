import { TabContext, TabList, TabPanel } from "@mui/lab";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import { FC, Suspense, useState } from "react";
import LineLoader from "../Loader/LineLoader";
import { TabBarStyled } from "./TabBar.style";

interface ITabs {
  tab: any;
  tabPanel: any;
}

const Tabs: FC<ITabs> = ({ tab, tabPanel }) => {
  const [value, setValue] = useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <TabBarStyled>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Suspense fallback={<LineLoader />}>
            <TabList onChange={handleChange} aria-label="lab API tabs example">
              {tab.map((t: any, index: number) => (
                <Tab
                  label={t.label}
                  value={t.value}
                  key={index}
                  sx={{ minHeight: "36px", height: "36px" }}
                />
              ))}
            </TabList>
          </Suspense>
        </Box>
        <Suspense fallback={<LineLoader />}>
          {tabPanel.map((panel: any, index: number) => (
            <TabPanel value={panel.value} key={index}>
              {panel.children}
            </TabPanel>
          ))}
        </Suspense>
      </TabContext>
    </TabBarStyled>
  );
};

export default Tabs;
