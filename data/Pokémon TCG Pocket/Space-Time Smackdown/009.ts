import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Roserade"
	},

	illustrator: "Masakazu Fukuda",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 100,
	types: ["Grass"],

	evolveFrom: {
		en: "Roselia"
	},

	description: {
		en: "After captivating opponents with its sweet scent,<br />it lashes them with its thorny whips."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Poisonous Whip"
		},

		damage: 50,
		cost: ["Grass", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Poisoned."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	
	boosters: [Dialga, Palkia]
}

export default card