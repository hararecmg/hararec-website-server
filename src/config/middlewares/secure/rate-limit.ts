import rateLimit from 'express-rate-limit';
import { PERIOD_IN_MINUTES, MAXIMUM_REQUEST_PER_PERIOD } from '../../environments/environment';

export const limiter = rateLimit({
	windowMs: PERIOD_IN_MINUTES * 60 * 1000,
	max: MAXIMUM_REQUEST_PER_PERIOD,
	standardHeaders: true,
	legacyHeaders: false,
})