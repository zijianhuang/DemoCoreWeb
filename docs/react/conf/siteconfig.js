const SITE_CONFIG = {
	apiBaseUri: 'https://heroes.fonlow.net/webapi/'
}

const THEME_CONFIG = {
	themesDic: {
		"assets/themes/light-theme.css": { display: "Light", dark: false },
		"assets/themes/dark-theme.css": { display: "Dark", dark: true },
		"assets/themes/pink-theme.css": { display: "Pink", dark: false }
	},
	themeLoaderSettings: {
		storageKey: 'app.theme',
		themeLinkId: 'theme',
		appColorsDir: 'conf/',
		appColorsLinkId: 'app-colors',
		colorsCss: 'colors.css',
		colorsDarkCss: 'colors-dark.css'
	}
}