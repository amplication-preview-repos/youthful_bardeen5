import { InventoryRecordLayerWhereInput } from "./InventoryRecordLayerWhereInput";
import { InventoryRecordLayerOrderByInput } from "./InventoryRecordLayerOrderByInput";

export type InventoryRecordLayerFindManyArgs = {
  where?: InventoryRecordLayerWhereInput;
  orderBy?: Array<InventoryRecordLayerOrderByInput>;
  skip?: number;
  take?: number;
};
