import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Parasect"
	},

	illustrator: "Eri Yamaki",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Paras"
	},

	attacks: [{
		cost: ["Grass", "Grass", "Colorless"],

		name: {
			en: "Slash"
		},

		damage: "80"
	}],

	retreat: 2,
	rarity: "Two Diamond",
	boosters: [Pikachu]
}

export default card
