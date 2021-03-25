import Didact from '../../core/didactClass';

import { ErrorPageController } from '../../controllers/ErrorPageController';

Didact.render(
    new ErrorPageController({ notFound: true }),
    document.getElementById('app')
);
