import Didact from '../../core/didactClass.js';
import { ErrorPageController } from '../../controllers/ErrorPageController.js';
Didact.render(new ErrorPageController({ notFound: true }), document.getElementById('app'));
//# sourceMappingURL=index.js.map