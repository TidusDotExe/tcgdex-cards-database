import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Exeggutor ex"
	},

	illustrator: "PLANETA CG Works",
	category: "Pokemon",
	hp: 160,
	types: ["Grass"],
	stage: "Stage1",
	evolveFrom: {
		en: "Exeggcute"
	},
	attacks: [{
		cost: ["Grass"],

		name: {
			en: "Stomp"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage."
		},

		damage: "40+"
	}],
	suffix: "EX",
	retreat: 3,
	rarity: "Four Diamond",
	boosters: [Charizard]
}

export default card
