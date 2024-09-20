import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ItemMasterService } from "./itemMaster.service";
import { ItemMasterControllerBase } from "./base/itemMaster.controller.base";

@swagger.ApiTags("itemMasters")
@common.Controller("itemMasters")
export class ItemMasterController extends ItemMasterControllerBase {
  constructor(protected readonly service: ItemMasterService) {
    super(service);
  }
}
