// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);

}
console.log(returnFirstTwoDrivers(['Antonia','Nuru','Amari','Mo']));


const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);

}
console.log(returnFirstTwoDrivers(['Antonia','Nuru','Amari','Mo']));



const selectingDrivers=[
    returnFirstTwoDrivers,returnLastTwoDrivers
    

]

function createFareMultiplier(factor){
    return function(fare){
        return fare*factor;
    }

}
const quadrupler = createFareMultiplier(4);
quadrupler(10)


const fareDoubler = createFareMultiplier(2);


const fareTripler = createFareMultiplier(3);



function selectDifferentDrivers(drivers,driversSelector){
    return driversSelector(drivers);
}