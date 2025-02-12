import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Snorlax"
	},

	illustrator: "HYOGONOSUKE",
	category: "Pokemon",
	hp: 150,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Rollout"
		},

		damage: "70"
	}],

	retreat: 4,
	rarity: "One Star",
	boosters: [Pikachu]
}

export default card
