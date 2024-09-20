import { SortOrder } from "../../util/SortOrder";

export type InventoryRecordLayerOrderByInput = {
  cost?: SortOrder;
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  direction?: SortOrder;
  document?: SortOrder;
  documentId?: SortOrder;
  externalLot?: SortOrder;
  externalSn?: SortOrder;
  guid?: SortOrder;
  id?: SortOrder;
  internalLot?: SortOrder;
  internalSn?: SortOrder;
  itemGuid?: SortOrder;
  itemId?: SortOrder;
  qty?: SortOrder;
  revision?: SortOrder;
  softDeleted?: SortOrder;
  updatedAt?: SortOrder;
  vdocsLink?: SortOrder;
  virloutguid?: SortOrder;
};
