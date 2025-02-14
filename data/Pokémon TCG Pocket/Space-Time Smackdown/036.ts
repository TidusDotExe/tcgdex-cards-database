import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Prinplup"
	},

	illustrator: "Mizue",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Piplup"
	},

	description: {
		en: "It lives alone, away from others. Apparently, every<br />one of them believes it is the most important."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Surf"
		},

		damage: 30,
		cost: ["Water", "Colorless"]
	}],

	weaknesses: [{
		type: "Lightning",
		value: "+20"
	}],

	retreat: 1,
	
	boosters: [Palkia]
}

export default card