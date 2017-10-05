
// Global variables
// 1: initial state (menu unlocked, board locked)
//2: taking turns (menu locked, board unlocked)
//3: done, waiting for restart. (menu unlocked, board locked)
var state = 0; 
var board;

function startGame(p1, p2) {
	//Accept 2 objects for the players
	//Start the game

	// Do some stuff...

	initializeData();
	drawMenu();
	drawBoard();
}

function initializeData () {
	//
}

function drawMenu() {
	//
}

function drawBoard() {
	//
}

function checkForWin() {

	var isGameWon = false;
	// Check for win criteria.

	if (gameWasWon) {

		updateMessage();
		saveResults();
		prompForNewGame();

	}
	else {
		// Game not won
		// Play contines
	}
}

function checkForDraw() {
	
	var gameWasDrawn = false;
	//Check for full board

	if(gameWasDrawn) {

		updateMessage();
		saveResults();
		PromptForNewGame();
	}
}

function updateMessage() {
	//
}

function saveResults() {
	//
}

















