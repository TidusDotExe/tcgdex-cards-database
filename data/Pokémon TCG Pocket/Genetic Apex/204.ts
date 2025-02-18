import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Tauros"
	},

	illustrator: "kodama",
	category: "Pokemon",
	hp: 100,
	types: ["Colorless"],
	stage: "Basic",

	attacks: [{
		cost: ["Colorless", "Colorless"],

		name: {
			en: "Horn Attack"
		},

		damage: "50"
	}],

	retreat: 2,
	rarity: "Two Diamond",
	boosters: [Charizard]
}

export default card
