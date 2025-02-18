import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Zapdos"
	},

	illustrator: "Hitoshi Ariga",
	category: "Pokemon",
	hp: 130,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning", "Colorless"],

		name: {
			en: "Raging Thunder"
		},

		effect: {
			en: "This attack also does 30 damage to 1 of your Benched Pokémon."
		},

		damage: "100"
	}],

	retreat: 1,
	rarity: "Three Diamond",
	boosters: [Pikachu]
}

export default card
