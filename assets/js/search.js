export function findElementById(id) {
    // Return the element in the DOM with corresponding `id`
    return document.getElementById(id);

}

export function findFirstElementOfTag(tag) {
    // Return the first occurence of an element of tag name `tag`

    return document.querySelector(tag).innerHTML;
}

export function findFirstElementOfClass(cls) {
    // Return the first occurence of an element of class `cls`

    return document.querySelector(`.${cls}`).innerHTML;
}

export function findElementsOfTag(tag) {
    // Return an array of elements that have a tag name of `tag`

    const elements = document.getElementsByTagName(tag);
    const array = [];
    for (const element of elements) {
        array.push(element.innerHTML);
    }
    return array;
}

export function findElementsOfClass(cls) {
    // Return an array of elements that have are of class `cls`

    const elements = document.getElementsByClassName(cls);
    const array = [];
    for (const element of elements) {
        array.push(element.innerHTML)
    }
    return array;
}
