import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  DateTimeInput,
  TextInput,
  SelectInput,
} from "react-admin";

export const ItemMasterCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="AvgCost" source="avgCost" />
        <DateTimeInput label="DateTime" source="dateTime" />
        <TextInput label="Description" multiline source="description" />
        <TextInput label="GUID" source="guid" />
        <TextInput label="InternalLotSeed" source="internalLotSeed" />
        <TextInput label="InternalSnSeed" source="internalSnSeed" />
        <TextInput label="ItemID" source="itemId" />
        <NumberInput label="LastCost" source="lastCost" />
        <DateTimeInput label="LastDateTime" source="lastDateTime" />
        <SelectInput
          source="lotRule"
          label="LotRule"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="MfgUomConvRate" source="mfgUomConvRate" />
        <TextInput label="Name" source="name" />
        <NumberInput label="QOH" source="qoh" />
        <TextInput label="Revision" source="revision" />
        <SelectInput
          source="snRule"
          label="SNRule"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <NumberInput label="StdCost" source="stdCost" />
        <SelectInput
          source="uom"
          label="UOM"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="VdocsLink" source="vdocsLink" />
      </SimpleForm>
    </Create>
  );
};
