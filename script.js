let enlargeArea = document.querySelector('.project-box');
let areaBox = document.querySelectorAll('.box-border')

enlargeArea.addEventListener('mouseover', function () {
	for (let i = 0; i < areaBox.length; i++) {
		areaBox[i].style.borderWidth = '10px';
	}
    console.log('mosue over')
});