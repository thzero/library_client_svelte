import GlobalUtility from '@thzero/library_client/utility/global';

import Service from '@thzero/library_client/service/index';

class VuexStoreService extends Service {
	get store() {
		return GlobalUtility.$store;
	}
}

export default VuexStoreService;
