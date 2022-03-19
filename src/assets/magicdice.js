class SingleDice {
	constructor(string = "d20") {
		this.string = string; // the string value of the dice roll
		this.list = []; // list of dice rolls
		this.stats = SingleDice.cvt(string); // the iterator, face, etc.
		this.roll(); // roll numbers
	}
	static cvt(diceRoll) {
		diceRoll = diceRoll.toLowerCase();
		let diceObj = {};
		if (diceRoll.includes("->")) {
			diceObj.foreach_modifier = parseInt(diceRoll.split("->")[1]);
		}
		diceRoll = diceRoll.split("d");
		diceObj.iterator = diceRoll[0] != "" ? parseInt(diceRoll[0]) : 1;
		diceObj.face = parseInt(diceRoll[1]);
		if (isNaN(diceObj.iterator) || isNaN(diceObj.face)) {
			throw Error("Invalid dice roll!");
		}
		return diceObj;
	}
	serialise() {
		return `${this.stats.iterator}d${this.stats.face}${
			this.stats.foreach_modifier ? "->" + this.stats.foreach_modifier : ""
		}`;
	}
	roll() {
		let num;
		this.list = [];
		for (let i = 0; i < this.stats.iterator; i++) {
			num = Math.floor(Math.random() * this.stats.face) + 1;
			if (this.stats.foreach_modifier) num += this.stats.foreach_modifier; // add modifier to each roll
			this.list.push(num); // populate list with random numbers
		}
		return this.total; // return result
	}
	addDice(number) {
		this.stats.iterator += number; // add x dice
		this.string = this.serialise(this.stats); // convert and set
		this.roll(); // reset
		return this;
	}
	reRoll(value) {
		const index = this.list.indexOf(value);
		if (index != -1) {
			this.list[index] = Math.floor(Math.random() * this.stats.face) + 1;
			return this.list[index];
		}
		return false;
	}
	get total() {
		if (this.stats.iterator <= 0) return 0;
		else return this.list.reduce((a, b) => a + b);
	}
	get max() {
		return this.stats.face * this.stats.iterator; // 8d6 -> 6 * 8
	}
}

class diceRoll {
	constructor(dice = "d20", opts = {}) {
		const { x = document.body.clientWidth / 2 - 225, y = 150 } = opts;
		this.pos = {
			x,
			y,
		};
		this.dice = dice;
		this.roll();
	}
	generateList() {
		const regexp = /\d*d\d+(?:->\-*\d+)*/g; // used to detect dice rolls
		const list = []; // list of dice rolls
		let val;
		do {
			val = regexp.exec(this.dice); // extract all dice
			if (val) list.push(new SingleDice(val[0])); // put them in the list
		} while (val);
		this.list = list; // set
	}
	get verboseList() {
		const newList = [];
		this.list.forEach((x) => {
			x.list.forEach((v) => {
				newList.push(v);
			});
		});
		return newList; // return an array of every dice roll from every set of dice
	}
	get max() {
		let text = this.dice;
		this.list.forEach((x) => {
			text = text.replace(x.string, x.max); // replace all dice rolls with the rolled equivelent
		});
		return Number(eval(text));
	}
	get compText() {
		let text = this.dice;
		this.list.forEach((x) => {
			text = text.replace(x.string, x.total); // replace all dice rolls with the rolled equivelent
		});
		return text;
	}
	get total() {
		try {
			return Number(eval(this.compText));
		} catch (err) {
			throw err;
		}
	}
	roll() {
		try {
			// roll each set of dice
			this.generateList();
			return this.total; // return total
		} catch (err) {
			return console.error(
				`Something went wrong while rolling the dice! (${err})`
			);
		}
	}
	show() {
		this.list.forEach((x) => {
			console.log(`Dice Roll (${x.string})`);
			if (x.stats.foreach_modifier) {
				console.log("Modifier (+" + x.stats.foreach_modifier + ")");
			}
			x.list.forEach((x, i) => {
				console.log(`Roll ${i + 1}: ${x}`);
			});
		});
		console.log(`Total = ${this.compText}`);
		console.log("Total roll: " + this.total);
	}
	static isThisValid(input) {
		try {
			diceRoll.r(input, true);
			return true;
		} catch (err) {
			return false;
		}
	}
	static r(arg, mute = false) {
		return diceRoll.x(arg, mute).total; // return total of the dice roll only
	}
	static x(arg, mute = false) {
		try {
			const dice = new diceRoll(arg);
			if (!mute) dice.show();
			return dice;
		} catch (err) {
			console.error(err);
		}
	}
	static cvt(roll) {
		return SingleDice.cvt(roll);
	}
	static diceObj(string) {
		return new SingleDice(string);
	}
}

module.exports = {
	magicDice: diceRoll,
};
