import Joi from 'joi';
import ERROR_MESSAGES from '../ErrorMessages';
import { StatusCodes } from 'http-status-codes';

export default class NewAssistedSchema {

	public static defaultSchema = Joi.object({
		size: Joi.number().min(1).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_SIZE_NOT_INFORMED}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_SIZE_NOT_INFORMED}`,
		}),
		quantity: Joi.number().min(1).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_QUANTITY_NOT_INFORMED}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_QUANTITY_NOT_INFORMED}`,
		}),
		type: Joi.string().min(1)
			.required()
			.messages({
				'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_TYPE_NOT_INFORMED}`,
				'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_TYPE_NOT_INFORMED}`,
			}),
		gender: Joi.string().min(6).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_GENDER_NOT_INFORMED}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_GENDER_NOT_INFORMED}`,
		}),
	});
}