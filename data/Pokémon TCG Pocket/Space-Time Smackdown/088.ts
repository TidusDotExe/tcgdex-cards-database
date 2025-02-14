import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Cranidos"
	},

	illustrator: "Kouki Saitou",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Fighting"],

	evolveFrom: {
		en: "Skull Fossil"
	},

	description: {
		en: "A primeval Pokémon, it possesses a hard and<br />sturdy skull, lacking any intelligence within."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Headbutt"
		},

		damage: 50,
		cost: ["Fighting"]
	}],

	weaknesses: [{
		type: "Grass",
		value: "+20"
	}],

	retreat: 2,
	
	boosters: [Dialga]
}

export default card