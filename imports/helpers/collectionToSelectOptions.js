function collectionToSelectOptions(collection, key1, key2) => {
    return Object.assign(...collection.map(item => ({[item[key1]]: item[key2]})))
}

export default collectionToSelectOptions;