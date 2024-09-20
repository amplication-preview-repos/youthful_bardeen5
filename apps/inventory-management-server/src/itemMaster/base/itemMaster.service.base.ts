/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";
import { Prisma, ItemMaster as PrismaItemMaster } from "@prisma/client";

export class ItemMasterServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.ItemMasterCountArgs, "select">
  ): Promise<number> {
    return this.prisma.itemMaster.count(args);
  }

  async itemMasters(
    args: Prisma.ItemMasterFindManyArgs
  ): Promise<PrismaItemMaster[]> {
    return this.prisma.itemMaster.findMany(args);
  }
  async itemMaster(
    args: Prisma.ItemMasterFindUniqueArgs
  ): Promise<PrismaItemMaster | null> {
    return this.prisma.itemMaster.findUnique(args);
  }
  async createItemMaster(
    args: Prisma.ItemMasterCreateArgs
  ): Promise<PrismaItemMaster> {
    return this.prisma.itemMaster.create(args);
  }
  async updateItemMaster(
    args: Prisma.ItemMasterUpdateArgs
  ): Promise<PrismaItemMaster> {
    return this.prisma.itemMaster.update(args);
  }
  async deleteItemMaster(
    args: Prisma.ItemMasterDeleteArgs
  ): Promise<PrismaItemMaster> {
    return this.prisma.itemMaster.delete(args);
  }
}
