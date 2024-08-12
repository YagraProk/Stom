const burger = document.querySelector('.menu__burger');
const menu = document.querySelector('.menu__list');

burger.addEventListener('click', function () {
	burger.classList.toggle('active');
	menu.classList.toggle('open');
})


let html = document.querySelector("html");
document.querySelector(".menu__burger").onclick = function () {
	html.classList.toggle("unscroll");
};

const currentLink = window.location.href;
const links = document.querySelectorAll('.menu__list-link');

for (let i = 0; i < links.length; i++) {
	if (links[i].href === currentLink) {
		links[i].classList.add('menu__list-link_active')
	} else {
		links[i].classList.remove('menu__list-link_active')
	}
}



