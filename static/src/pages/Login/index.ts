import Didact from '../../core/didactClass';
import { LoginPageController } from '../../controllers/LoginPageController';

Didact.render(new LoginPageController({}), document.getElementById('app'));
