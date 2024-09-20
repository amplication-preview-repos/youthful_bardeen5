import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
} from "react-admin";

export const InventoryRecordLayerShow = (
  props: ShowProps
): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="Cost" source="cost" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="DateTime" source="dateTime" />
        <TextField label="Direction" source="direction" />
        <TextField label="Document" source="document" />
        <TextField label="DocumentID" source="documentId" />
        <TextField label="ExternalLOT" source="externalLot" />
        <TextField label="ExternalSN" source="externalSn" />
        <TextField label="GUID" source="guid" />
        <TextField label="ID" source="id" />
        <TextField label="InternalLOT" source="internalLot" />
        <TextField label="InternalSN" source="internalSn" />
        <TextField label="ItemGUID" source="itemGuid" />
        <TextField label="ItemID" source="itemId" />
        <TextField label="QTY" source="qty" />
        <TextField label="Revision" source="revision" />
        <TextField label="SoftDeleted" source="softDeleted" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="VdocsLink" source="vdocsLink" />
        <TextField label="VIRLOUTGUID" source="virloutguid" />
      </SimpleShowLayout>
    </Show>
  );
};
