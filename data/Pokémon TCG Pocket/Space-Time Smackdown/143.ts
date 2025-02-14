import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Regigigas"
	},

	illustrator: "Tomokazu Komiya",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 140,
	types: ["Colorless"],

	description: {
		en: "It is said to have made Pokémon that look like<br />itself from a special ice mountain, rocks,<br />and magma."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Raging Hammer"
		},

		damage: 50,
		cost: ["Colorless", "Colorless", "Colorless", "Colorless"],

		effect: {
			en: "This attack does more damage equal to the damage this Pokémon has on it."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 4,
	
	boosters: [Dialga, Palkia]
}

export default card