import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type InventoryRecordLayerWhereInput = {
  cost?: FloatNullableFilter;
  dateTime?: DateTimeNullableFilter;
  direction?: "Option1";
  document?: StringNullableFilter;
  documentId?: StringNullableFilter;
  externalLot?: StringNullableFilter;
  externalSn?: StringNullableFilter;
  guid?: StringNullableFilter;
  id?: StringFilter;
  internalLot?: StringNullableFilter;
  internalSn?: StringNullableFilter;
  itemGuid?: StringNullableFilter;
  itemId?: StringNullableFilter;
  qty?: FloatNullableFilter;
  revision?: StringNullableFilter;
  softDeleted?: DateTimeNullableFilter;
  vdocsLink?: StringNullableFilter;
  virloutguid?: StringNullableFilter;
};
