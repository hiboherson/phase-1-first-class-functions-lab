// Code your solution in this file!
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2);
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
}

function fareDoubler(fare) {
    return fare * 2;
}

module.exports = fareDoubler;

function fareTripler(fare) {
    return fare * 3;
}

module.exports = fareTripler;

function selectDifferentDrivers(arrayOfDrivers, selectionFunction) {
    return selectionFunction(arrayOfDrivers);
}

module.exports = selectDifferentDrivers;


