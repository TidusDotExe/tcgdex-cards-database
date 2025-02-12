import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Lt. Surge"
	},

	illustrator: "nagimiso",
	category: "Trainer",

	effect: {
		en: "Move all L Energy from your Benched Pokémon to your Raichu, Electrode or Electabuzz in the Active Spot."
	},

	trainerType: "Supporter",
	rarity: "Two Star",
	boosters: [Pikachu]
}

export default card
