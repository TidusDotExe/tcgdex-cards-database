import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Pikachu ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],
	stage: "Basic",
	suffix: "EX",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Circle Circuit"
		},

		effect: {
			en: "This attack does 30 damage for each of your Benched L Pokémon."
		},

		damage: "30x"
	}],

	retreat: 1,
	rarity: "Crown",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
