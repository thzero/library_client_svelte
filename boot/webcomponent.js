import startMain from './main';

async function start(storeRequest, bootFiles, starter) {
	await startMain(null, null, storeRequest, bootFiles, starter);
}

export default start;
