import * as graphql from "@nestjs/graphql";
import { ItemMasterResolverBase } from "./base/itemMaster.resolver.base";
import { ItemMaster } from "./base/ItemMaster";
import { ItemMasterService } from "./itemMaster.service";

@graphql.Resolver(() => ItemMaster)
export class ItemMasterResolver extends ItemMasterResolverBase {
  constructor(protected readonly service: ItemMasterService) {
    super(service);
  }
}
