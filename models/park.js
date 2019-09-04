const Park = function (name, ticketPrice, dinosaurs) {
  this.name = name;
  this.ticketPrice = ticketPrice;
  this.dinosaurs = dinosaurs;
}


Park.prototype.addADinosaur = function(dinosaur) {
  this.dinosaurs.push(dinosaur)
};

Park.prototype.removeADinosaur = function(dinosaur) {
  this.dinosaurs.pop(dinosaur)
};

// Park.prototype.findBestSellingDinosaur = function() {
//     this.dinosaurs.guestsAttractedPerDay.sort(function(a, b){return b-a}).reverse[0];
//     // return bestSellingDinosaur.name
// };

// Park.prototype.numberOfVisitorsPerDay = function() {
//   var guestsPerDay = 0
//
//   for (dinosaur of this.dinosaurs)
//     guestsPerDay += dinosaur.guestsAttractedPerDay
//   console.log(guestsPerDay);
// };
//
// module.exports = Park;
