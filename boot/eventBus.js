import mitt from 'mitt';

import LibraryClientUtility from '@thzero/library_client/utility/index.js';

const EventBus = mitt();

export default async () => {
	LibraryClientUtility.$EventBus = EventBus;
};
