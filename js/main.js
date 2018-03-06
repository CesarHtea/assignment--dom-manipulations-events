// GO!

// TASK 1 -- Show/Hide Nav

const navBar = document.querySelector("#hide-nav .nav-menu")

const botonNavBar = document.querySelector("#hide-nav button")

botonNavBar.addEventListener("click" , ocultarNav) 
function ocultarNav() {
	navBar.classList.toggle("nav-menu-hidden")
}

// TASK 2 -- Select an Icon

const changeBox = document.querySelectorAll(".wish-list .option")
// console.log(changeBox)
const arrayColor = [...changeBox]
for ( i = 0 ; i < arrayColor.length ; i++ ) {
	arrayColor[i].addEventListener ("click", changeColor)}
function changeColor(e) {
			// console.log(e.currentTarget)
	const item = e.currentTarget
	item.classList.toggle("selected")
}
 

// TASK 3 -- Move Item From List to List

const itemPlus = document.querySelectorAll(".point")
const arrayPoints = [...itemPlus]
for( let i = 0 ; i < arrayPoints.length ; i++) {
	arrayPoints[i].addEventListener("click", plus)
}
const result = document.querySelector(".total-points")
var resultNum = parseInt(result.textContent)

function plus(event) {
	let number = parseInt(event.target.textContent)
	// console.log(event.target.textContent)
	result.textContent = resultNum += number
}


// TASK 4 -- Add Guest to List

const papaGoodStanding = document.querySelector("#list-2-list .good-standing-list")
// console.log(papaGoodStanding)
const papaProbation = document.querySelector("#list-2-list .probation-list")
// console.log(papaProbation)
arrayOfNames = [...document.querySelectorAll("li")]
// console.log(arrayOfNames)
for ( i = 0 ; i < arrayOfNames.length ; i++) {
	arrayOfNames[i].addEventListener ("click", function(e) {
		if (e.target.parentNode === papaGoodStanding) papaProbation.appendChild(e.target)	
		else papaGoodStanding.appendChild(e.target)  
	})
}


// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List

// console.log("ahora siguen los colores")


arrayDeColores = [...document.querySelectorAll("#change-colors .palette span")]
// console.log(arrayDeColores)
const cuadroTexto = document.querySelector("#change-colors .msg")
// console.log(cuadroTexto)
for ( i = 0 ; i < arrayDeColores.length ; i++ ) {
	arrayDeColores[i].addEventListener("click", function(e) {
		cuadroTexto.classList.remove("bg-yellow")
		cuadroTexto.classList.remove("bg-orange")
		cuadroTexto.classList.remove("bg-red")
		cuadroTexto.classList.remove("bg-green")
		cuadroTexto.classList.remove("bg-purple")
		let nuevoColor = e.target.className
	 	cuadroTexto.classList.add(nuevoColor)
	})
}
