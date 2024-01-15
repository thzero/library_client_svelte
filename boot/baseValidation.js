import BaseBoot from '@thzero/library_client/boot/base.js';

class ValidateBaseBoot extends BaseBoot {
	// eslint-disable-next-line
	async execute(framework, app, store) {
// 		extend('decimal', {
// 			validate: (value, { decimals = '*', separator = '.' } = {}) => {
// 				if (value === null || value === undefined || value === '') {
// 					return {
// 						valid: false
// 					};
// 				}
// 				if (Number(decimals) === 0) {
// 					return {
// 						valid: /^-?\d*$/.test(value)
// 					};
// 				}
// 				const regexPart = decimals === '*' ? '+' : `{1,${decimals}}`;
// 				const regex = new RegExp(`^[-+]?\\d*(\\${separator}\\d${regexPart})?([eE]{1}[-]?\\d+)?$`);
// 				return {
// 					valid: regex.test(value),
// 					data: {
// 						serverMessage: 'Only decimal values are available'
// 					}
// 				};
// 			},
// 			message: '{serverMessage}'
// 		});

// 		extend('name', {
// 			getMessage: field => 'The ' + field + ' field may only contain alphanumeric and space characters',
// 			// eslint-disable-next-line
// 			validate(value, args) {
// 				const regEx = /^[a-zA-Z0-9]+(['\-a-zA-Z0-9 ]*)*$/;
// 				return regEx.test(value);
// 			}
// 		});

// 		extend('tagLine', {
// 			getMessage: field => 'The ' + field + ' field may only contain alphanumeric, space, and punctuation characters',
// 			// eslint-disable-next-line
// 			validate(value, args) {
// 				const regEx = /^[a-zA-Z0-9]+([',.!& \-a-zA-Z0-9 ]*)*$/;
// 				return regEx.test(value);
// 			}
// 		});

		this._initialize();
	}

	// eslint-disable-next-line
	_initialize(extend) {
	}
}

export default ValidateBaseBoot;
