import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Floatzel"
	},

	illustrator: "Kanako Eo",
	rarity: "Two Diamond",
	category: "Pokemon",
	hp: 90,
	types: ["Water"],

	evolveFrom: {
		en: "Buizel"
	},

	description: {
		en: "With its flotation sac inflated, it can carry people<br />on its back. It deflates the sac before it dives."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Jet Screw"
		},

		damage: 30,
		cost: ["Water"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
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