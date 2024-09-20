import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const ItemMasterShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
        <TextField label="VdocsLink" source="vdocsLink" />
      </SimpleShowLayout>
    </Show>
  );
};
