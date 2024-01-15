import LibraryClientUtility from '@thzero/library_client/utility/index.js';

import EventService from '@thzero/library_client/service/event.js';

class SvelteEventService extends EventService {
	// eslint-disable-next-line
	emit(channel, value) {
		LibraryClientUtility.$EventBus.emit(channel, value);
	}
}

export default SvelteEventService;
