import * as graphql from "@nestjs/graphql";
import { InventoryRecordLayerResolverBase } from "./base/inventoryRecordLayer.resolver.base";
import { InventoryRecordLayer } from "./base/InventoryRecordLayer";
import { InventoryRecordLayerService } from "./inventoryRecordLayer.service";

@graphql.Resolver(() => InventoryRecordLayer)
export class InventoryRecordLayerResolver extends InventoryRecordLayerResolverBase {
  constructor(protected readonly service: InventoryRecordLayerService) {
    super(service);
  }
}
