"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const getList_1 = require("./getList");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const cors = require("cors");
    app.use(cors({
        origin: 'http://localhost:5000'
    }));
    (0, getList_1.default)("Characters");
    (0, getList_1.default)("Marvel_Staff/Writers");
    (0, getList_1.default)("Marvel_Staff/Pencilers");
    (0, getList_1.default)("Marvel_Staff/Inkers");
    (0, getList_1.default)("Marvel_Staff/Colorists");
    (0, getList_1.default)("Marvel_Staff/Letterers");
    (0, getList_1.default)("Marvel_Staff/Editors");
    await app.listen(process.env.PORT || 3000);
}
bootstrap();
//# sourceMappingURL=main.js.map