import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Charizard } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Charizard ex"
	},

	illustrator: "kantaro",
	category: "Pokemon",
	hp: 180,
	types: ["Fire"],
	stage: "Stage2",
	evolveFrom: {
		en: "Charmeleon"
	},
	suffix: "EX",

	attacks: [{
		cost: ["Fire", "Colorless", "Colorless"],

		name: {
			en: "Slash"
		},

		damage: "60"
	}, {
		cost: ["Fire", "Fire", "Colorless", "Colorless"],

		name: {
			en: "Crimson Storm"
		},

		effect: {
			en: "Discard 2 R Energy from this Pokémon."
		},

		damage: "200"
	}],

	retreat: 2,
	rarity: "Three Star",
	boosters: [Charizard]
}

export default card
