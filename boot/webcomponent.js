import startMain from './main.js';

async function start(storeRequest, bootFiles, starter) {
	await startMain(null, storeRequest, bootFiles, starter);
}

export default start;
