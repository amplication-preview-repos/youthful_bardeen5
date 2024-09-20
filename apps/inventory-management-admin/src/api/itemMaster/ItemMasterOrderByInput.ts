import { SortOrder } from "../../util/SortOrder";

export type ItemMasterOrderByInput = {
  avgCost?: SortOrder;
  createdAt?: SortOrder;
  dateTime?: SortOrder;
  description?: SortOrder;
  guid?: SortOrder;
  id?: SortOrder;
  internalLotSeed?: SortOrder;
  internalSnSeed?: SortOrder;
  itemId?: SortOrder;
  lastCost?: SortOrder;
  lastDateTime?: SortOrder;
  lotRule?: SortOrder;
  mfgUomConvRate?: SortOrder;
  name?: SortOrder;
  qoh?: SortOrder;
  revision?: SortOrder;
  snRule?: SortOrder;
  stdCost?: SortOrder;
  uom?: SortOrder;
  updatedAt?: SortOrder;
  vdocsLink?: SortOrder;
};
