interface Site_Config {
	apiBaseUri?: string
}

declare const SITE_CONFIG: Site_Config

export const AppConfigConstants: Site_Config = {
	...(typeof SITE_CONFIG === 'undefined' ? {} : SITE_CONFIG),
}
