import GlobalUtility from '@thzero/library_client/utility/global';

import EventService from '@thzero/library_client/service/event';

class SvelteEventService extends EventService {
	// eslint-disable-next-line
	emit(channel, value) {
		GlobalUtility.$EventBus.emit(channel, value);
	}
}

export default SvelteEventService;
