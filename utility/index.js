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
}

export default Utility;
