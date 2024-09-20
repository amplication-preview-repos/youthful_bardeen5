import { Module } from "@nestjs/common";
import { ItemMasterModuleBase } from "./base/itemMaster.module.base";
import { ItemMasterService } from "./itemMaster.service";
import { ItemMasterController } from "./itemMaster.controller";
import { ItemMasterResolver } from "./itemMaster.resolver";

@Module({
  imports: [ItemMasterModuleBase],
  controllers: [ItemMasterController],
  providers: [ItemMasterService, ItemMasterResolver],
  exports: [ItemMasterService],
})
export class ItemMasterModule {}
