import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Spearow"
	},

	illustrator: "Shiburingaru",
	category: "Pokemon",
	hp: 60,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless"],

		name: {
			en: "Peck"
		},

		damage: "20"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Charizard]
}

export default card
