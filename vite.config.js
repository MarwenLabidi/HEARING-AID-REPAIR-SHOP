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
			includeAssets: ['favicon.svg', 'favicon.ico', 'robots.txt', 'apple-touch-icon.png','photo1.jpeg','photo2.jpeg','photo3.jpeg','64.jpg','62.jpg','63.jpg','61.jpg'],
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
			workbox: {
				runtimeCaching: [{
						urlPattern: /https:\/\/unpkg\.com\/aos@next\/dist\//i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'aos-library-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
							},
							cacheableResponse: {
								statuses: [0, 200]
							}
						}
					},
					{
						urlPattern: /https:\/\/cdnjs\.cloudflare\.com\/ajax\/libs\/font-awesome\/5\.13\.0\/css\/all\.min\.css/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'icon-font-awesome-cache',
							expiration: {
								maxEntries: 10,
								maxAgeSeconds: 60 * 60 * 24 * 365 // <== 365 days
							},
							cacheableResponse: {
								statuses: [0, 200]
							},
						}
					}
				]
			}
		})
	],

})