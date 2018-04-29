var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	let result = body.style.background + ";";
    
    if (body.style.background.length > 0
        && body.style.background.indexOf('rgba(0, 0, 0, 0)') !== -1
        && body.style.background.indexOf('repeat scroll 0% 0%') !== -1) {
        result = body.style.background.replace('rgba(0, 0, 0, 0)', '').replace('repeat scroll 0% 0%', '');
    }
    
    css.textContent = result
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);