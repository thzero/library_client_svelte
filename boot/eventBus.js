import mitt from 'mitt';

import LibraryClientUtility from '@thzero/library_client/utility/index';

const EventBus = mitt();

export default async () => {
	LibraryClientUtility.$EventBus = EventBus;
};
