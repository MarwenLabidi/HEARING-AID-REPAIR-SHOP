import './style.css'
import './src/js/dom.js'
import {
	registerSW
} from 'virtual:pwa-register'

// AOS is a scroll animation library
AOS.init({
	delay: 10,
	duration: 700
});

// service worker registration
const updateSW = registerSW({
	onNeedRefresh() {
		alert('Need refresh')
	},
	onOfflineReady() {
		alert('Offline ready')
	},
})