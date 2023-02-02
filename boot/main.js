import LibraryClientUtility from '@thzero/library_client/utility/index';

// @ts-ignore
import {} from '@thzero/library_common/utility/string';

// eslint-disable-next-line
async function start(app, storeRequest, bootFiles, starter) {
	let store = null;
	if (storeRequest) {
		try {
			store = storeRequest();
		}
		catch (err) {
			console.log(err);
			throw Error('Unable to create store.');
		}
	}

	if (!store)
		throw Error('Unable to create store.');
	LibraryClientUtility.$store = store;

	if (bootFiles && (bootFiles.length > 0)) {
		let obj;
		for (const bootFile of bootFiles) {
			if (typeof bootFile !== 'function')
				continue;

			try {
				try {
					await bootFile({
						store
					});
					continue;
				}
				catch (err) {
					obj = new bootFile();
					await obj.execute(
						store
					);
					continue;
				}
			}
			catch (err) {
				if (err && err.url) {
					window.location.href = err.url;
					return;
				}

				// eslint-disable-next-line
				console.error('boot error:', err);
				return;
			}
		}
	}

	if (!starter) {
		if (app)
			new app({ target: document.getElementById('app') });
		return;
	}

	try {
		const result = starter({
			store
		});

		result
			// eslint-disable-next-line
			.then(values => {
				if (app)
					new app({ target: document.getElementById('app') });
			})
			.catch(err => {
				// eslint-disable-next-line
				console.error('boot error:', err);
			});
	}
	catch (err) {
		if (err && err.url) {
			window.location.href = err.url;
			return;
		}

		// eslint-disable-next-line
		console.error('boot error:', err);
	}
}

export default start;
