import axios from 'axios';
import { RM_API_BASE_URL } from '../constants/api';

const publicClient = axios.create({ baseURL: RM_API_BASE_URL });

const privateClient = axios.create({ baseURL: RM_API_BASE_URL, withCredentials: true });

export { publicClient, privateClient };
