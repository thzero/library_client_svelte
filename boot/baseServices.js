import GlobalUtility from '@thzero/library_client/utility/global';

import BaseServices from '@thzero/library_client/boot/baseServices';

import eventService from '../service/event';
import routerService from '../service/router';
import storeService from '../service/store';
import translateService from '../service/translate';

class SvelteBaseServices extends BaseServices {
	_initializeInjector(framework, injector) {
		GlobalUtility.$injector = injector;
	}

	_initializeEvent(injector) {
		return new eventService();
	}

	_initializeRouter(injector) {
		return new routerService();
	}

	_initializeStore(injector) {
		return new storeService();
	}

	_initializeTranslate(injector) {
		return new translateService();
	}
}

export default SvelteBaseServices;
