import * as React from "react";
import { List, Datagrid, ListProps, TextField, DateField } from "react-admin";
import Pagination from "../Components/Pagination";

export const ItemMasterList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      title={"ItemMasters"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show" bulkActionButtons={false}>
        <TextField label="AvgCost" source="avgCost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateTime" source="dateTime" />
        <TextField label="Description" source="description" />
        <TextField label="GUID" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="InternalLotSeed" source="internalLotSeed" />
        <TextField label="InternalSnSeed" source="internalSnSeed" />
        <TextField label="ItemID" source="itemId" />
        <TextField label="LastCost" source="lastCost" />
        <TextField label="LastDateTime" source="lastDateTime" />
        <TextField label="LotRule" source="lotRule" />
        <TextField label="MfgUomConvRate" source="mfgUomConvRate" />
        <TextField label="Name" source="name" />
        <TextField label="QOH" source="qoh" />
        <TextField label="Revision" source="revision" />
        <TextField label="SNRule" source="snRule" />
        <TextField label="StdCost" source="stdCost" />
        <TextField label="UOM" source="uom" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VdocsLink" source="vdocsLink" />{" "}
      </Datagrid>
    </List>
  );
};
