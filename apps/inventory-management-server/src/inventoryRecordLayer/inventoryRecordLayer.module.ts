import { Module } from "@nestjs/common";
import { InventoryRecordLayerModuleBase } from "./base/inventoryRecordLayer.module.base";
import { InventoryRecordLayerService } from "./inventoryRecordLayer.service";
import { InventoryRecordLayerController } from "./inventoryRecordLayer.controller";
import { InventoryRecordLayerResolver } from "./inventoryRecordLayer.resolver";

@Module({
  imports: [InventoryRecordLayerModuleBase],
  controllers: [InventoryRecordLayerController],
  providers: [InventoryRecordLayerService, InventoryRecordLayerResolver],
  exports: [InventoryRecordLayerService],
})
export class InventoryRecordLayerModule {}
