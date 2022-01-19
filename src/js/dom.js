const iconGitHub = `<i class="fab fa-github"></i>`
const iconTwitter = `<i class="fab fa-twitter"></i>`
const iconLinkedin = `<i class="fab fa-linkedin"></i>`
const iconList = document.querySelector('#iconList')
const iconMenuBar = document.querySelector('#iconMenuBar')

const twitter = document.createElement('a')
twitter.setAttribute('href', 'https://twitter.com/')
twitter.setAttribute('target', '_blank')
twitter.innerHTML = iconTwitter
twitter.style.color = "#ffffff";
twitter.style.position = "relative"
twitter.style.top = "8px"

const linkedin = document.createElement('a')
linkedin.setAttribute('href', 'https://www.linkedin.com/in/marwen-labidi-5a9082142/')
linkedin.setAttribute('target', '_blank')
linkedin.innerHTML = iconLinkedin
linkedin.style.color = "#ffffff";
linkedin.style.paddingLeft = "20px"
linkedin.style.paddingRight = "20px"
linkedin.style.position = "relative"
linkedin.style.top = "8px"


const github = document.createElement('a')
github.setAttribute('href', 'https://github.com/marwenez')
github.setAttribute('target', '_blank')
github.innerHTML = iconGitHub
github.style.color = "#ffffff";
github.style.position = "relative"
github.style.top = "8px"



const {
	removeElement
} = await import('./utilities.js')
const {
	addElement
} = await import('./utilities.js')



const reset = () => {
	linkedin.classList.remove('fade-in')
	linkedin.classList.add('fade-out')
	github.classList.remove('fade-in')
	github.classList.add('fade-out')
	twitter.classList.remove('fade-in')
	twitter.classList.add('fade-out')
	github.addEventListener('animationend', () => {
		removeElement(github)
	});
	twitter.addEventListener('animationend', () => {
		removeElement(twitter)
	});
	linkedin.addEventListener('animationend', () => {
		removeElement(linkedin)
		addElement(iconMenuBar, iconList)
	});

}
const displayIconList = () => {
	linkedin.classList.remove('fade-out')
	github.classList.remove('fade-out')
	twitter.classList.remove('fade-out')
	removeElement(iconMenuBar)
	addElement(twitter, iconList)
	twitter.classList.add('fade-in')
	addElement(linkedin, iconList)
	linkedin.classList.add('fade-in')
	addElement(github, iconList)
	linkedin.classList.add('fade-in')
	if (window.matchMedia("(max-width: 700px)").matches) {
		setTimeout(reset, 6000)
	}

}
iconMenuBar.addEventListener('click', displayIconList)


if (window.matchMedia("(min-width: 700px)").matches) {
	displayIconList()
}


// sending mail 
const userMail = document.querySelector('input[type="email"]')
const body = document.querySelector('textarea')
const sendMail = document.querySelector('button[type="submit"]')
// google acount should have acces to third part app and unsecure app
sendMail.addEventListener('click', (e) => {
	e.preventDefault();
	Email.send({
		SecureToken: "ae3ceb8c-b1e4-400a-839e-3fb80c22c30e",
		To: 'marwen.abidi@etudiant-isi.utm.tn',
		From: "labidimarwen6@gmail.com",
		Subject: "This is the subject",
		Body: "body.value"
	}).then(
		message => alert(message)
	);
})