import Didact from '../../core/didactClass';
import { SettingProfilePageController } from '../../controllers/SentingProfilePageController';

Didact.render(
    new SettingProfilePageController({}),
    document.getElementById('app')
);
