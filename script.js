const buttonMario = document.querySelector(".buttonMario");
const buttonLuigi = document.querySelector(".buttonLuigi");
const sliderImages = document.querySelectorAll(".slider img");
let currentIndex = 0;

buttonMario.addEventListener("click", function () {
	showPreviousImage();
});

buttonLuigi.addEventListener("click", function () {
	showNextImage();
});

function showPreviousImage() {
	sliderImages[currentIndex].style.display = "none";
	currentIndex =
		(currentIndex - 1 + sliderImages.length) % sliderImages.length;
	sliderImages[currentIndex].style.display = "block";
}

function showNextImage() {
	sliderImages[currentIndex].style.display = "none";
	currentIndex = (currentIndex + 1) % sliderImages.length;
	sliderImages[currentIndex].style.display = "block";
}
