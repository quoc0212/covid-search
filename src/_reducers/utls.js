export function getUnique(arr, comp) {
    return arr
        .map(e => e[comp])
        // store the keys of the unique objects
        .map((e, i, final) => final.indexOf(e) === i && i)
        // eliminate the dead keys & store unique objects
        .filter(e => arr[e]).map(e => arr[e]);
}

export function removeElement(arr, comp, val) {
    return arr
        .filter(item => item[comp] !== val);
}

export function merge(arr1, arr2) {
    if (arr1 === null || arr1 === undefined) arr1 = []
    if (arr2 === null || arr2 === undefined) arr2 = []
    return arr1
        .concat(arr2);
}

export function hiddenStr(str, onlyShowQuantity, symbolRpl, showHead = true) {
    return str.length <= onlyShowQuantity ?
        str.replace(/\S/g, symbolRpl)
        : hiddenStrImp(str, onlyShowQuantity, symbolRpl, showHead);
}

export function removeTags(str) {
    if ((str === null) || (str === ''))
        return false;
    else
        str = str.toString();
    return str.replace(/(<([^>]+)>)/ig, '');
}

function hiddenStrImp(str, onlyShowQuantity, symbolRpl, showHead = true) {
    return showHead ?
        str.substring(0, onlyShowQuantity)
        + str.substring(onlyShowQuantity, str.length).replace(/\S/g, symbolRpl)
        : str.substring(0, str.length - onlyShowQuantity).replace(/\S/g, symbolRpl)
        + str.substring(str.length - onlyShowQuantity, str.length);
}

export function getIntersection(a1, a2) {
    return a1.filter(n => a2.some(n2 => n.id == n2.id));
}

export function getUniqueFirst(a1, a2) {
    return a1.filter(n => !a2.some(n2 => n.id == n2.id));
}