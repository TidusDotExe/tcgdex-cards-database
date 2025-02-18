import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Clefairy"
	},

	illustrator: "kirisAki",
	category: "Pokemon",
	hp: 60,
	types: ["Psychic"],
	stage: "Basic",

	attacks: [{
		cost: ["Psychic"],

		name: {
			en: "Slap"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Pikachu]
}

export default card
