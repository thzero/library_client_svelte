import LibraryClientUtility from '@thzero/library_client/utility/index.js';

import RootServicesBaseBoot from '@thzero/library_client/boot/rootServices.js';

import eventService from '../service/event.js';
import routerService from '../service/router.js';
import storeService from '../service/store.js';
import translateService from '../service/translate.js';

class SveleteRootServicesBaseBoot extends RootServicesBaseBoot {
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

export default SveleteRootServicesBaseBoot;
