const listOfAllPlayers = document.querySelectorAll(".players-listing li");

const selectedplayerofthelist = listOfAllPlayers[5];

selectedplayerofthelist.classList.add("player-selected");

const numberofplayers = listOfAllPlayers.length;

// const newPlayersBtn = document.querySelector(".new-player")
// newPlayersBtn.insertAdjacentHTML("beforebegin","<li class='player-item'>Matthieu Harbonnier</li>");

// ####################
// Click on the pitch
// ####################

const pitch = document.querySelector(".soccerfield-landscape");

const printPointer = (x,y) => {
	const abscissa = x-9;
	const ordinate = y-23
	pitch.insertAdjacentHTML("beforeend",
		"<img class='pitch_pointer' src='./images/pointer.png' style='left:"+abscissa+"px;top:"+ordinate+"px'>");
	const lastPointer = document.querySelector(".pitch_pointer");
};

const printPointerEvent = (event) => {
	// console.log(event); //ONLY to view what are the event attributes
	// console.log(`Pitch click coords:${event.offsetX}/${event.offsetY}`); //Show coords in the browser console
	document.querySelector(".coords").innerText =
		(`x=${event.offsetX} (${Math.round(0.2*(event.offsetX-20))}m) / y=${event.offsetY}`);
	printPointer(event.offsetX,event.offsetY);
};

pitch.addEventListener("click", printPointerEvent);

// ####################
// Click on the player
// ####################

const addPlayerBtn = document.querySelector(".new-player");

const printNewPlayer = (event) => {
	addPlayerBtn.insertAdjacentHTML("beforebegin",
		"<li class='player-item'>New player</li>");
}

addPlayerBtn.addEventListener("click", printNewPlayer);