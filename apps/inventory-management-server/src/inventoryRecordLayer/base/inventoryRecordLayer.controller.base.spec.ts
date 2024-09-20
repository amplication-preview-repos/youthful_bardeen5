import { Test } from "@nestjs/testing";
import {
  INestApplication,
  HttpStatus,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common";
import request from "supertest";
import { ACGuard } from "nest-access-control";
import { DefaultAuthGuard } from "../../auth/defaultAuth.guard";
import { ACLModule } from "../../auth/acl.module";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { map } from "rxjs";
import { InventoryRecordLayerController } from "../inventoryRecordLayer.controller";
import { InventoryRecordLayerService } from "../inventoryRecordLayer.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  cost: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  document: "exampleDocument",
  documentId: "exampleDocumentId",
  externalLot: "exampleExternalLot",
  externalSn: "exampleExternalSn",
  guid: "exampleGuid",
  id: "exampleId",
  internalLot: "exampleInternalLot",
  internalSn: "exampleInternalSn",
  itemGuid: "exampleItemGuid",
  itemId: "exampleItemId",
  qty: 42.42,
  revision: "exampleRevision",
  softDeleted: new Date(),
  updatedAt: new Date(),
  vdocsLink: "exampleVdocsLink",
  virloutguid: "exampleVirloutguid",
};
const CREATE_RESULT = {
  cost: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  document: "exampleDocument",
  documentId: "exampleDocumentId",
  externalLot: "exampleExternalLot",
  externalSn: "exampleExternalSn",
  guid: "exampleGuid",
  id: "exampleId",
  internalLot: "exampleInternalLot",
  internalSn: "exampleInternalSn",
  itemGuid: "exampleItemGuid",
  itemId: "exampleItemId",
  qty: 42.42,
  revision: "exampleRevision",
  softDeleted: new Date(),
  updatedAt: new Date(),
  vdocsLink: "exampleVdocsLink",
  virloutguid: "exampleVirloutguid",
};
const FIND_MANY_RESULT = [
  {
    cost: 42.42,
    createdAt: new Date(),
    dateTime: new Date(),
    document: "exampleDocument",
    documentId: "exampleDocumentId",
    externalLot: "exampleExternalLot",
    externalSn: "exampleExternalSn",
    guid: "exampleGuid",
    id: "exampleId",
    internalLot: "exampleInternalLot",
    internalSn: "exampleInternalSn",
    itemGuid: "exampleItemGuid",
    itemId: "exampleItemId",
    qty: 42.42,
    revision: "exampleRevision",
    softDeleted: new Date(),
    updatedAt: new Date(),
    vdocsLink: "exampleVdocsLink",
    virloutguid: "exampleVirloutguid",
  },
];
const FIND_ONE_RESULT = {
  cost: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  document: "exampleDocument",
  documentId: "exampleDocumentId",
  externalLot: "exampleExternalLot",
  externalSn: "exampleExternalSn",
  guid: "exampleGuid",
  id: "exampleId",
  internalLot: "exampleInternalLot",
  internalSn: "exampleInternalSn",
  itemGuid: "exampleItemGuid",
  itemId: "exampleItemId",
  qty: 42.42,
  revision: "exampleRevision",
  softDeleted: new Date(),
  updatedAt: new Date(),
  vdocsLink: "exampleVdocsLink",
  virloutguid: "exampleVirloutguid",
};

const service = {
  createInventoryRecordLayer() {
    return CREATE_RESULT;
  },
  inventoryRecordLayers: () => FIND_MANY_RESULT,
  inventoryRecordLayer: ({ where }: { where: { id: string } }) => {
    switch (where.id) {
      case existingId:
        return FIND_ONE_RESULT;
      case nonExistingId:
        return null;
    }
  },
};

const basicAuthGuard = {
  canActivate: (context: ExecutionContext) => {
    const argumentHost = context.switchToHttp();
    const request = argumentHost.getRequest();
    request.user = {
      roles: ["user"],
    };
    return true;
  },
};

const acGuard = {
  canActivate: () => {
    return true;
  },
};

const aclFilterResponseInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle().pipe(
      map((data) => {
        return data;
      })
    );
  },
};
const aclValidateRequestInterceptor = {
  intercept: (context: ExecutionContext, next: CallHandler) => {
    return next.handle();
  },
};

describe("InventoryRecordLayer", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: InventoryRecordLayerService,
          useValue: service,
        },
      ],
      controllers: [InventoryRecordLayerController],
      imports: [ACLModule],
    })
      .overrideGuard(DefaultAuthGuard)
      .useValue(basicAuthGuard)
      .overrideGuard(ACGuard)
      .useValue(acGuard)
      .overrideInterceptor(AclFilterResponseInterceptor)
      .useValue(aclFilterResponseInterceptor)
      .overrideInterceptor(AclValidateRequestInterceptor)
      .useValue(aclValidateRequestInterceptor)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  test("POST /inventoryRecordLayers", async () => {
    await request(app.getHttpServer())
      .post("/inventoryRecordLayers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateTime: CREATE_RESULT.dateTime.toISOString(),
        softDeleted: CREATE_RESULT.softDeleted.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /inventoryRecordLayers", async () => {
    await request(app.getHttpServer())
      .get("/inventoryRecordLayers")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateTime: FIND_MANY_RESULT[0].dateTime.toISOString(),
          softDeleted: FIND_MANY_RESULT[0].softDeleted.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /inventoryRecordLayers/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/inventoryRecordLayers"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /inventoryRecordLayers/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/inventoryRecordLayers"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateTime: FIND_ONE_RESULT.dateTime.toISOString(),
        softDeleted: FIND_ONE_RESULT.softDeleted.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /inventoryRecordLayers existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/inventoryRecordLayers")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateTime: CREATE_RESULT.dateTime.toISOString(),
        softDeleted: CREATE_RESULT.softDeleted.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/inventoryRecordLayers")
          .send(CREATE_INPUT)
          .expect(HttpStatus.CONFLICT)
          .expect({
            statusCode: HttpStatus.CONFLICT,
          });
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
