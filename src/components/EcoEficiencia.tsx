import { useState, useReducer } from "react";
import { Tabs } from "antd";
import EcoTabCompany from "./EcoTabCompany";
import { EcoTabContext } from "./context/EcoTabContext";
import { EcoTabReducer, EcoTabReducerActionType } from "./context/EcoTabReducer";

const { TabPane } = Tabs;

const EcoEficiencia = () => {
  const [activeTab, setActiveTab] = useState("1");

  const removeTabsEco = (targetKey: any) => {
    const indexTabToRemove = tabs.findIndex(
      (pane: any) => pane.key === targetKey
    );
    
    if (indexTabToRemove !== -1) {
      dispatch({ type: EcoTabReducerActionType.REMOVE_TABS, payload: indexTabToRemove });
      if (indexTabToRemove > 0) {
        setActiveTab(tabs[indexTabToRemove - 1].key);
      }
      else {
        setActiveTab("1");
      }
    }
  };

  const onChange = (key: any) => {
    setActiveTab(key);
  };
  const [tabs, dispatch] = useReducer(EcoTabReducer, []);

  return (
      <EcoTabContext.Provider
        value={{ tabs, dispatch, setActiveTab }}
      >
        <Tabs
          hideAdd
          onChange={onChange}
          activeKey={activeTab}
          type="editable-card"
          onEdit={removeTabsEco}
        >
          <TabPane tab="COMPANIA" key={"1"} closeIcon={<></>}>
            <EcoTabCompany />
          </TabPane>
          {tabs.map((pane: any) => (
            <TabPane tab={pane.title} key={pane.key}>
              {pane.content}
            </TabPane>
          ))}
        </Tabs>
      </EcoTabContext.Provider>
  );
};

export default EcoEficiencia;
