import { Card } from "../../../interfaces"
import Set from "../SV8"

const card: Card = {
	set: Set,

	name: {
		ja: "カイデン",
		'zh-tw': "電海燕",
		'zh-cn': "電海燕"
	},

	illustrator: "Pani Kobayashi",
	rarity: "Common",
	category: "Pokemon",
	dexId: [940],
	hp: 60,
	types: ["Lightning"],

	description: {
		ja: "海岸の 崖に 巣を 作る。 巣は パチパチ 弾ける 不思議な 食感で 人気の 珍味。",
		'zh-tw': "會在海岸的懸崖上築巢。 吃起來劈哩啪啦跳的神奇口感， 讓牠的巢成了受歡迎的珍奇美食。",
		'zh-cn': "會在海岸的懸崖上築巢。 吃起來劈哩啪啦跳的神奇口感， 讓牠的巢成了受歡迎的珍奇美食。"
	},

	stage: "Basic",

	attacks: [{
		cost: ["Lightning"],

		name: {
			ja: "つばめがえし",
			'zh-tw': "燕返",
			'zh-cn': "燕返"
		},

		damage: "10+",

		effect: {
			ja: "コインを1回投げオモテなら、20ダメージ追加。",
			'zh-tw': "擲1次硬幣若為正面，則增加20點傷害。",
			'zh-cn': "擲1次硬幣若為正面，則增加20點傷害。"
		}
	}],

	weaknesses: [{
		type: "Lightning",
		value: "×2"
	}],

	resistances: [{
		type: "Fighting",
		value: "-30"
	}],

	retreat: 1,
	regulationMark: "H"
}

export default card