import { ItemMaster as TItemMaster } from "../api/itemMaster/ItemMaster";

export const ITEMMASTER_TITLE_FIELD = "name";

export const ItemMasterTitle = (record: TItemMaster): string => {
  return record.name?.toString() || String(record.id);
};
