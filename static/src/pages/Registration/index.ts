import Didact from '../../core/didactClass';
import { RegistrationPageController } from '../../controllers/RegistrationPageController';

Didact.render(
    new RegistrationPageController({}),
    document.getElementById('app')
);
