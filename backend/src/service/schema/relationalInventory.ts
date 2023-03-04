import Joi from 'joi';
import ERROR_MESSAGES from '../ErrorMessages';
import { StatusCodes } from 'http-status-codes';

export default class Schema {

	public static defaultSchema = Joi.object({
		assistedId: Joi.string().min(1).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_SIZE_NOT_INFORMED}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_SIZE_NOT_INFORMED}`,
		}),
		inventoryId: Joi.number().min(1).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_QUANTITY_NOT_INFORMED}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_QUANTITY_NOT_INFORMED}`,
		}),
		quantity: Joi.number().min(1)
			.required()
			.messages({
				'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_TYPE_NOT_INFORMED}`,
				'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_TYPE_NOT_INFORMED}`,
			}),
	});

	public static updateSchema = Joi.object({
		assistedId: Joi.string().min(1).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_SIZE_NOT_INFORMED}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_SIZE_NOT_INFORMED}`,
		}),
		inventoryId: Joi.number().min(1).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_QUANTITY_NOT_INFORMED}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_QUANTITY_NOT_INFORMED}`,
		}),
		quantity: Joi.number().min(1)
			.required()
			.messages({
				'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_TYPE_NOT_INFORMED}`,
				'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.PRODUCT_TYPE_NOT_INFORMED}`,
			}),
	});
}