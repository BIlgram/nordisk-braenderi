function collectionToSelectOptions(collection, key1, key2) {
    return collection.length ? Object.assign(...collection.map(item => ({[item[key1]]: item[key2]}))) : null;
}

export default collectionToSelectOptions;