import mitt from 'mitt';

import GlobalUtility from '@thzero/library_client/utility/global';

const EventBus = mitt();

export default async () => {
	GlobalUtility.$EventBus = EventBus;
};
