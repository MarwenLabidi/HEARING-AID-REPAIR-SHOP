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

//Add to Home Screen Prompt

const header = document.querySelector('header');
const btnInstall=document.createElement('button');
btnInstall.classList.add('btn-install');
btnInstall.innerHTML='install';


let installPromptEvent;

window.addEventListener('beforeinstallprompt', (event) => {
	installPromptEvent = event;
	header.insertBefore(btnInstall,header.firstChild);
});


btnInstall.addEventListener('click', () => {
	installPromptEvent.prompt();
	btnInstall.style.display = 'none';
});

window.addEventListener('appinstalled', () => {
	btnInstall.remove();
	deferredPrompt = null;
});