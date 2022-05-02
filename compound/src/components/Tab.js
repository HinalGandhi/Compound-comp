import React, { useState, createContext, useContext } from "react";

const TabContext = createContext({});

function Tab({ id, children }) {
  const [activeTabID, setActiveTabID] = useContext(TabContext);
  return (
    <div>
      <div onClick={() => setActiveTabID(id)}>{children}</div>
    </div>
  );
}
function TabPanel({ whenActive, children }) {
  const [activeTabID] = useContext(TabContext);
  return <div>{activeTabID === whenActive ? children : null}</div>;
}

function TabSwitcher(props) {
  const [activeTabID, setActiveTabID] = useState("a");
  return (
    <TabContext.Provider value={[activeTabID, setActiveTabID]}>
      {props.children}
    </TabContext.Provider>
  );
}

export default TabSwitcher;
export { Tab, TabPanel };