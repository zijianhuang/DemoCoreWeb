const SITE_CONFIG = {
	apiBaseUri: 'http://localhost:5000/',
	themesDic: {
		"assets/themes/light-theme.css": { display: "Light", dark: false },
		"assets/themes/dark-theme.css": { display: "Dark", dark: true }
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