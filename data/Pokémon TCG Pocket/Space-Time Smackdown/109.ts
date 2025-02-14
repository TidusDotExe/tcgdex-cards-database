import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Darkrai"
	},

	illustrator: "Masako Tomii",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 110,
	types: ["Darkness"],

	description: {
		en: "It chases people and Pokémon from its territory by<br />causing them to experience deep,<br />nightmarish slumbers."
	},

	stage: "Basic",

	attacks: [{
		name: {
			en: "Dark Void"
		},

		damage: 60,
		cost: ["Darkness", "Darkness", "Colorless"],

		effect: {
			en: "Your opponent's Active Pokémon is now Asleep."
		}
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	
	boosters: [Dialga]
}

export default card