import { Card } from "../../../interfaces"
import Set from "../Space-Time Smackdown"
import { Dialga, Palkia } from "./Boosters"

const card: Card = {
	set: Set,

	name: {
		en: "Wormadam"
	},

	illustrator: "Kouki Saitou",
	rarity: "One Diamond",
	category: "Pokemon",
	hp: 120,
	types: ["Grass"],

	evolveFrom: {
		en: "Burmy"
	},

	description: {
		en: "Its appearance changes depending on where it<br />evolved. The materials on hand become a part of<br />its body."
	},

	stage: "Stage1",

	attacks: [{
		name: {
			en: "Leaf Cutter"
		},

		damage: 60,
		cost: ["Grass", "Colorless", "Colorless"],

		effect: {
			en: "Flip a coin. If heads, this attack does 30 more damage."
		}
	}],

	weaknesses: [{
		type: "Fire",
		value: "+20"
	}],

	retreat: 2,
	
	boosters: [Dialga, Palkia]
}

export default card