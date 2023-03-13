import Joi from 'joi';
import ERROR_MESSAGES from '../ErrorMessages';
import { StatusCodes } from 'http-status-codes';

export default class NewComentarySchema {

	public static defaultSchema = Joi.object({
		assistedId: Joi.number().min(1).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.COMENTARY_ASSISTED_ID_NOT_INFORMED}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.COMENTARY_ASSISTED_ID_NOT_INFORMED}`,
		}),
		comentary: Joi.string().min(1).max(254)
			.required()
			.messages({
				'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.COMENTARY_SIZE_TOO_LARGE}`,
				'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.COMENTARY_NOT_INFORMED}`,
			}),
	});

	public static updateSchema = Joi.object({
		id: Joi.number().min(1).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.COMENTARY_ASSISTED_ID_NOT_INFORMED}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.COMENTARY_ASSISTED_ID_NOT_INFORMED}`,
		}),
		assistedId: Joi.number().min(1).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.COMENTARY_ASSISTED_ID_NOT_INFORMED}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.COMENTARY_ASSISTED_ID_NOT_INFORMED}`,
		}),
		comentary: Joi.string().min(1).max(254)
			.required()
			.messages({
				'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.COMENTARY_SIZE_TOO_LARGE}`,
				'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.COMENTARY_NOT_INFORMED}`,
			}),
	});
}