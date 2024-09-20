import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ItemMasterServiceBase } from "./base/itemMaster.service.base";

@Injectable()
export class ItemMasterService extends ItemMasterServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
