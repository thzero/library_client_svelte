import LibraryClientUtility from '@thzero/library_client/utility/index';

import ServicesBaseBoot from '@thzero/library_client/boot/baseServices';

import eventService from '../service/event';
import routerService from '../service/router';
import storeService from '../service/store';
import translateService from '../service/translate';

class SvelteServicesBaseBoot extends ServicesBaseBoot {
	_initializeInjector(framework, injector) {
		LibraryClientUtility.$injector = injector;
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

export default SvelteServicesBaseBoot;
