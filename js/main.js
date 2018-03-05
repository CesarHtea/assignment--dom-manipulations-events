// GO!

// TASK 1 -- Show/Hide Nav

// TASK 2 -- Select an Icon

const changeBox = document.querySelectorAll(".wish-list .option")
const arrayColor = [...changeBox]
for ( i = 0 ; i < arrayColor.length ; i++ ) {
	arrayColor[i].addEventListener ("click", changeColor)}
function changeColor(e) {
			// console.log("hi hellow")
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
	console.log(event.target.textContent)
	result.textContent = resultNum += number
}


// TASK 4 -- Add Guest to List

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
