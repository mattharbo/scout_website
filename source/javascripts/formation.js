// ####################
// Click on formation
// ####################

const formations = document.querySelectorAll(".formtype");

formations.forEach((formation) => {
	formation.addEventListener("click", (event) => {
		//Retrive number of rows
		const teamlines = formation.dataset.form.length;
		//Retrieve the pitch div
		const pitch = document.querySelector(".soccerfield-portrait");
		//beginrow template
		const beginrowtemplate = "<div class='row'><div class='space'></div>";
		//player teamplate
		const playertemplate = "<div class='playerdot'>+</div>";
		//endspacerow template
		const endspacerowtemplate = "<div class='space'></div></div>";
		//Empty the field
		pitch.innerHTML = "";
		//Loop to retrive number of players on each rows
		for (var i = teamlines-1; i > -1; i--) {
			//Create a line for each 
			pitch.insertAdjacentHTML("beforeend",
				beginrowtemplate);

			// console.log(formation.dataset.form[i]);
			const lastrow = document.querySelectorAll(".row");
			for (var j = 0; j < formation.dataset.form[i]; j++) {
				lastrow[lastrow.length-1].insertAdjacentHTML("beforeend",
				playertemplate);
			}
			lastrow[lastrow.length-1].insertAdjacentHTML("beforeend",
				endspacerowtemplate);	
		}
		//Display Goalkeeper
		pitch.insertAdjacentHTML("beforeend",
				beginrowtemplate+playertemplate+endspacerowtemplate);
	});
});
