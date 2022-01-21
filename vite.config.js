import {
	defineConfig
} from 'vite'
import {
	minifyHtml
} from 'vite-plugin-html'
import {
	VitePWA
} from 'vite-plugin-pwa'


export default defineConfig({
	build: {
		minify: 'esbuild',
		target: "esnext"
	},
	plugins: [
		minifyHtml(),
		VitePWA({
			includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png'],
			manifest: {
				name: 'HEARING AID REPAIR SHOP',
				short_name: 'HEARING SHOP',
				description: 'repair all your hearing devices problems',
				theme_color: '#FFA500',
				icons: [{
						src: 'pwa-192x192.png',
						sizes: '192x192',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
					},
					{
						src: 'pwa-512x512.png',
						sizes: '512x512',
						type: 'image/png',
						purpose: 'any maskable',
					}
				]
			},
			registerType: 'autoUpdate',
		})
	],

})