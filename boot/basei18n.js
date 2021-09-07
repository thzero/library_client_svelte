import { init, getLocaleFromNavigator, register, _, t, addMessages } from 'svelte-i18n';

import GlobalUtility from '@thzero/library_client/utility/global';

import Basei18n from '@thzero/library_client/boot/basei18n';

import NotImplementedError from '@thzero/library_common/errors/notImplemented';

class SvelteBasei18n extends Basei18n {
	// eslint-disable-next-line
	async execute(framework, app, router, store) {
		this._initMessages(register, addMessages);

		init({
			fallbackLocale: 'en',
			initialLocale: getLocaleFromNavigator()
		});
		GlobalUtility.$trans = { t: _ };
	}

	_initMessages(register) {
		throw new NotImplementedError();
	}
}

export default SvelteBasei18n;
