import Didact from "./core/didactClass";

import { AppPageController } from "./controllers/AppPageController";


Didact.render(
    new AppPageController(),
    document.getElementById('app')
);
