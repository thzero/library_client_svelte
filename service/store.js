import LibraryClientUtility from '@thzero/library_client/utility/index';

import Service from '@thzero/library_client/service/index';

class SvelteStoreService extends Service {
	get store() {
		return LibraryClientUtility.$store;
	}
}

export default SvelteStoreService;
