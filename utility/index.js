import Constants from '../constants';
import LibraryCommonConstants from '@thzero/library_common/constants';

import GlobalUtility from '@thzero/library_client/utility/global';

class Utility {
	static applyError(error, messageParams) {
		if (!error)
			return null;

		if (!error.code && !String.isNullOrEmpty(error.message)) {
			return {
				message: error.message,
				field: (error.field ? error.field : LibraryCommonConstants.ErrorFields.Generic)
			};
		}

		let messageCode = error.code;
		if (error.type)
			messageCode = `${messageCode}.${error.type}`;
		if (error.prefix)
			messageCode = `${error.prefix}.${messageCode}`;
		messageParams = { ...messageParams, ...error.params };

		let param;
		for (const field in messageParams) {
			param = messageParams[field];
			if (param.il8n) {
				let suffix = param.suffix;
				if (String.isNullOrEmpty(suffix))
					suffix = Constants.ErrorCodes.SuffixParams;
				param.value = GlobalUtility.$trans.t(`${suffix}.${param.value}`);
			}
			messageParams[field] = param.value;
		}

		if (String.isNullOrEmpty(messageCode))
			messageCode = Constants.ErrorCodes.Default;

		return {
			message: GlobalUtility.$trans.t(`${Constants.ErrorCodes.Suffix}.${messageCode}`, messageParams),
			field: (error.field ? error.field : LibraryCommonConstants.ErrorFields.Generic)
		};
	}

	static handleError(object, serverErrors, response) {
		if (!object || !serverErrors || !response)
			return;

		const errors = {};
		let error;
		for (const field in response.errors) {
			error = Utility.applyError(response.errors[field]);
			if (error.field === LibraryCommonConstants.ErrorFields.Generic) {
				serverErrors.push(error.message);
				continue;
			}
			// eslint-disable-next-line
			if (!errors.hasOwnProperty(error.field))
				errors[error.field] = [];
			errors[error.field].push(error.message);
		}

		object.setErrors(errors);
	}

	static invalid(next) {
		if (next) {
			next('/');
			return;
		}

		GlobalUtility.$navRouter.push('/');
	}

	static randomKeyGen() {
		const high = 100000000000;
		const low = 0;
		return Math.floor(Math.random() * (high - low) + low);
	}

	static selectBlank(array, prompt) {
		if (!array)
			return array;

		prompt = prompt ? '<' + prompt + '>' : '';

		const temp = array.slice(0);
		temp.unshift({ id: null, name: prompt });
		return temp;
	}

	static updateArrayById(array, object) {
		if (!object)
			return;

		// let index = array.findIndex(function(element) {
		// 	return element && element.id == object.id
		// })
		// if (index === -1)
		// 	array.push(object)
		// else
		// 	array[index] = object

		// return array
		const result = [
			...array.filter(element => element.id !== object.id),
			object
		];
		return result;
	}
}

export default Utility;
