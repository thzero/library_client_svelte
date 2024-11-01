import { init, getLocaleFromNavigator, register, format, addMessages, unwrapFunctionStore } from 'svelte-i18n';

import LibraryClientUtility from '@thzero/library_client/utility/index.js';

import i18nBaseBoot from '@thzero/library_client/boot/basei18n.js';

import NotImplementedError from '@thzero/library_common/errors/notImplemented.js';

class Sveltei18nBaseBoot extends i18nBaseBoot {
	// eslint-disable-next-line
	async execute(framework, app, store) {
		this._initMessages(register, addMessages);

		init({
			fallbackLocale: 'en',
			initialLocale: getLocaleFromNavigator()
		});
		// LibraryClientUtility.$trans = { t: unwrapFunctionStore(format) };
		LibraryClientUtility.$trans = { f: format, t: unwrapFunctionStore(format) };
	}

	_initMessages(register) {
		throw new NotImplementedError();
	}
}

export default Sveltei18nBaseBoot;
