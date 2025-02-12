import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Grapploct"
	},

	illustrator: "kurumitsu",
	category: "Pokemon",
	hp: 130,
	types: ["Fighting"],
	stage: "Stage1",
	evolveFrom: {
		en: "Clobbopus"
	},


	attacks: [{
		cost: ["Fighting", "Fighting", "Colorless"],

		name: {
			en: "Knock Back"
		},

		effect: {
			en: "Switch out your opponent's Active Pokémon to the Bench. (Your opponent chooses the new Active Pokémon.)"
		},

		damage: "70"
	}],

	retreat: 3,
	rarity: "Two Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
