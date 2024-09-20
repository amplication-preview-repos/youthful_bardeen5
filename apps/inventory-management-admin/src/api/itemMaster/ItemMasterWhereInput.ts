import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type ItemMasterWhereInput = {
  avgCost?: FloatNullableFilter;
  dateTime?: DateTimeNullableFilter;
  description?: StringNullableFilter;
  guid?: StringNullableFilter;
  id?: StringFilter;
  internalLotSeed?: StringNullableFilter;
  internalSnSeed?: StringNullableFilter;
  itemId?: StringNullableFilter;
  lastCost?: FloatNullableFilter;
  lastDateTime?: DateTimeNullableFilter;
  lotRule?: "Option1";
  mfgUomConvRate?: FloatNullableFilter;
  name?: StringNullableFilter;
  qoh?: FloatNullableFilter;
  revision?: StringNullableFilter;
  snRule?: "Option1";
  stdCost?: FloatNullableFilter;
  uom?: "Option1";
  vdocsLink?: StringNullableFilter;
};
