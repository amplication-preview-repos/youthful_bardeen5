import { ItemMasterWhereInput } from "./ItemMasterWhereInput";
import { ItemMasterOrderByInput } from "./ItemMasterOrderByInput";

export type ItemMasterFindManyArgs = {
  where?: ItemMasterWhereInput;
  orderBy?: Array<ItemMasterOrderByInput>;
  skip?: number;
  take?: number;
};
