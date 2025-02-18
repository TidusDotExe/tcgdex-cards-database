import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Giovanni"
	},

	illustrator: "Hideki Ishikawa",
	category: "Trainer",

	effect: {
		en: "During this turn, attacks used by your Pokémon do +10 damage to your opponent's Active Pokémon."
	},

	trainerType: "Supporter",
	rarity: "Two Star",
	boosters: [Mewtwo]
}

export default card
