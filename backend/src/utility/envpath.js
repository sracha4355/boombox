import dotenv from 'dotenv'
import path from 'path'

export const envConfig = () => {
	dotenv.config({ path: path.join('../../', '.env') });
}

