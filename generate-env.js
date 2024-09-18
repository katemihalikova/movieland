const fs = require('fs');
const path = require('path');
const successColor = '\x1b[32m%s\x1b[0m';
const checkSign = '\u{2705}';
require('dotenv').config();

if (!process.env.API_KEY) throw new Error('API_KEY variable is not set. Please set it via environment variable, deployment secret, or .env file.');

const envFile = `export const environment = {
    API_KEY: '${process.env.API_KEY}',
};
`;
const targetPath = path.join(__dirname, './src/environments/environment.ts');
fs.writeFileSync(targetPath, envFile);
console.log(successColor, `${checkSign} Successfully generated environment.ts`);
