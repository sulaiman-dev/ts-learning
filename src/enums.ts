// Enums is special type in ts which allow us to store set of constants and keywords
// and associate them with a numeric value

enum ResourceType {BOOK, AUTHOR, DIRECTOR, FILM, PERSON}

interface ResourceForEnums<T> {
    uid: number;
    resourceType: number;
    data: T;
}

const enumDocOne: ResourceForEnums<object> = {
    uid: 1,
    // resourceType: 2, 
    // After defining enums.
    resourceType: ResourceType.AUTHOR,
    data: {title: 'title for data'}
}
const enumDocTwo: ResourceForEnums<object> = {
    uid: 1,
    // resourceType: 5,
    // After defining enums.
    resourceType: ResourceType.DIRECTOR,
    data: {name: 'name for data'}
}
console.log(enumDocOne, enumDocTwo)