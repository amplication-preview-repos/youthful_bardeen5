import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ItemMasterList } from "./itemMaster/ItemMasterList";
import { ItemMasterCreate } from "./itemMaster/ItemMasterCreate";
import { ItemMasterEdit } from "./itemMaster/ItemMasterEdit";
import { ItemMasterShow } from "./itemMaster/ItemMasterShow";
import { InventoryRecordLayerList } from "./inventoryRecordLayer/InventoryRecordLayerList";
import { InventoryRecordLayerCreate } from "./inventoryRecordLayer/InventoryRecordLayerCreate";
import { InventoryRecordLayerEdit } from "./inventoryRecordLayer/InventoryRecordLayerEdit";
import { InventoryRecordLayerShow } from "./inventoryRecordLayer/InventoryRecordLayerShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"InventoryManagement"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="ItemMaster"
          list={ItemMasterList}
          edit={ItemMasterEdit}
          create={ItemMasterCreate}
          show={ItemMasterShow}
        />
        <Resource
          name="InventoryRecordLayer"
          list={InventoryRecordLayerList}
          edit={InventoryRecordLayerEdit}
          create={InventoryRecordLayerCreate}
          show={InventoryRecordLayerShow}
        />
      </Admin>
    </div>
  );
};

export default App;
