import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Oddish"
	},

	illustrator: "Asako Ito",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 60,
	types: ["Grass"],

	description: {
		en: "If exposed to moonlight, it starts to move.<br />It roams far and wide at night to scatter its seeds."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Blot"
		},

		damage: 10,
		cost: ["Grass"],

		effect: {
			en: "Heal 10 damage from this Pokémon."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 1,

	boosters: [Dialga, Palkia]
}

export default card