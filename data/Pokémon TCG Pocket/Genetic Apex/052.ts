import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard, Mewtwo, Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Centiskorch"
	},

	illustrator: "GOSSAN",
	category: "Pokemon",
	hp: 130,
	types: ["Fire"],
	stage: "Stage1",
	evolveFrom: {
		en: "Sizzlipede"
	},


	attacks: [{
		cost: ["Fire", "Colorless", "Colorless", "Colorless"],

		name: {
			en: "Fire Blast"
		},

		effect: {
			en: "Discard a R Energy from this Pokémon."
		},

		damage: "130"
	}],

	retreat: 3,
	rarity: "Two Diamond",
	boosters: [Mewtwo, Charizard, Pikachu]
}

export default card
