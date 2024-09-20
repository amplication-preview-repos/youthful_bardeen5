import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { InventoryRecordLayerServiceBase } from "./base/inventoryRecordLayer.service.base";

@Injectable()
export class InventoryRecordLayerService extends InventoryRecordLayerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
