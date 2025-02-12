import { Booster, Set } from '../../interfaces'
import serie from '../Pokémon TCG Pocket'

const set: Set = {
	id: "A1",

	name: {
		// de: "Unschlagbare Gene",
		en: "Genetic Apex",
		// es: "Genes Formidables",
		// fr: "Puissance Génétique",
		// it: "Geni Supremi",
		// pt: "Dominação Genética"
	},

	serie: serie,

	cardCount: {
		official: 226
	},

	releaseDate: "2024-10-30",

	boosters: [{
		name: {
			"en": "Mewtwo",
			"fr": "Mewtwo"
		}
	}, {
		name: {
			"en": "Charizard",
			"fr": "Dracaufeu"
		}
	}, {
		name: {
			"en": "Pikachu",
			"fr": "Pikachu"
		}
	}]
}

export default set
