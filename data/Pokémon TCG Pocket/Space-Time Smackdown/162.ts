import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Manaphy"
	},

	illustrator: "miki kudo",
	rarity: "One Star",
	category: "Pokemon",
	hp: 50,
	types: ["Water"],

	description: {
		en: "It is born with a wondrous power that lets it bond<br />with any kind of Pokémon."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Oceanic Gift"
		},

		cost: ["Water"],

		effect: {
			en: "Choose 2 of your Benched Pokémon. For each of those Pokémon, take a <span class=\"energy-text energy-text--type-water\"></span> Energy from your Energy Zone and attach it to that Pokémon."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Palkia]
}

export default card