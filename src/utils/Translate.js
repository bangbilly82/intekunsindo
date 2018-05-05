import Translation from '../config/translation';

function translate(key) {
  return Translation[key]
}

export default translate;