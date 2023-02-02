import LibraryClientUtility from '@thzero/library_client/utility/index';

import TranslateService from '@thzero/library_client/service/translate';

class SvelteTranslateService extends TranslateService {
	// eslint-disable-next-line
	translate(correlationId, id) {
		return LibraryClientUtility.$trans.t(id);
	}
}

export default SvelteTranslateService;
