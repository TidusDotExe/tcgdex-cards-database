import { Card } from "../../../interfaces"
import Set from "../Genetic Apex"
import { Mewtwo } from "./boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Gardevoir"
	},

	illustrator: "Yuu Nishida",
	category: "Pokemon",
	hp: 110,
	types: ["Psychic"],
	stage: "Stage2",
	evolveFrom: {
		en: "Kirlia"
	},


	abilities: [{
		type: "Ability",

		name: {
			en: "Psy Shadow"
		},

		effect: {
			en: "Once during your turn, you may take 1 P Energy from your Energy Zone and attach it to the P Pokémon in the Active Spot."
		}
	}],

	attacks: [{
		cost: ["Psychic", "Psychic", "Colorless"],

		name: {
			en: "Psyshot"
		},

		damage: "60"
	}],

	retreat: 2,
	rarity: "Three Diamond",
	boosters: [Mewtwo]
}

export default card
