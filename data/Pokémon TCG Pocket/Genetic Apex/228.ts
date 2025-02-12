import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Gloom"
	},

	illustrator: "OKACHEKE",
	category: "Pokemon",
	hp: 80,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Oddish"
	},

	attacks: [{
		cost: ["Grass", "Colorless"],

		name: {
			en: "Drool"
		},

		damage: "40"
	}],

	retreat: 2,
	rarity: "One Star",
	boosters: [Charizard]
}

export default card
