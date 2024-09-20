import { InventoryRecordLayer as TInventoryRecordLayer } from "../api/inventoryRecordLayer/InventoryRecordLayer";

export const INVENTORYRECORDLAYER_TITLE_FIELD = "document";

export const InventoryRecordLayerTitle = (
  record: TInventoryRecordLayer
): string => {
  return record.document?.toString() || String(record.id);
};
