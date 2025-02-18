import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Misty"
	},

	illustrator: "Sanosuke Sakuma",
	category: "Trainer",

	effect: {
		en: "Choose 1 of your W Pokémon, and flip a coin until you get tails. For each heads, take a W Energy from your Energy Zone and attach it to that Pokémon."
	},

	trainerType: "Supporter",
	rarity: "Two Star",
	boosters: [Pikachu]
}

export default card
