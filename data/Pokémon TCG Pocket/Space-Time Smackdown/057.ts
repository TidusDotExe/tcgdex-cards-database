import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Electivire"
	},

	illustrator: "kawayoo",
	rarity: "Three Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Lightning"],

	evolveFrom: {
		en: "Electabuzz"
	},

	description: {
		en: "The amount of electrical energy this Pokémon<br />produces is proportional to the rate of its pulse.<br />The voltage jumps while Electivire is battling."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Exciting Voltage"
		},

		damage: 40,
		cost: ["Lightning", "Lightning"],

		effect: {
			en: "If this Pokémon has at least 2 extra <span class=\"energy-text energy-text--type-lightning\"></span> Energy attached, this attack does 80 more damage."
		}
	}],

	weaknesses: [{
		type: "Fighting",
		value: "+20"
	}],

	retreat: 3,
	
	boosters: [Dialga]
}

export default card