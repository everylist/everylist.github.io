import en from './lang/en'
import de from './lang/de'
import fr from './lang/fr'
import es from './lang/es'
import it from './lang/it'

const language = navigator.language ? navigator.language.substr(0, 2) : 'en'
const resources = {en, de, fr, es, it}

function t(text) {
    if (typeof resources[language]['translations'][text] === 'undefined') { return text }
    return resources[language]['translations'][text]
}

export default t
