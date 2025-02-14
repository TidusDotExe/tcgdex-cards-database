import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Tangela"
	},

	illustrator: "Narumi Sato",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 70,
	types: ["Grass"],

	description: {
		en: "Hidden beneath a tangle of vines that grows<br />nonstop even if the vines are torn off, this<br />Pokémon's true appearance remains a mystery."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Vine Whip"
		},

		damage: 30,
		cost: ["Grass", "Colorless"]
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Dialga]
}

export default card