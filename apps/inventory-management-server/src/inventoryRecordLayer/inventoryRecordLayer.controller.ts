import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { InventoryRecordLayerService } from "./inventoryRecordLayer.service";
import { InventoryRecordLayerControllerBase } from "./base/inventoryRecordLayer.controller.base";

@swagger.ApiTags("inventoryRecordLayers")
@common.Controller("inventoryRecordLayers")
export class InventoryRecordLayerController extends InventoryRecordLayerControllerBase {
  constructor(protected readonly service: InventoryRecordLayerService) {
    super(service);
  }
}
