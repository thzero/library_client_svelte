import { navigateTo } from 'svelte-router-spa';

import RouterService from '@thzero/library_client/service/router';

class SvelteRouterService extends RouterService {
	// eslint-disable-next-line
	route(path, options) {
		navigateTo(path);
	}
}

export default SvelteRouterService;
