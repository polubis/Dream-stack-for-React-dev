import { blogEnv } from '../env';

const getUrl = () => blogEnv.get('NEXT_PUBLIC_API_URL');

export { getUrl };
