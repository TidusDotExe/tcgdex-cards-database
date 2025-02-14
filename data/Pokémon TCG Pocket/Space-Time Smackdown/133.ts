import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Staravia"
	},

	illustrator: "REND",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 80,
	types: ["Colorless"],

	evolveFrom: {
		en: "Starly"
	},

	description: {
		en: "Recognizing their own weakness, they always live<br />in a group. When alone, a Staravia cries noisily."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Wing Attack"
		},

		damage: 40,
		cost: ["Colorless", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Palkia]
}

export default card