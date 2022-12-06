import GlobalUtility from '@thzero/library_client/utility/global';

import {} from '@thzero/library_common/utility/string';

// eslint-disable-next-line
async function start(app, router, storeRequest, bootFiles, starter) {
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
	GlobalUtility.$store = store;
	
	GlobalUtility.$navRouter = router;

	if (bootFiles && (bootFiles.length > 0)) {
		let obj;
		for (const bootFile of bootFiles) {
			if (typeof bootFile !== 'function')
				continue;

			try {
				try {
					await bootFile({
						router,
						store
					});
					continue;
				}
				catch (err) {
					obj = new bootFile();
					await obj.execute(
						router,
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
			router,
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
