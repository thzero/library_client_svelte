import GlobalUtility from '@thzero/library_client/utility/global';

import TranslateService from '@thzero/library_client/service/translate';

class SvelteTranslateService extends TranslateService {
	// eslint-disable-next-line
	translate(correlationId, id) {
		return GlobalUtility.$trans.t(id);
	}
}

export default SvelteTranslateService;
