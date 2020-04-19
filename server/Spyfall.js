const Game = require("./Game");

class Spyfall {
	constructor(isDevMode) {
		this.games = [];
		if (isDevMode) {
			this.newGame("ffff");
		}
	}

	newGame(code) {
		const theCode = code || this.generateCode();
		const theGame = new Game(theCode, () => this.removeGame(theCode));
		this.games.push(theGame);

		console.log(theCode, "created");

		return theGame;
	}

	findGame = (gameCode) => this.games.find(({ code }) => code === gameCode);

	removeGame = (gameCode) => {
		this.games.splice(
			this.games.findIndex(({ code }) => code === gameCode),
			1
		);
		console.log(gameCode, "removed");
	};

	generateCode() {
		const possible = "abcdefghijklmnopqrstuvwxyz";

		let code;
		do {
			//generate 4 letter code
			code = "";
			for (var i = 0; i < 4; i++) {
				code += possible.charAt(Math.floor(Math.random() * possible.length));
			}
			//make sure the code is not already in use
		} while (this.findGame(code) && code !== "join" && code !== "ffff");
		return code;
	}
}

module.exports = Spyfall;
