// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: '2025-07-15',
	devtools: { enabled: true },
	css: [
		'@fortawesome/fontawesome-free/css/all.css',
		'~/assets/scss/main.scss',
		'~/assets/scss/style.scss'
	],
	app: {
		head: {
			htmlAttrs: { lang: 'th' },
			title: 'EasyList Thailand',
			meta: [
				// `charset` and `viewport` are provided by Nuxt by default.
				{
					name: 'description',
					content: 'รายการตัวกรอง EasyList สำหรับประเทศไทย'
				},
				{ property: 'og:title', content: 'EasyList Thailand' },
				{
					property: 'og:description',
					content: 'รายการตัวกรอง EasyList สำหรับประเทศไทย'
				},
				{ property: 'og:type', content: 'website' },
				{
					property: 'og:url',
					content: 'https://easylist-thailand.github.io/'
				},
				{ property: 'og:locale', content: 'th_TH' }
			],
			link: [
				{ rel: 'preconnect', href: 'https://fonts.googleapis.com' },
				{
					rel: 'preconnect',
					href: 'https://fonts.gstatic.com',
					crossorigin: ''
				},
				{
					rel: 'stylesheet',
					href: 'https://fonts.googleapis.com/css2?family=Courgette&family=Taviraj:wght@400;500;600;700&display=swap'
				}
			],
			// Apply the persisted theme before first paint to avoid a flash of the
			// wrong theme in the statically generated build.
			script: [
				{
					// eslint-disable-next-line @typescript-eslint/naming-convention -- `innerHTML` is the property name required by Nuxt's head API
					innerHTML: `(function(){try{var t=localStorage.getItem('theme');if(t!=='light'&&t!=='dark'){t=window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light';}document.documentElement.setAttribute('data-theme',t);}catch(e){}})();`
				}
			]
		}
	}
});
