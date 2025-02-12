import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Pikachu } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Electabuzz"
	},

	illustrator: "Ryuta Fuse",
	category: "Pokemon",
	hp: 70,
	types: ["Lightning"],
	stage: "Basic",

	attacks: [{
		cost: ["Lightning", "Lightning"],

		name: {
			en: "Thunder Punch"
		},

		effect: {
			en: "Flip a coin. If heads, this attack does 40 more damage. If tails, this Pokémon does 20 damage to itself."
		},

		damage: "40+"
	}],

	retreat: 1,
	rarity: "One Diamond",
	boosters: [Pikachu]
}

export default card
