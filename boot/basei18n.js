import { init, getLocaleFromNavigator, register, format, addMessages, unwrapFunctionStore } from 'svelte-i18n';

import LibraryClientUtility from '@thzero/library_client/utility/index';

import Basei18n from '@thzero/library_client/boot/basei18n';

import NotImplementedError from '@thzero/library_common/errors/notImplemented';

class SvelteBasei18n extends Basei18n {
	// eslint-disable-next-line
	async execute(framework, app, store) {
		this._initMessages(register, addMessages);

		init({
			fallbackLocale: 'en',
			initialLocale: getLocaleFromNavigator()
		});
		LibraryClientUtility.$trans = { t: unwrapFunctionStore(format) };
	}

	_initMessages(register) {
		throw new NotImplementedError();
	}
}

export default SvelteBasei18n;
