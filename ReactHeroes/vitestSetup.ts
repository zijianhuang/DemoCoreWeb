import { SiteConfigConstants } from './src/testSettings';

const settingsPath = process.env['VITEST_MODE'] === "remote" ? './apiConfigConstantsRemote.js' : './apiConfigConstants.js';
console.info('settingsPath: '+ settingsPath);
const settings = await import(settingsPath);
console.info("settings: " + JSON.stringify(settings));
Object.assign(SiteConfigConstants, settings.default);
console.info("API_CONFIG: " + SiteConfigConstants.apiBaseUri);
