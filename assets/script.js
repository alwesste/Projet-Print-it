const banner = document.querySelector(".banner-img");
const tagLine = document.querySelector(".tag");
const dots = document.querySelectorAll('.dot');

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


let i = 0;
let numSlides = 4;

const arrow_right = document.querySelector(".arrow_right");
arrow_right.addEventListener("click", toRight);

const arrow_left = document.querySelector(".arrow_left");
arrow_left.addEventListener("click", toLeft)


function toRight() {
	// if (i >= 2) {
	// 	i = 0
	// }else {
	// 	i++
	// }	

	i = (i + 1) % numSlides;
	dots.forEach(item => item.classList.remove("dot_selected"))
	banner.src = "assets/images/slideshow/" + slides[i].image;
	tagLine.innerHTML = slides[i].tagLine;
	dots[i].classList.add("dot_selected")
};


function toLeft() {
	dots.forEach(item => item.classList.remove("dot_selected"))
	i = (i - 1 + numSlides) % numSlides;
	banner.src = "assets/images/slideshow/" + slides[i].image;
	tagLine.innerHTML = slides[i].tagLine
	dots[i].classList.add("dot_selected")
}



// for (let i = 1; i < slides.length; i++ ) {
//     const banner = document.getElementById("banner");

//     const otherBanner = document.createElement("img");
//     otherBanner.src = "assets/images/slideshow/" + slides[i].image; //slide.image
//     otherBanner.classList.add("banner-img");
// 	otherBanner.style.display = "none";
// 	banner.appendChild(otherBanner);
	
// 	const nouveauTag = document.createElement("p");
// 	nouveauTag.classList.add("tag")	;
// 	nouveauTag.innerHTML = slides[i].tagLine;
// 	nouveauTag.style.display = "none";
// 	banner.appendChild(nouveauTag);
// }

// // slides.forEach(slide) => {
	
// // }

// let i = 0;
// let numSlides = 4;
// console.log("debut de right " + i)
// let arrow_right = document.querySelector(".arrow_right");
// arrow_right.addEventListener("click", toRight); 

// console.log("debut de left " + i)
// let arrow_left = document.querySelector(".arrow_left");
// arrow_left.addEventListener("click", toLeft); 


// function toRight() {

// document
// 	.querySelector(".dot_selected")
// 	.classList.remove("dot_selected");
// document
// 	.getElementsByClassName("banner-img")[i]
// 	.style.display = "none";
// document
// 	.getElementsByClassName("tag")[i]
// 	.style.display = "none";

// i = (i + 1) % numSlides;

// document
// 	.getElementsByClassName("dot")[i]
// 	.classList.add("dot_selected");
// document
// 	.getElementsByClassName("banner-img")[i]
// 	.style.display = "block";
// document
// 	.getElementsByClassName("tag")[i]
// 	.style.display = 'block';
// }

// function toLeft() {

// document
// 	.querySelector(".dot_selected")
// 	.classList.remove("dot_selected");
// document
// 	.getElementsByClassName("banner-img")[i]
// 	.style.display = "none";
// document
// 	.getElementsByClassName("tag")[i]
// 	.style.display = "none";

// i = (i - 1 + numSlides) % numSlides;

// document
// 	.getElementsByClassName("dot")[i]
// 	.classList.add("dot_selected");
// document
// 	.getElementsByClassName("banner-img")[i]
// 	.style.display = "block";
// document
// 	.getElementsByClassName("tag")[i]
// 	.style.display = 'block';
// }