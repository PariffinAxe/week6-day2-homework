const Park = function (name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurs = [];
};

Park.prototype.add = function(dinosaur){
    this.dinosaurs.push(dinosaur)
}

Park.prototype.remove = function(dinosaur){
    let index = this.dinosaurs.indexOf(dinosaur);
    this.dinosaurs.splice(index, 1);
}

Park.prototype.findMostAttractiveDinosaur = function(){
    let biggestAttraction = this.dinosaurs[0];
    for (let i=1 ; i < this.dinosaurs.length ; i++){
        if (this.dinosaurs[i].guestsAttractedPerDay > biggestAttraction.guestsAttractedPerDay) {
            biggestAttraction = this.dinosaurs[i];
        };
    };
    return biggestAttraction;
}

Park.prototype.findBySpecies = function(species){
    let speciesList = []
    for (let dino of this.dinosaurs){
        if (dino.species === species){
            speciesList.push(dino);
        };
    };
    return speciesList;
}

Park.prototype.calculateAverageVisitorsPerDay = function(){
    let total = 0
    for (let dino of this.dinosaurs){
        total += dino.guestsAttractedPerDay;
    };
    return total;
}

Park.prototype.calculateAverageVisitorsPerYear = function(){
    return this.calculateAverageVisitorsPerDay() * 365;
}

Park.prototype.calculateAverageYearlyRevenue = function(){
    return this.calculateAverageVisitorsPerYear() * this.ticketPrice;
}

Park.prototype.removeBySpecies = function(species){
    let newList = [];
    for (let dino of this.dinosaurs){
        if (dino.species != species){
            newList.push(dino);
        };
    };
    this.dinosaurs = newList;
}

Park.prototype.numberOfDinosaursByDiet = function(){
    let dietTypes = {
        carnivore: 0,
        herbivore: 0,
        omnivore: 0
    };
    for (let dino of this.dinosaurs){
        for (let dietType in dietTypes){
            if (dietType === dino.diet){
                dietTypes[dietType] += 1
            };
        };
    };
    return dietTypes;
}


module.exports = Park;