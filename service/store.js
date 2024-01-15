import LibraryClientUtility from '@thzero/library_client/utility/index.js';

import Service from '@thzero/library_client/service/index.js';

class SvelteStoreService extends Service {
	get store() {
		return LibraryClientUtility.$store;
	}
}

export default SvelteStoreService;
