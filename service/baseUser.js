import LibraryClientConstants from '@thzero/library_client/constants.js';

import BaseUserService from '@thzero/library_client/service/baseUser.js';

class SvelteBaseUserService extends BaseUserService {
	constructor() {
		super();

		this._serviceStore = null;
	}

	async init(injector) {
		await super.init(injector);

		this._serviceStore = this._injector.getService(LibraryClientConstants.InjectorKeys.SERVICE_STORE);
	}

	async resetUser(correlationId) {
		await this._serviceStore.store.user.dispatcher.resetUser(correlationId);
	}

	async setAuthCompleted(correlationId) {
		await this._serviceStore.store.user.dispatcher.setAuthCompleted(correlationId, true);
	}

	async setClaims(correlationId, claims) {
		await this._serviceStore.store.user.dispatcher.setClaims(correlationId, claims);
	}

	async setLoggedIn(correlationId, value) {
		await this._serviceStore.store.user.dispatcher.setLoggedIn(correlationId, value);
	}
	
	async setTokenResult(correlationId, tokenResult) {
		await this._serviceStore.store.user.dispatcher.setTokenResult(correlationId, tokenResult);
	}

	async setUser(correlationId, user) {
		await this._serviceStore.store.user.dispatcher.setUser(correlationId, user);
	}

	get token() {
		if (this._serviceStore.store.user) 
			return this._serviceStore.store.user.token;
		return null;
	}
}

export default SvelteBaseUserService;
