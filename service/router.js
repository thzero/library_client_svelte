import { push } from 'svelte-spa-router';

import RouterService from '@thzero/library_client/service/router';

class SvelteRouterService extends RouterService {
	// eslint-disable-next-line
	route(path, options) {
		push(path);
	}
}

export default SvelteRouterService;
