let enlargeArea = document.querySelector('.project-box');
let areaBox = document.querySelectorAll('.box-border');

enlargeArea.addEventListener("mouseover",function(event){
	event.target.style.border = "thick solid gray"
	
})



// modal

let modal = document.querySelector('.modal')
let email = document.querySelector('.email');
let closeEmail = document.querySelector('.submit');



email.onclick = function(){
	modal.style.display = "block"
}

closeEmail.onclick = function(e){
	e.preventDefault();
	modal.style.display = "none";
	userEmail = document.querySelector('.emailinput').value;
	userMessege = document.querySelector('.messege').value;

}
// save email as variable
closeEmail.addEventListener('click', function(){
	userEmail;
	userMessege;

	console.log(userMessege);
	console.log(userEmail)

})

const body = document.body;
let lastScroll = 0;

window.addEventListener('scroll', () => {
	const currentScroll = window.pageYOffset;
	if (currentScroll <= 0) {
		body.classList.remove('scroll-up');
		return;
	}

	if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
		body.classList.remove('scroll-up');
		body.classList.add('scroll-down');
	} else if (
		currentScroll < lastScroll &&
		body.classList.contains('scroll-down')
	) {
		body.classList.remove('scroll-down');
		body.classList.add('scroll-up');
	}
	lastScroll = currentScroll;
});
