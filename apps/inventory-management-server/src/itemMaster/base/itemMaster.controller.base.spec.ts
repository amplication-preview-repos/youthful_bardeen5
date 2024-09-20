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
import { ItemMasterController } from "../itemMaster.controller";
import { ItemMasterService } from "../itemMaster.service";

const nonExistingId = "nonExistingId";
const existingId = "existingId";
const CREATE_INPUT = {
  avgCost: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  description: "exampleDescription",
  guid: "exampleGuid",
  id: "exampleId",
  internalLotSeed: "exampleInternalLotSeed",
  internalSnSeed: "exampleInternalSnSeed",
  itemId: "exampleItemId",
  lastCost: 42.42,
  lastDateTime: new Date(),
  mfgUomConvRate: 42.42,
  name: "exampleName",
  qoh: 42.42,
  revision: "exampleRevision",
  stdCost: 42.42,
  updatedAt: new Date(),
  vdocsLink: "exampleVdocsLink",
};
const CREATE_RESULT = {
  avgCost: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  description: "exampleDescription",
  guid: "exampleGuid",
  id: "exampleId",
  internalLotSeed: "exampleInternalLotSeed",
  internalSnSeed: "exampleInternalSnSeed",
  itemId: "exampleItemId",
  lastCost: 42.42,
  lastDateTime: new Date(),
  mfgUomConvRate: 42.42,
  name: "exampleName",
  qoh: 42.42,
  revision: "exampleRevision",
  stdCost: 42.42,
  updatedAt: new Date(),
  vdocsLink: "exampleVdocsLink",
};
const FIND_MANY_RESULT = [
  {
    avgCost: 42.42,
    createdAt: new Date(),
    dateTime: new Date(),
    description: "exampleDescription",
    guid: "exampleGuid",
    id: "exampleId",
    internalLotSeed: "exampleInternalLotSeed",
    internalSnSeed: "exampleInternalSnSeed",
    itemId: "exampleItemId",
    lastCost: 42.42,
    lastDateTime: new Date(),
    mfgUomConvRate: 42.42,
    name: "exampleName",
    qoh: 42.42,
    revision: "exampleRevision",
    stdCost: 42.42,
    updatedAt: new Date(),
    vdocsLink: "exampleVdocsLink",
  },
];
const FIND_ONE_RESULT = {
  avgCost: 42.42,
  createdAt: new Date(),
  dateTime: new Date(),
  description: "exampleDescription",
  guid: "exampleGuid",
  id: "exampleId",
  internalLotSeed: "exampleInternalLotSeed",
  internalSnSeed: "exampleInternalSnSeed",
  itemId: "exampleItemId",
  lastCost: 42.42,
  lastDateTime: new Date(),
  mfgUomConvRate: 42.42,
  name: "exampleName",
  qoh: 42.42,
  revision: "exampleRevision",
  stdCost: 42.42,
  updatedAt: new Date(),
  vdocsLink: "exampleVdocsLink",
};

const service = {
  createItemMaster() {
    return CREATE_RESULT;
  },
  itemMasters: () => FIND_MANY_RESULT,
  itemMaster: ({ where }: { where: { id: string } }) => {
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

describe("ItemMaster", () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      providers: [
        {
          provide: ItemMasterService,
          useValue: service,
        },
      ],
      controllers: [ItemMasterController],
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

  test("POST /itemMasters", async () => {
    await request(app.getHttpServer())
      .post("/itemMasters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateTime: CREATE_RESULT.dateTime.toISOString(),
        lastDateTime: CREATE_RESULT.lastDateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      });
  });

  test("GET /itemMasters", async () => {
    await request(app.getHttpServer())
      .get("/itemMasters")
      .expect(HttpStatus.OK)
      .expect([
        {
          ...FIND_MANY_RESULT[0],
          createdAt: FIND_MANY_RESULT[0].createdAt.toISOString(),
          dateTime: FIND_MANY_RESULT[0].dateTime.toISOString(),
          lastDateTime: FIND_MANY_RESULT[0].lastDateTime.toISOString(),
          updatedAt: FIND_MANY_RESULT[0].updatedAt.toISOString(),
        },
      ]);
  });

  test("GET /itemMasters/:id non existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/itemMasters"}/${nonExistingId}`)
      .expect(HttpStatus.NOT_FOUND)
      .expect({
        statusCode: HttpStatus.NOT_FOUND,
        message: `No resource was found for {"${"id"}":"${nonExistingId}"}`,
        error: "Not Found",
      });
  });

  test("GET /itemMasters/:id existing", async () => {
    await request(app.getHttpServer())
      .get(`${"/itemMasters"}/${existingId}`)
      .expect(HttpStatus.OK)
      .expect({
        ...FIND_ONE_RESULT,
        createdAt: FIND_ONE_RESULT.createdAt.toISOString(),
        dateTime: FIND_ONE_RESULT.dateTime.toISOString(),
        lastDateTime: FIND_ONE_RESULT.lastDateTime.toISOString(),
        updatedAt: FIND_ONE_RESULT.updatedAt.toISOString(),
      });
  });

  test("POST /itemMasters existing resource", async () => {
    const agent = request(app.getHttpServer());
    await agent
      .post("/itemMasters")
      .send(CREATE_INPUT)
      .expect(HttpStatus.CREATED)
      .expect({
        ...CREATE_RESULT,
        createdAt: CREATE_RESULT.createdAt.toISOString(),
        dateTime: CREATE_RESULT.dateTime.toISOString(),
        lastDateTime: CREATE_RESULT.lastDateTime.toISOString(),
        updatedAt: CREATE_RESULT.updatedAt.toISOString(),
      })
      .then(function () {
        agent
          .post("/itemMasters")
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
