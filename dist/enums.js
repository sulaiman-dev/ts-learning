"use strict";
// Enums is special type in ts which allow us to store set of constants and keywords
// and associate them with a numeric value
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["DIRECTOR"] = 2] = "DIRECTOR";
    ResourceType[ResourceType["FILM"] = 3] = "FILM";
    ResourceType[ResourceType["PERSON"] = 4] = "PERSON";
})(ResourceType || (ResourceType = {}));
const enumDocOne = {
    uid: 1,
    // resourceType: 2, 
    // After defining enums.
    resourceType: ResourceType.AUTHOR,
    data: { title: 'title for data' }
};
const enumDocTwo = {
    uid: 1,
    // resourceType: 5,
    // After defining enums.
    resourceType: ResourceType.DIRECTOR,
    data: { name: 'name for data' }
};
console.log(enumDocOne, enumDocTwo);
