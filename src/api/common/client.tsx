import { Env } from 'src/core/env';
import axios from 'axios';
export const client = axios.create({
	baseURL: Env.API_URL,
});
