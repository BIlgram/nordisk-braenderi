import da from './da';

function translateArray(arr, index) {
  if (index >= arr.length) {
    console.error(`i18n: index not found`);
    return;
  }

  return arr[index];
}

function translateObject(obj, form) {
  if (obj.hasOwnProperty('plural') && form === true || form > 1) {
    return obj.plural;
  } else if (obj.hasOwnProperty('singular')) {
    return obj.singular;
  } else {
    console.error('i18n: translation does not contain any strings');
  }
}

function translate(category, word, form) {
  if (!da.hasOwnProperty(category)) {
    console.error(`i18n: no category named ${category} found`);
    return;
  }

  if (!da[category].hasOwnProperty(word)) {
    console.error(`i18n: no word named ${word} found`);
    return;
  }

  if (Array.isArray(da[category][word])) {
    return translateArray(da[category][word], form);
  } else if (typeof da[category][word] === 'object') {
    return translateObject(da[category][word], form);
  } else {
    return da[category][word];
  }
}

export default translate;