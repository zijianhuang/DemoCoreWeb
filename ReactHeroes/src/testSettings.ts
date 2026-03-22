import { ThemeLoaderSettings, ThemesDic } from "./themeDef"

interface Site_Config {
	apiBaseUri?: string,
	themesDic?: ThemesDic,
	themeLoaderSettings?: ThemeLoaderSettings
}

declare const SITE_CONFIG: Site_Config

export const AppConfigConstants: Site_Config = {
	...(typeof SITE_CONFIG === 'undefined' ? {} : SITE_CONFIG),
}
