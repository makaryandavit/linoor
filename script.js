document.getElementById('burgerMenu').onclick = function() {
	document.getElementById('menuBtn').classList.toggle('active');
	document.getElementById('body').classList.toggle('lock');
  }

document.getElementById('closeBtn').onclick = function() {
	document.getElementById('menuBtn').classList.remove('active');
	document.getElementById('body').classList.remove('lock');
  } 

  window.onscroll = () => {
	const nav = document.querySelector('.top-1nav');
	const Y = window.scrollY;

	if	(Y > 80) {
		nav.classList.add('fixed');
	} else{
		nav.classList.remove('fixed');
	}
}