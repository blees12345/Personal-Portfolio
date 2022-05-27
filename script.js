let enlargeArea = document.querySelector('.project-box');
let areaBox = document.querySelectorAll('.box-border');



// modal
// let userEmail = ""
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
}
// save email as variable
closeEmail.addEventListener('click', function(){
	userEmail 
	console.log(userEmail)
})
