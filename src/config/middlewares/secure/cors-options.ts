import { TRUSTED_URLS } from "../../environments/environment";
import cors, { CorsOptions } from 'cors';

const corsOptions: CorsOptions  = {
  origin: function (origin, callback) {
    TRUSTED_URLS.includes(origin || '')
      ? callback(null, true)
      : callback(new Error('Not allowed by CORS'));
  }
}

export const customCors = cors(corsOptions);