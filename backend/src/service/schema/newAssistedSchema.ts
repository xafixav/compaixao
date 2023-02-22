import Joi from 'joi';
import ERROR_MESSAGES from '../ErrorMessages';
import { StatusCodes } from 'http-status-codes';

export default class NewAssistedSchema {

	public static defaultSchema = Joi.object({
		assistedId: Joi.number().min(1).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_ID_MISSING}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_ID_MISSING}`,
		}),
		name: Joi.string().min(1)
			.required()
			.messages({
				'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_NAME_MISSING}`,
				'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_NAME_MISSING}`,
			}),
		bornAge: Joi.string().min(6).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_BORN_AGE_MISSING}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_BORN_AGE_MISSING}`,
		}),
		bornCity: Joi.string().min(3).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_BORN_CITY_MISSING}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_BORN_CITY_MISSING}`,
		}),
		bornState: Joi.string().min(3).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_BORN_STATE_MISSING}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_BORN_STATE_MISSING}`,
		}),
		cpf: Joi.string().min(11).max(11).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.CPF_MUST_BE_11_DIGITS}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.CPF_MUST_BE_11_DIGITS}`,
			'string.max': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.CPF_MUST_BE_11_DIGITS}`,
		}),
		livingState: Joi.string().min(3).required().messages({
			'any.required': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_LIVING_STATE_MISSING}`,
			'string.min': `${StatusCodes.BAD_REQUEST}|${ERROR_MESSAGES.ASSISTED_LIVING_STATE_MISSING}`,
		}),
	});
}