import Didact from '../../core/didactClass';
import { ListChatPageController } from '../../controllers/ListChatController';

Didact.render(new ListChatPageController({}), document.getElementById('app'));
