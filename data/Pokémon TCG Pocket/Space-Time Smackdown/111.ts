import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Skarmory"
	},

	illustrator: "Oswaldo KATO",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Metal"],

	description: {
		en: "People fashion swords from Skarmory's shed<br />feathers, so this Pokémon is a popular element<br />in heraldic designs."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Metal Arms"
		},

		damage: 20,
		cost: ["Metal"],

		effect: {
			en: "If this Pokémon has a Pokémon Tool attached, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Dialga, Palkia]
}

export default card