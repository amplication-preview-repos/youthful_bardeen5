import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  DateTimeInput,
  SelectInput,
  TextInput,
} from "react-admin";

export const InventoryRecordLayerEdit = (
  props: EditProps
): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput label="Cost" source="cost" />
        <DateTimeInput label="DateTime" source="dateTime" />
        <SelectInput
          source="direction"
          label="Direction"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="Document" source="document" />
        <TextInput label="DocumentID" source="documentId" />
        <TextInput label="ExternalLOT" source="externalLot" />
        <TextInput label="ExternalSN" source="externalSn" />
        <TextInput label="GUID" source="guid" />
        <TextInput label="InternalLOT" source="internalLot" />
        <TextInput label="InternalSN" source="internalSn" />
        <TextInput label="ItemGUID" source="itemGuid" />
        <TextInput label="ItemID" source="itemId" />
        <NumberInput label="QTY" source="qty" />
        <TextInput label="Revision" source="revision" />
        <DateTimeInput label="SoftDeleted" source="softDeleted" />
        <TextInput label="VdocsLink" source="vdocsLink" />
        <TextInput label="VIRLOUTGUID" source="virloutguid" />
      </SimpleForm>
    </Edit>
  );
};
