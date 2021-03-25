import Didact from '../../core/didactClass';
import { FeedChatPageController } from '../../controllers/FeedChatController';

Didact.render(new FeedChatPageController({}), document.getElementById('app'));
