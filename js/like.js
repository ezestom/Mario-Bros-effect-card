const img = document.querySelector(".img-like");
const icon = document.querySelector("svg");

img.addEventListener("dblclick", function () {
	icon.classList.add("like-icon");
	setTimeout( () => {
		icon.classList.remove("like-icon");
	}, 1000);
});
