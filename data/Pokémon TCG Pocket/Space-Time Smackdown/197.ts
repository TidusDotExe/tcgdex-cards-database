import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Infernape ex"
	},

	illustrator: "nagimiso",
	rarity: "Two Star",
	category: "Pokemon",
	hp: 170,
	types: ["Fire"],

	evolveFrom: {
		en: "Monferno"
	},

	stage: "Stage2",
	suffix: "EX",

	attacks: [{
		name: {
			en: "Flare Blitz"
		},

		damage: 140,
		cost: ["Fire", "Fire"],

		effect: {
			en: "Discard all <span class=\"energy-text energy-text--type-fire\"></span> Energy from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Water",
		value: "+20"
	}],

	retreat: 0,
		
	boosters: [Palkia]
}

export default card